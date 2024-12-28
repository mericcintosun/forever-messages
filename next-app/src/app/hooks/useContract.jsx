import { useCallback } from "react";
import { ethers } from "ethers";

const useContract = () => {
  const fetchMessages = useCallback(async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
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
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "content",
              type: "string",
            },
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "MessageAdded",
          type: "event",
        },
        {
          inputs: [],
          name: "getMessages",
          outputs: [
            {
              components: [
                { internalType: "string", name: "name", type: "string" },
                { internalType: "string", name: "content", type: "string" },
                { internalType: "address", name: "sender", type: "address" },
              ],
              internalType: "struct MessageBoard.Message[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );

      const data = await contract.getMessages();
      return data.map((msg) => ({
        name: msg.name,
        content: msg.content,
      }));
    } catch (error) {
      console.error("Error fetching messages:", error);
      return [];
    }
  }, []);

  return { fetchMessages };
};

export default useContract;
