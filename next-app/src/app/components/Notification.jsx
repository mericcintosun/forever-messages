import { useEffect } from "react";

const Notification = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 px-4 py-4 rounded shadow-lg text-white z-50 w-140  ${
        type === "success"
          ? "bg-green-500"
          : type === "error"
          ? "bg-red-500"
          : "bg-blue-500"
      }`}
    >
      <div className="flex items-center justify-between ">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-12 text-lg font-bold focus:outline-none"
        >
          ×
        </button>
      </div>

      <div className="relative mt-2 h-1 w-full bg-opacity-20 bg-white">
        <div
          className="absolute top-0 left-0 h-full bg-white transition-width duration-[000ms]"
          style={{ animation: "shrink 5s linear forwards" }}
        ></div>
      </div>
    </div>
  );
};

export default Notification;
