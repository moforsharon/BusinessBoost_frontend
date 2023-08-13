import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../../components/Navbar/Navbar";

const socket = io("http://localhost:4000");

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const { OwnerId } = useParams();
  const investorId = Cookies.get("investorId");

  useEffect(() => {
    // Event listener for receiving messages
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Cleanup the event listener when the component unmounts
    return () => {
      socket.off("message");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipientId(investorId);
    const newMessage = {
      ownerId: socket.id,
      investorId: Cookies.get("investorId"),
      message: inputValue,
    };

    // Send the message to the server
    socket.emit("message", newMessage);

    // Clear the input field
    setInputValue("");
  };

  return (
    <div>
      <Header />
      <div className=" bg-gray-100  justify-center py-12 sm:px-6 lg:px-8">
        <div className=" flex flex-col  bg-white py-8 px-4 shadow sm:rounded-md sm:px-10">
          <div className="flex h-full flex-col">
            <div className="flex-1 p-6 overflow-y-auto h-20">
              <h1 className="text-2xl text-center font-bold mb-4">Chat Room</h1>
              <ul>
                {messages.map((message, index) => (
                  <li
                    key={index}
                    className={`${
                      message.ownerId === socket.id ? "text-right" : "text-left"
                    } mb-2`}
                  >
                    <div
                      className={`inline-block p-4 rounded-lg ${
                        message.ownerId === socket.id
                          ? "bg-purple-600 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {message.message}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="p-4">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 mr-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
