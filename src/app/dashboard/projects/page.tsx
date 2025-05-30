"use client";
import React from "react";

const projects = [
  {
    id: "management",
    title: "Management Dashboard",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    start: "2022-10-03",
    end: "2022-10-06",
    progress: 75,
    avatars: [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/44.jpg",
      "https://randomuser.me/api/portraits/men/45.jpg",
    ],
  },
  {
    id: "business",
    title: "Business Dashboard",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    start: "2022-10-03",
    end: "2022-10-10",
    progress: 50,
    avatars: [
      "https://randomuser.me/api/portraits/men/47.jpg",
      "https://randomuser.me/api/portraits/women/48.jpg",
      "https://randomuser.me/api/portraits/men/49.jpg",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="py-10 px-0 md:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors font-medium">
          + Add Project
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow p-6 border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-icons text-lg text-gray-400">dashboard</span>
              <span className="font-bold text-gray-700 text-lg">{project.title}</span>
            </div>
            <div className="text-xs text-gray-400 mb-2">{project.desc}</div>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <span className="material-icons text-blue-300 text-base">calendar_today</span>
              <span>Start date {project.start}</span>
              <span className="mx-1">-</span>
              <span>End date {project.end}</span>
            </div>
            <div className="flex items-center gap-2 mt-2 mb-2">
              <div className="flex -space-x-2">
                {project.avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt="avatar"
                    className="w-7 h-7 rounded-full border-2 border-white shadow"
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400 ml-2">+2</span>
            </div>
            <div className="mt-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-400">Progress</span>
                <span className="text-xs font-semibold text-gray-700">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    project.progress > 70
                      ? "bg-green-400"
                      : project.progress > 50
                      ? "bg-yellow-400"
                      : "bg-blue-400"
                  }`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 