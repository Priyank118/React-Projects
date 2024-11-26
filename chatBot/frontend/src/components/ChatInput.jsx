import React, { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput(""); // Clear input field after sending
  };

  return (
    <div className="flex items-center p-4 border-t bg-white">
      <input
        type="text"
        className="flex-grow p-2 border rounded-md"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
