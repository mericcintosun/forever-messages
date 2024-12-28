"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import MessageCard from "../components/MessageCard";
import Pagination from "../components/Pagination";
import AddMessageModal from "../components/AddMessageModal";
import SearchBar from "../components/SearchBar";
import useContract from "../hooks/useContract";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [account, setAccount] = useState(null);

  const { fetchMessages } = useContract();
  const messagesPerPage = 6;

  const filteredMessages = messages.filter((message) =>
    message.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);
  const currentMessages = filteredMessages.slice(
    (currentPage - 1) * messagesPerPage,
    currentPage * messagesPerPage
  );

  useEffect(() => {
    const checkAccount = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          setAccount(address);
        } catch {
          setAccount(null);
        }
      }
    };

    checkAccount();
  }, []);

  useEffect(() => {
    if (account) {
      const getMessages = async () => {
        const fetchedMessages = await fetchMessages();
        setMessages(fetchedMessages.reverse());
      };

      getMessages();
    }
  }, [fetchMessages, account]);

  const addMessage = (newMessage) => {
    setMessages([newMessage, ...messages]);
  };

  if (!account) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl font-semibold text-gray-700">
          Please connect your wallet to continue.😊
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {currentMessages.map((message, index) => (
          <MessageCard key={index} message={message} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <button
        className="fixed bottom-12 right-6 bg-blue-500 text-white p-4 rounded-xl shadow-lg hover:bg-blue-600 transition"
        onClick={() => setIsModalOpen(true)}
      >
        New Message
      </button>
      <AddMessageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addMessage}
      />
    </div>
  );
};

export default Messages;
