const MessageCard = ({ message }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="font-bold text-2xl text-gray-800 mb-4 border-b">
        {message.name}
      </h3>
      <p className="font-bold text-lg text-blue-600">message:</p>
      <p className="text-md text-gray-600 mt-1">{message.content}</p>
    </div>
  );
};

export default MessageCard;
