"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Notification from "./Notification";

export default function Navbar() {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      }
    };

    checkWalletConnection();

    const handleAccountsChanged = (accounts) => {
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        setNotification({ type: "info", message: "Account changed!" });
      } else {
        setWalletAddress(null);
        setNotification({ type: "info", message: "Wallet disconnected!" });
      }
    };

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      }
    };
  }, []);

  const handleConnectWallet = async () => {
    try {
      if (!window.ethereum) {
        setNotification({
          type: "error",
          message: "Metamask not found! Please install.",
        });
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        setNotification({ type: "success", message: "Account connected!" });
        router.push("/messages");
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      setNotification({ type: "error", message: "Failed to connect wallet." });
    }
  };

  const handleLogout = () => {
    setWalletAddress(null);
    setNotification({ type: "success", message: "Logged out successfully!" });
    router.push("/");
  };

  const renderButtonLabel = () => {
    if (walletAddress) {
      return `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`;
    }
    return "Connect Wallet";
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-6 bg-white text-black border-b  ">
      <div className="flex items-center space-x-6 ">
        <div
          className="text-2xl font-extrabold cursor-pointer text-blue-600"
          onClick={() => router.push("/")}
        >
          Forever Messages
        </div>
      </div>
      <div className="flex justify-center items-center space-x-6">
        <Link href="/how-to">
          <p className="text-lg font-bold cursor-pointer  hidden md:block">
            How To?
          </p>
        </Link>
        <button
          onClick={walletAddress ? handleLogout : handleConnectWallet}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
        >
          {renderButtonLabel()}
        </button>
      </div>

      {/* Notification */}
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={handleCloseNotification}
        />
      )}
    </nav>
  );
}
