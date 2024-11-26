import React from "react";

const ChatHeader = () => {
  return (
    <div className="bg-blue-600 text-white p-4 shadow-md flex items-center justify-between">
      <h1 className="text-lg font-semibold">Museum Ticket Chatbot</h1>
      <span className="text-sm italic">How can I assist you today?</span>
    </div>
  );
};

export default ChatHeader;
