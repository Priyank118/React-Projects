import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // User message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // Simulated bot response (placeholder for future integration with backend/Dialogflow)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thank you for your message! (Bot Response)" },
      ]);
    }, 1000);

    setInput(""); // Clear input field
  };

  return (
    <div className="flex flex-col h-[80vh] p-4 bg-gray-100">
      <div className="flex-grow overflow-y-auto bg-white shadow-lg rounded p-4 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-300 text-black self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          className="flex-grow p-2 border rounded"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
