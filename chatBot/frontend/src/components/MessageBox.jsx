import React from "react";

const MessageBox = ({ text, sender }) => {
  const isUser = sender === "user";
  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-2 items-center`}
    >
      <div
        className={`p-3 rounded-lg max-w-xs ${
          isUser
            ? "bg-blue-500 text-white self-end"
            : "bg-gray-200 text-black self-start"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default MessageBox;
