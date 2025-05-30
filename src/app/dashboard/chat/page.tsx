"use client";
import React, { useState } from "react";

const contacts = [
  {
    id: 1,
    name: "Wade Warren",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    status: "online",
    lastMessage: "Kun je het rapport delen?",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    status: "offline",
    lastMessage: "Bedankt voor je feedback!",
    time: "10 min ago",
    unread: false,
  },
  {
    id: 3,
    name: "Ralph Edwards",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    status: "online",
    lastMessage: "Nieuwe planning staat klaar.",
    time: "30 min ago",
    unread: true,
  },
  {
    id: 4,
    name: "Cody Fisher",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    status: "offline",
    lastMessage: "Tot morgen!",
    time: "1 uur geleden",
    unread: false,
  },
];

const messages = [
  {
    id: 1,
    sender: "Wade Warren",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    message: "Hallo! Hoe gaat het met het project?",
    time: "10:30",
    isMe: false,
  },
  {
    id: 2,
    sender: "Me",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    message: "Goed! Ik ben net klaar met de eerste versie.",
    time: "10:31",
    isMe: true,
  },
  {
    id: 3,
    sender: "Wade Warren",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    message: "Perfect! Kun je het rapport delen?",
    time: "10:32",
    isMe: false,
  },
];

const ChatPage = () => {
  const [selectedContact, setSelectedContact] = useState<typeof contacts[0] | null>(null);
  const [newMessage, setNewMessage] = useState("");
  
  // Ensure selectedContact is set only on client
  React.useEffect(() => {
    setSelectedContact(contacts[0]);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setNewMessage("");
    }
  };

  if (!selectedContact) {
    // Prevent rendering until selectedContact is set on client
    return null;
  }

  return (
    <div className="flex-1 flex">
      {/* Contacts list */}
      <div className="w-80 border-r bg-white">
        <div className="p-4 border-b">
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="overflow-y-auto h-[calc(100vh-8rem)]">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${
                selectedContact.id === contact.id ? "bg-blue-50" : ""
              }`}
            >
              <div className="relative">
                <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full" />
                <span
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                    contact.status === "online" ? "bg-green-500" : "bg-gray-400"
                  }`}
                ></span>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-start">
                  <div className="font-medium text-gray-800">{contact.name}</div>
                  <div className="text-xs text-gray-400">{contact.time}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500 truncate">{contact.lastMessage}</div>
                  {contact.unread && (
                    <span className="ml-2 w-2 h-2 rounded-full bg-blue-500"></span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat window */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat header */}
        <div className="h-16 border-b flex items-center px-6">
          <div className="flex items-center">
            <img src={selectedContact.avatar} alt={selectedContact.name} className="w-10 h-10 rounded-full" />
            <div className="ml-4">
              <div className="font-medium text-gray-800">{selectedContact.name}</div>
              <div className="text-xs text-gray-500">
                {selectedContact.status === "online" ? "Online" : "Offline"}
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex ${msg.isMe ? "flex-row-reverse" : "flex-row"} items-end max-w-[70%]`}>
                <img src={msg.avatar} alt={msg.sender} className="w-8 h-8 rounded-full" />
                <div className={`mx-2 ${msg.isMe ? "text-right" : "text-left"}`}>
                  <div className="text-xs text-gray-500 mb-1">{msg.sender}</div>
                  <div
                    className={`rounded-lg px-4 py-2 ${
                      msg.isMe
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.message}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message input */}
        <div className="border-t p-4">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-4">
            <button type="button" className="text-gray-400 hover:text-gray-600">
              <span className="material-icons">attach_file</span>
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              <span className="material-icons">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage; 