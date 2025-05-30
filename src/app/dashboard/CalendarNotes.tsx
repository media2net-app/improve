"use client";
import React, { useState } from "react";

const daysShort = ["M", "T", "W", "T", "F", "S", "S"];
const notes = [
  { color: "bg-yellow-500", text: "Meeting with client", sub: "Zoom meeting" },
  { color: "bg-blue-500", text: "Design meeting (team)" },
  { color: "bg-gray-500", text: "Background research" },
  { color: "bg-yellow-500", text: "Meeting with client", sub: "Zoom meeting" },
];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}

const CalendarNotes = () => {
  const todayDate = new Date();
  const [month, setMonth] = useState(todayDate.getMonth());
  const [year, setYear] = useState(todayDate.getFullYear());

  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sunday
  // Start op maandag, dus corrigeer (0=ma, 6=zo)
  const startOffset = (firstDay + 6) % 7;

  const isToday = (day: number) => {
    return (
      day === todayDate.getDate() &&
      month === todayDate.getMonth() &&
      year === todayDate.getFullYear()
    );
  };

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(y => y - 1);
    } else {
      setMonth(m => m - 1);
    }
  };
  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(y => y + 1);
    } else {
      setMonth(m => m + 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="font-semibold text-gray-800">Notes</div>
        <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Add Note</button>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <button className="p-1 rounded hover:bg-gray-100" onClick={prevMonth}>
            <span className="material-icons text-gray-400 text-base">chevron_left</span>
          </button>
          <div className="font-semibold text-gray-700">{monthNames[month]} {year}</div>
          <button className="p-1 rounded hover:bg-gray-100" onClick={nextMonth}>
            <span className="material-icons text-gray-400 text-base">chevron_right</span>
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-xs text-center mb-1">
          {daysShort.map((d, i) => (
            <div key={i} className="text-gray-400 font-medium py-1">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-xs text-center">
          {/* Lege blokken voor de eerste week */}
          {Array.from({ length: startOffset }).map((_, i) => (
            <div key={"empty-"+i}></div>
          ))}
          {/* Dagen van de maand */}
          {Array.from({ length: daysInMonth }, (_, i) => (
            <div
              key={i}
              className={`py-1 rounded ${
                isToday(i + 1)
                  ? "bg-blue-100 text-blue-600 font-bold"
                  : "text-gray-400"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <ul className="text-xs text-gray-600 space-y-2">
        {notes.map((note, i) => (
          <li key={i} className="flex items-center">
            <span className={`w-2 h-2 rounded-full mr-2 ${note.color} inline-block`} />
            <span>{note.text}</span>
            {note.sub && (
              <span className="text-gray-400 ml-2">({note.sub})</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarNotes; 