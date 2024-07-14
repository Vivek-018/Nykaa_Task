// src/components/ChatBotMessage.js
import React from "react";

const ChatBotMessage = () => {
  return (
    <div className="fixed bottom-0 right-4 flex items-center p-4 bg-white shadow-lg rounded-lg border border-gray-100">
      <div className="mr-2">
        <svg
          className="w-6 h-6 text-pink-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a10 10 0 00-10 10 10.3 10.3 0 001.4 5.2l-1.3 4.3a.8.8 0 00.2.8.8.8 0 00.8.2l4.3-1.3A10.3 10.3 0 0012 22a10 10 0 000-20zm-.5 13.5h-1v-1h1zm0-2.5h-1v-6h1z" />
        </svg>
      </div>
      <div>
        <p className="text-gray-800">How may we help you</p>
      </div>
    </div>
  );
};

export default ChatBotMessage;
