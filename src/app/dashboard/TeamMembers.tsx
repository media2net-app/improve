"use client";
import React from "react";

const team = [
  {
    id: 1,
    name: "Arlene McCoy",
    role: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    status: "In Progress",
    statusColor: "bg-blue-100 text-blue-600",
    time: "42.5 Hours",
    chart: [12, 8, 10, 4, 8, 2, 8],
  },
  {
    id: 2,
    name: "Jacob Jones",
    role: "Developer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    status: "Complete",
    statusColor: "bg-green-100 text-green-600",
    time: "38.0 Hours",
    chart: [10, 12, 8, 6, 10, 8, 12],
  },
  {
    id: 3,
    name: "Kristin Watson",
    role: "UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    status: "In Progress",
    statusColor: "bg-blue-100 text-blue-600",
    time: "40.0 Hours",
    chart: [8, 10, 12, 8, 6, 10, 8],
  },
  {
    id: 4,
    name: "Darlene Robertson",
    role: "QA Engineer",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    status: "Complete",
    statusColor: "bg-green-100 text-green-600",
    time: "36.5 Hours",
    chart: [12, 8, 10, 4, 8, 2, 8],
  },
];

const TeamMembers = () => (
  <div className="bg-white rounded-xl shadow p-6">
    <div className="font-semibold text-gray-800 mb-4">Team Members</div>
    <table className="w-full text-left">
      <thead>
        <tr className="text-xs text-gray-400">
          <th className="py-2 font-normal">Assignee</th>
          <th className="font-normal">Status</th>
          <th className="font-normal">Time</th>
          <th className="font-normal">Chart</th>
        </tr>
      </thead>
      <tbody>
        {team.map((t) => (
          <tr key={t.id} className="border-t text-sm hover:bg-gray-50 transition">
            <td className="py-2 flex items-center space-x-3">
              <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full object-cover" />
              <div>
                <div className="font-medium text-gray-800">{t.name}</div>
                <div className="text-xs text-gray-400">{t.role}</div>
              </div>
            </td>
            <td>
              <span className={`px-2 py-0.5 rounded text-xs font-semibold ${t.statusColor}`}>{t.status}</span>
            </td>
            <td className="text-gray-400">{t.time}</td>
            <td>
              <svg viewBox="0 0 60 16" className="h-4 w-16">
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  points={t.chart.map((v, i) => `${i * 10},${16 - v}`).join(" ")}
                />
              </svg>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TeamMembers; 