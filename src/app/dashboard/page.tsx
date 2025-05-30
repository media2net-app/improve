"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import CalendarNotes from "./CalendarNotes";
import TaskList from "./TaskList";
import TeamMembers from "./TeamMembers";
import Chat from "./Chat";

const DealDistributionChart = dynamic(() => import("./DealDistributionChart"), { ssr: false });

const statsData = [
  { label: "Total Task", value: 64, color: "bg-blue-50 text-blue-600", icon: "check_circle" },
  { label: "Completed", value: 45, color: "bg-green-50 text-green-600", icon: "task_alt" },
  { label: "Hours", value: 190, color: "bg-yellow-50 text-yellow-600", icon: "schedule" },
  { label: "Spendings", value: "$3,564", color: "bg-purple-50 text-purple-600", icon: "payments" },
];

interface StatCardProps {
  label: string;
  value: string | number;
  color: string;
  icon: string;
  delay: number;
}

function StatCard({ label, value, color, icon, delay }: StatCardProps) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div className={`rounded-xl px-6 py-5 flex items-center gap-4 shadow-sm border border-gray-100 transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${color}`}> 
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/80">
        <span className="material-icons text-2xl">{icon}</span>
      </div>
      <div>
        <div className="text-2xl font-bold leading-tight">{value}</div>
        <div className="text-xs font-medium mt-1 text-gray-500">{label}</div>
      </div>
    </div>
  );
}

function ProgressCard({ percent, delay }: { percent: number; delay: number }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  const radius = 24;
  const stroke = 5;
  const norm = 2 * Math.PI * radius;
  const progress = show ? percent : 0;
  return (
    <div className={`rounded-xl px-6 py-5 flex flex-col items-center justify-center shadow-sm border border-gray-100 transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} bg-cyan-50 text-cyan-600`}>
      <div className="text-xs font-semibold mb-2">Progress</div>
      <svg width="60" height="60" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r={radius} fill="none" stroke="#e0e7ef" strokeWidth={stroke} />
        <circle
          cx="30"
          cy="30"
          r={radius}
          fill="none"
          stroke="#06b6d4"
          strokeWidth={stroke}
          strokeDasharray={norm}
          strokeDashoffset={norm - (progress / 100) * norm}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s cubic-bezier(.4,2,.6,1)" }}
        />
        <text x="30" y="36" textAnchor="middle" fontSize="18" fill="#06b6d4" fontWeight="bold">{progress}</text>
      </svg>
    </div>
  );
}

const activity = [
  { label: "Project start date", date: "Sep 20, 2021" },
  { label: "Project start date", date: "Sep 20, 2021" },
  { label: "Project start date", date: "Sep 20, 2021" },
];

const files = [
  { name: "Dashboard.fig", date: "08 Jan 2021", size: "15MB" },
  { name: "E-commerce.pdf", date: "08 Jan 2021", size: "15MB" },
  { name: "Job portal_ui.zip", date: "08 Jan 2021", size: "15MB" },
  { name: "Ecommerce.pdf", date: "08 Jan 2021", size: "15MB" },
  { name: "Screenshot.jpg", date: "08 Jan 2021", size: "15MB" },
];

const DashboardPage = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2 space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {statsData.map((stat, i) => (
          <StatCard key={stat.label} {...stat} delay={i * 120} />
        ))}
        <ProgressCard percent={70} delay={statsData.length * 120} />
      </div>
      {/* Chart */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="font-semibold text-gray-800 mb-4">Deal Distribution By Stage</div>
        <div className="w-full h-24">
          <DealDistributionChart />
        </div>
      </div>
      {/* Task & Chat */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TaskList />
        <Chat />
      </div>
      {/* Team Members */}
      <TeamMembers />
    </div>
    {/* Right column */}
    <div className="space-y-8">
      {/* Notes/Calendar */}
      <CalendarNotes />
      {/* Activity */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="font-semibold text-gray-800 mb-4">Activity</div>
        <ul className="space-y-3">
          {activity.map((a, i) => (
            <li key={i} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                <span className="text-gray-700 text-sm">{a.label}</span>
              </div>
              <span className="text-gray-400 text-xs">{a.date}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Files */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="font-semibold text-gray-800 mb-4">Files</div>
        <ul className="space-y-3">
          {files.map((f, i) => (
            <li key={i} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="material-icons text-blue-400 mr-2">insert_drive_file</span>
                <span className="text-gray-700 text-sm">{f.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-xs">{f.date} / {f.size}</span>
                <button className="text-blue-600 hover:underline text-xs">Download</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default DashboardPage; 