"use client";
import React, { useState, useEffect } from "react";

const filters = [
  "All",
  "business",
  "personal",
  "holiday",
  "family",
  "meeting",
  "etc",
];

const mockEvents = [
  {
    id: 1,
    title: "Team Meeting",
    date: "2024-06-03",
    type: "meeting",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Family Dinner",
    date: "2024-06-07",
    type: "family",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Business Trip",
    date: "2024-06-12",
    type: "business",
    color: "bg-yellow-500",
  },
  {
    id: 4,
    title: "Holiday",
    date: "2024-06-21",
    type: "holiday",
    color: "bg-pink-500",
  },
  {
    id: 5,
    title: "Personal Project",
    date: "2024-06-15",
    type: "personal",
    color: "bg-purple-500",
  },
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function formatDate(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export default function CalendarPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Only get today after mount
  const today = mounted ? new Date() : null;
  const [currentMonth, setCurrentMonth] = useState(today ? today.getMonth() : 0);
  const [currentYear, setCurrentYear] = useState(today ? today.getFullYear() : 2024);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [modalDate, setModalDate] = useState<string | null>(null);
  const [events, setEvents] = useState(mockEvents);
  const [newEvent, setNewEvent] = useState({ title: "", type: filters[1] });

  useEffect(() => {
    if (today) {
      setCurrentMonth(today.getMonth());
      setCurrentYear(today.getFullYear());
    }
  }, [mounted]);

  if (!mounted || !today) return null;

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfWeek = getFirstDayOfWeek(currentYear, currentMonth);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };
  const handleToday = () => {
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  };

  const openModal = (date: string) => {
    setModalDate(date);
    setShowModal(true);
    setNewEvent({ title: "", type: filters[1] });
  };
  const closeModal = () => {
    setShowModal(false);
    setModalDate(null);
  };
  const handleAddEvent = () => {
    if (!modalDate || !newEvent.title) return;
    setEvents([
      ...events,
      {
        id: Date.now(),
        title: newEvent.title,
        date: modalDate,
        type: newEvent.type,
        color:
          newEvent.type === "business"
            ? "bg-yellow-500"
            : newEvent.type === "personal"
            ? "bg-purple-500"
            : newEvent.type === "holiday"
            ? "bg-pink-500"
            : newEvent.type === "family"
            ? "bg-green-500"
            : newEvent.type === "meeting"
            ? "bg-blue-500"
            : "bg-gray-400",
      },
    ]);
    closeModal();
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Filter events
  const filteredEvents =
    activeFilter === "All"
      ? events
      : events.filter((e) => e.type === activeFilter);

  // Build calendar grid
  const calendarCells = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarCells.push(<div key={`empty-${i}`}></div>);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = formatDate(currentYear, currentMonth, day);
    const dayEvents = filteredEvents.filter((e) => e.date === dateStr);
    const isToday =
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear();
    calendarCells.push(
      <div
        key={day}
        className={`border border-gray-200 p-2 h-28 flex flex-col items-start justify-start relative rounded-lg cursor-pointer hover:bg-blue-50 transition group ${
          isToday ? "ring-2 ring-blue-400" : ""
        }`}
        onClick={() => openModal(dateStr)}
      >
        <span className={`text-gray-500 text-xs font-semibold mb-1 ${isToday ? "text-blue-600" : ""}`}>{day}</span>
        <div className="flex flex-col gap-1 w-full">
          {dayEvents.map((event) => (
            <div
              key={event.id}
              className={`flex items-center gap-1 px-2 py-1 rounded text-xs text-white font-medium truncate ${event.color}`}
              title={event.title}
            >
              <span className="material-icons text-xs align-middle mr-1">event</span>
              {event.title}
            </div>
          ))}
        </div>
        <span className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 text-gray-300 material-icons text-base">add</span>
      </div>
    );
  }

  return (
    <div className="py-10 px-0 md:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="material-icons text-blue-400 text-3xl">calendar_month</span>
          <h1 className="text-2xl font-bold text-gray-800">Calender</h1>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center gap-2"
            onClick={() => openModal(formatDate(currentYear, currentMonth, today.getDate()))}
          >
            <span className="material-icons text-base">add</span>
            Add Event
          </button>
        </div>
      </div>
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded hover:bg-gray-100 transition"
            onClick={handlePrevMonth}
            aria-label="Previous Month"
          >
            <span className="material-icons">chevron_left</span>
          </button>
          <span className="font-semibold text-lg text-gray-700">
            {monthNames[currentMonth]} {currentYear}
          </span>
          <button
            className="p-2 rounded hover:bg-gray-100 transition"
            onClick={handleNextMonth}
            aria-label="Next Month"
          >
            <span className="material-icons">chevron_right</span>
          </button>
          <button
            className="ml-4 px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 text-sm font-medium"
            onClick={handleToday}
          >
            Today
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-3 py-1 rounded transition-colors text-sm font-medium border ${
                activeFilter === filter
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold text-gray-700 mb-1">
            {day}
          </div>
        ))}
        {calendarCells}
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={closeModal}
              aria-label="Close"
            >
              <span className="material-icons">close</span>
            </button>
            <h2 className="text-lg font-bold mb-4">Add Event</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                placeholder="Event title"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={newEvent.type}
                onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
              >
                {filters.filter((f) => f !== "All").map((type) => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                onClick={handleAddEvent}
                disabled={!newEvent.title}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 