"use client";
import React from "react";

const boards = [
  {
    id: "todo",
    title: "To Do",
    color: "bg-blue-50",
    cards: [
      {
        id: "card-1",
        title: "CRM Dashboard",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        start: "2022-10-03",
        end: "2022-10-06",
        progress: 90,
        avatars: [
          "https://randomuser.me/api/portraits/men/32.jpg",
          "https://randomuser.me/api/portraits/women/44.jpg",
        ],
      },
      {
        id: "card-2",
        title: "Dashcode Example Kanban",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        start: "2022-10-03",
        end: "2022-10-06",
        progress: 55,
        avatars: [
          "https://randomuser.me/api/portraits/men/45.jpg",
          "https://randomuser.me/api/portraits/women/46.jpg",
        ],
      },
    ],
  },
  {
    id: "inprogress",
    title: "In Progress",
    color: "bg-yellow-50",
    cards: [
      {
        id: "card-3",
        title: "Business Dashboard",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        start: "2022-10-03",
        end: "2022-10-06",
        progress: 75,
        avatars: [
          "https://randomuser.me/api/portraits/men/47.jpg",
          "https://randomuser.me/api/portraits/women/48.jpg",
        ],
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "bg-green-50",
    cards: [
      {
        id: "card-4",
        title: "Management Dashboard",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        start: "2022-10-03",
        end: "2022-10-06",
        progress: 40,
        avatars: [
          "https://randomuser.me/api/portraits/men/49.jpg",
          "https://randomuser.me/api/portraits/women/50.jpg",
        ],
      },
    ],
  },
];

export default function KanbanPage() {
  return (
    <div className="py-10 px-0 md:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Kanban</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors font-medium">
          + Add Board
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {boards.map((board) => (
          <div key={board.id} className="flex-1 min-w-[300px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-icons text-lg text-gray-400">view_kanban</span>
              <span className="font-bold text-gray-700 text-lg">{board.title}</span>
            </div>
            <div className={`rounded-2xl p-4 min-h-[500px] ${board.color} shadow-sm flex flex-col gap-6`}>
              {board.cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-xl shadow p-4 flex flex-col gap-3 border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-gray-800 text-base">{card.title}</div>
                    <span className="text-xs text-gray-400">0 days left</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">{card.desc}</div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="material-icons text-blue-300 text-base">calendar_today</span>
                    <span>Start date {card.start}</span>
                    <span className="mx-1">-</span>
                    <span>End date {card.end}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex -space-x-2">
                      {card.avatars.map((avatar, i) => (
                        <img
                          key={i}
                          src={avatar}
                          alt="avatar"
                          className="w-7 h-7 rounded-full border-2 border-white shadow"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400 ml-2">+{card.avatars.length}</span>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-400">Progress</span>
                      <span className="text-xs font-semibold text-gray-700">{card.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          card.progress > 70
                            ? "bg-green-400"
                            : card.progress > 50
                            ? "bg-yellow-400"
                            : "bg-blue-400"
                        }`}
                        style={{ width: `${card.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 