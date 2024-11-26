import React, { useState } from "react";
import MessageBox from "./MessageBox";

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to the Museum Ticket Booking.", sender: "bot" },
  ]);

  const handleSend = (text) => {
    setMessages((prev) => [...prev, { text, sender: "user" }]);

    // Simulated bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks for your message! How can I help?", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((msg, idx) => (
          <MessageBox key={idx} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatContainer;
