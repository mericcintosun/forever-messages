import Link from "next/link";
import React from "react";

const HowToPage = () => {
  const steps = [
    {
      emoji: "🔐",
      title: "Set Up Metamask Wallet",
      description:
        "Install the Metamask extension, create a wallet, and secure your secret recovery phrase. This is your gateway to blockchain.",
    },
    {
      emoji: "🌐",
      title: "Switch to educhain Test Network",
      description:
        "Add the educhain network in Metamask, connect, and prepare to interact with the blockchain.",
    },
    {
      emoji: "💸",
      title: "Get Test ETH from Faucet",
      description:
        "Request free test ETH from a educhain faucet to enable transactions on the test network.",
    },
    {
      emoji: "📜",
      title: "Interact with Smart Contracts",
      description:
        "Use a dApp to interact with blockchain-based smart contracts by approving transactions in Metamask.",
    },
    {
      emoji: "🔍",
      title: "View Transactions on Etherscan",
      description:
        "Track your transactions and details on educhain Etherscan to understand the blockchain better.",
    },
  ];

  const heroSection = {
    emoji: "🤔",
    title: "Why We Need?",
    description:
      "Blockchain is a revolutionary technology that ensures transparency, security, and decentralization. It has the potential to disrupt various industries and bring about a new era of trust and efficiency. By understanding and adopting blockchain, you can be part of this transformative journey.",
  };

  return (
    <div className="bg-gray-50 flex flex-col justify-center items-center min-h-screen">
      <div className="px-6 py-10 max-w-5xl w-full text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          How to get started with Blockchain
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Follow these steps to set up your Metamask wallet, switch to the
          educhain test network, and interact with blockchain smart contracts.
        </p>
        <div className="grid grid-cols-1  gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="flex items-start mb-4">
                <span className="text-3xl font-bold text-gray-600 mr-4">
                  {index + 1}.
                </span>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-3xl mr-3">{step.emoji}</span>
                    <h2 className="text-xl font-semibold text-gray-700">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 py-12 bg-blue-600 text-white w-full text-center shadow-xl">
        <h2 className="text-4xl font-bold mb-4">{heroSection.title}</h2>
        <p className="text-lg mb-4 mx-12">{heroSection.description}</p>
        <button className="bg-white mt-8 text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition">
          <Link href="/messages">
            <p className="font-bold">Go to Messages! 🌍</p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HowToPage;
