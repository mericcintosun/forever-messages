import { useState } from "react";
import { ethers } from "ethers";
import Notification from "./Notification";

const AddMessageModal = ({ isOpen, onClose, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, message } = e.target.elements;

    setIsSubmitting(true);
    setNotification({
      type: "info",
      message:
        "You have recorded a new message, your message will be queued after you pay the gas fee.",
    });

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
      const contractABI = [
        {
          inputs: [
            { internalType: "string", name: "_name", type: "string" },
            { internalType: "string", name: "_content", type: "string" },
          ],
          name: "addMessage",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const tx = await contract.addMessage(name.value, message.value);
      await tx.wait();

      onSubmit({ name: name.value, content: message.value });
      setNotification({
        type: "success",
        message: "Message added successfully!",
      });

      onClose();
    } catch (error) {
      console.error("Error adding message:", error);
      setNotification({
        type: "error",
        message: "An error occurred while adding the message!",
      });
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }
  };

  if (!isOpen && !notification) return null;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
          <div className="bg-white p-6 rounded-lg mx-2 shadow-lg w-full md:w-2/3 lg:w-1/3 relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 text-xl font-bold focus:outline-none"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Add a New Message
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className=" text-black w-full mb-4 p-2 border rounded focus:ring focus:ring-blue-300"
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                className=" text-black w-full mb-4 p-2 border rounded focus:ring focus:ring-blue-300"
                required
              ></textarea>
              <div className="flex justify-end gap-2">
                <button
                  type="submit"
                  className={`px-4 py-2 rounded text-white ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Loading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
    </>
  );
};

export default AddMessageModal;
