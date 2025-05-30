"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col min-h-screen">
        <div className="h-16 flex items-center px-6 border-b">
          <span className="font-bold text-xl text-gray-800">Improve</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <div className="text-xs text-gray-400 mb-2">MENU</div>
          <a href="/dashboard" className={`flex items-center px-3 py-2 rounded-lg ${pathname === "/dashboard" ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700 hover:bg-gray-100"}`}>
            <span className="material-icons mr-2">dashboard</span> Dashboard
          </a>
          <a href="/dashboard/analytics" className={`flex items-center px-3 py-2 rounded-lg ${pathname === "/dashboard/analytics" ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700 hover:bg-gray-100"}`}>
            <span className="material-icons mr-2">analytics</span> Analytics Dashboard
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <span className="material-icons mr-2">shopping_cart</span> Ecommerce Dashboard
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <span className="material-icons mr-2">folder</span> Project Dashboard
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <span className="material-icons mr-2">account_balance</span> Banking Dashboard
          </a>
          <div className="mt-6 text-xs text-gray-400 mb-2">APPS</div>
          <a href="/dashboard/chat" className={`flex items-center px-3 py-2 rounded-lg ${pathname === "/dashboard/chat" ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700 hover:bg-gray-100"}`}>
            <span className="material-icons mr-2">chat</span> Chat
          </a>
          <a href="/dashboard/kanban" className={`flex items-center px-3 py-2 rounded-lg ${pathname === "/dashboard/kanban" ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700 hover:bg-gray-100"}`}>
            <span className="material-icons mr-2">view_kanban</span> Kanban
          </a>
          <a href="/dashboard/calendar" className={`flex items-center px-3 py-2 rounded-lg ${pathname === "/dashboard/calendar" ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700 hover:bg-gray-100"}`}>
            <span className="material-icons mr-2">calendar_today</span> Calendar
          </a>
          <a href="/dashboard/projects" className={`flex items-center px-3 py-2 rounded-lg ${pathname === "/dashboard/projects" ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700 hover:bg-gray-100"}`}>
            <span className="material-icons mr-2">assignment</span> Projects
          </a>
          <div className="mt-6 text-xs text-gray-400 mb-2">PAGES</div>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <span className="material-icons mr-2">lock</span> Authentication
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <span className="material-icons mr-2">build</span> Utility
          </a>
          <div className="mt-6 text-xs text-gray-400 mb-2">ELEMENTS</div>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <span className="material-icons mr-2">widgets</span> Widgets
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <span className="material-icons mr-2">view_module</span> Components
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <span className="material-icons mr-2">table_chart</span> Table
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <span className="material-icons mr-2">show_chart</span> Chart
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <span className="material-icons mr-2">insert_drive_file</span> Icons
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <span className="material-icons mr-2">menu_book</span> Documentation
          </a>
          <div className="mt-8 bg-blue-50 rounded-lg p-4 flex flex-col items-center">
            <div className="mb-2">
              <span className="material-icons text-4xl text-blue-400">lock_open</span>
            </div>
            <div className="font-semibold text-gray-700 mb-1">Unlimited Access</div>
            <div className="text-xs text-gray-500 mb-2 text-center">Upgrade your system to business plan</div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">Upgrade</button>
          </div>
        </nav>
        <div className="text-xs text-gray-400 text-center py-4 border-t">COPYRIGHT © 2022 DashCode, All Rights Reserved</div>
      </aside>
      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="h-16 bg-white border-b flex items-center px-8 justify-between">
          <div className="flex items-center space-x-4">
            <button className="md:hidden p-2 rounded hover:bg-gray-100">
              <span className="material-icons">menu</span>
            </button>
            <span className="text-lg font-semibold text-gray-800">Project</span>
          </div>
          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Search..." className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <span className="material-icons text-gray-400">notifications</span>
            <span className="material-icons text-gray-400">settings</span>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" className="w-8 h-8 rounded-full" />
          </div>
        </header>
        {/* Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
} 