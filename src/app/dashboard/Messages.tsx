"use client";
import React from "react";

const messages = [
  {
    id: 1,
    name: "Wade Warren",
    message: "Hoe gaat het met het project?",
    time: "2 min ago",
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    message: "Laten we snel bijpraten!",
    time: "5 min ago",
  },
  {
    id: 3,
    name: "Ralph Edwards",
    message: "Project update?",
    time: "10 min ago",
  },
  {
    id: 4,
    name: "Cody Fisher",
    message: "Tot morgen!",
    time: "30 min ago",
  },
  {
    id: 5,
    name: "Savannah Nguyen",
    message: "Bedankt voor je hulp!",
    time: "3 min ago",
  },
];

const Messages = () => (
  <div className="bg-white rounded-xl shadow p-6">
    <div className="font-semibold text-gray-800 mb-4">Messages</div>
    <ul className="space-y-3">
      {messages.map(m => (
        <li
          key={m.id}
          className="flex items-center justify-between group hover:bg-gray-50 rounded-lg px-2 py-2 transition"
        >
          <div>
            <div className="font-semibold text-gray-700 text-sm">{m.name}</div>
            <div className="text-gray-500 text-xs">{m.message}</div>
          </div>
          <div className="text-gray-400 text-xs">{m.time}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default Messages; 