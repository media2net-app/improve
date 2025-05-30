"use client";
import React, { useState } from "react";

const initialTasks = [
  {
    id: 1,
    title: "Maak intakeformulier af",
    subtitle: "Voor nieuwe klanten",
    status: "In Progress",
    statusColor: "bg-blue-100 text-blue-600",
    checked: false,
  },
  {
    id: 2,
    title: "Plan demo call",
    subtitle: "Met sales team",
    status: "Todo",
    statusColor: "bg-gray-100 text-gray-500",
    checked: false,
  },
  {
    id: 3,
    title: "Review AI-actieplan",
    subtitle: "Voor klant X",
    status: "Completed",
    statusColor: "bg-green-100 text-green-600",
    checked: true,
  },
  {
    id: 4,
    title: "Update dashboard design",
    subtitle: "Nieuwe grafiek toevoegen",
    status: "In Progress",
    statusColor: "bg-blue-100 text-blue-600",
    checked: false,
  },
];

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleCheck = (id: number) => {
    setTasks(tasks =>
      tasks.map(t =>
        t.id === id ? { ...t, checked: !t.checked } : t
      )
    );
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="font-semibold text-gray-800 mb-4">Task List</div>
      <ul className="space-y-3">
        {tasks.map(task => (
          <li
            key={task.id}
            className="flex items-center justify-between group hover:bg-gray-50 rounded-lg px-2 py-2 transition"
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={task.checked}
                onChange={() => toggleCheck(task.id)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <div>
                <div className={`font-medium text-gray-800 ${task.checked ? "line-through text-gray-400" : ""}`}>
                  {task.title}
                </div>
                <div className="text-xs text-gray-400">{task.subtitle}</div>
              </div>
              <span className={`ml-2 px-2 py-0.5 rounded text-xs font-semibold ${task.statusColor}`}>
                {task.status}
              </span>
            </div>
            <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition">
              <button className="p-1 hover:bg-gray-100 rounded">
                <span className="material-icons text-gray-400 text-base">edit</span>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <span className="material-icons text-gray-400 text-base">delete</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList; 