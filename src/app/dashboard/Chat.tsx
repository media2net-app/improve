"use client";
import React from "react";

const chats = [
  {
    id: 1,
    name: "Wade Warren",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    lastMessage: "Kun je het rapport delen?",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    lastMessage: "Bedankt voor je feedback!",
    time: "10 min ago",
    unread: false,
  },
  {
    id: 3,
    name: "Ralph Edwards",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    lastMessage: "Nieuwe planning staat klaar.",
    time: "30 min ago",
    unread: true,
  },
  {
    id: 4,
    name: "Cody Fisher",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    lastMessage: "Tot morgen!",
    time: "1 uur geleden",
    unread: false,
  },
];

const Chat = () => (
  <div className="bg-white rounded-xl shadow p-6">
    <div className="font-semibold text-gray-800 mb-4">Chat</div>
    <ul className="space-y-3">
      {chats.map(chat => (
        <li
          key={chat.id}
          className="flex items-center justify-between group hover:bg-gray-50 rounded-lg px-2 py-2 transition"
        >
          <div className="flex items-center space-x-3">
            <img src={chat.avatar} alt={chat.name} className="w-8 h-8 rounded-full object-cover" />
            <div>
              <div className="font-medium text-gray-800">{chat.name}</div>
              <div className="text-xs text-gray-500">{chat.lastMessage}</div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-400">{chat.time}</span>
            {chat.unread && (
              <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Chat; 