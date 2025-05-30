"use client";
import React from "react";

const user = {
  name: "Albert Flores",
  role: "Front End Developer",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  balance: "$32,400",
  boardCard: 200,
  calendarEvents: 3200,
  email: "info-500@dashcode.com",
  phone: "+1-202-555-0151",
  location: "Home# 320/N, Road# 71/B, Mohakhali, Dhaka-1207, Bangladesh",
};

export default function ProfilePage() {
  return (
    <div className="py-10 px-0 md:px-8">
      <div className="bg-white rounded-2xl shadow p-8 flex flex-col md:flex-row gap-8 items-center md:items-start w-full">
        {/* Avatar & Info */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
          <img src={user.avatar} alt={user.name} className="w-28 h-28 rounded-full object-cover border-4 border-blue-100 shadow" />
          <div className="mt-4 text-center md:text-left">
            <div className="text-xl font-bold text-gray-800">{user.name}</div>
            <div className="text-sm text-gray-400 mt-1">{user.role}</div>
          </div>
        </div>
        {/* Stats */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center">
            <span className="material-icons text-blue-400 text-3xl mb-2">account_balance_wallet</span>
            <div className="text-2xl font-bold text-blue-600">{user.balance}</div>
            <div className="text-xs text-gray-500 mt-1">Total Balance</div>
          </div>
          <div className="bg-green-50 rounded-xl p-6 flex flex-col items-center">
            <span className="material-icons text-green-400 text-3xl mb-2">credit_card</span>
            <div className="text-2xl font-bold text-green-600">{user.boardCard}</div>
            <div className="text-xs text-gray-500 mt-1">Board Card</div>
          </div>
          <div className="bg-yellow-50 rounded-xl p-6 flex flex-col items-center">
            <span className="material-icons text-yellow-400 text-3xl mb-2">event</span>
            <div className="text-2xl font-bold text-yellow-600">{user.calendarEvents}</div>
            <div className="text-xs text-gray-500 mt-1">Calender Events</div>
          </div>
        </div>
      </div>
      {/* Info */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
          <div className="font-semibold text-gray-700 mb-2">Info</div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="material-icons text-blue-400">email</span>
            <span className="font-medium w-20">EMAIL</span>
            <span className="truncate">{user.email}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="material-icons text-green-400">phone</span>
            <span className="font-medium w-20">PHONE</span>
            <span>{user.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="material-icons text-purple-400">location_on</span>
            <span className="font-medium w-20">LOCATION</span>
            <span className="truncate">{user.location}</span>
          </div>
        </div>
        {/* User Overview */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow p-6 flex flex-col justify-center items-center">
          <div className="font-semibold text-gray-700 mb-2">User Overview</div>
          <div className="text-gray-400 text-sm">(Hier kun je extra user info, grafieken of widgets tonen)</div>
        </div>
      </div>
    </div>
  );
} 