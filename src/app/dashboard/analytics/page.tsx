"use client";
import React, { useState } from "react";

const stats = [
  { label: "Total revenue", value: "$3,564", icon: "payments", color: "bg-blue-50 text-blue-600" },
  { label: "Products sold", value: "564", icon: "shopping_cart", color: "bg-green-50 text-green-600" },
  { label: "Growth", value: "+5.0%", icon: "trending_up", color: "bg-yellow-50 text-yellow-600" },
];

const companies = [
  { id: 1, name: "Biffco Enterprises Ltd.", email: "Biffco@example.com", sector: "Technology", progress: 95, growth: 5.2, orders: 343, revenue: "$231.26", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Biffco Enterprises Ltd.", email: "Biffco@example.com", sector: "Technology", progress: 197, growth: -2.1, orders: 315, revenue: "$432.81", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
  { id: 3, name: "Biffco Enterprises Ltd.", email: "Biffco@example.com", sector: "Technology", progress: 137, growth: 3.7, orders: 329, revenue: "$437.65", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Biffco Enterprises Ltd.", email: "Biffco@example.com", sector: "Technology", progress: 101, growth: 0.0, orders: 336, revenue: "$387.55", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
  { id: 5, name: "Biffco Enterprises Ltd.", email: "Biffco@example.com", sector: "Technology", progress: 99, growth: -1.5, orders: 375, revenue: "$489.80", avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 6, name: "Biffco Enterprises Ltd.", email: "Biffco@example.com", sector: "Technology", progress: 101, growth: 2.3, orders: 490, revenue: "$421.45", avatar: "https://randomuser.me/api/portraits/men/6.jpg" },
];

const activity = [
  "Finance KPI Mobile app launch preparion meeting.",
  "Finance KPI Mobile app launch preparion meeting.",
  "Finance KPI Mobile app launch preparion meeting.",
  "Finance KPI Mobile app launch preparion meeting.",
  "Finance KPI Mobile app launch preparion meeting.",
];

export default function AnalyticsPage() {
  const [period, setPeriod] = useState("Weekly");
  const [companyFilter, setCompanyFilter] = useState("All Company");
  return (
    <div className="py-10 px-0 md:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="material-icons text-blue-400 text-3xl">analytics</span>
          <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
        </div>
        <div className="flex gap-2">
          <select value={period} onChange={e => setPeriod(e.target.value)} className="border rounded px-3 py-2 text-sm">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
          <button className="bg-gray-100 px-4 py-2 rounded text-sm font-medium hover:bg-gray-200">Select date</button>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className={`rounded-xl px-6 py-5 flex items-center gap-4 shadow-sm border border-gray-100 ${stat.color}`}>
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/80">
              <span className="material-icons text-2xl">{stat.icon}</span>
            </div>
            <div>
              <div className="text-2xl font-bold leading-tight">{stat.value}</div>
              <div className="text-xs font-medium mt-1 text-gray-500">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Overview Table */}
      <div className="bg-white rounded-xl shadow p-6 mb-8 overflow-x-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="font-semibold text-gray-800">Overview</div>
          <select value={companyFilter} onChange={e => setCompanyFilter(e.target.value)} className="border rounded px-3 py-2 text-sm">
            <option>All Company</option>
            <option>Biffco Enterprises Ltd.</option>
          </select>
        </div>
        <table className="min-w-full text-sm bg-white border border-gray-200 rounded-xl">
          <thead>
            <tr className="text-left text-gray-700 bg-white border-b border-gray-200">
              <th className="py-3 px-4 font-semibold">Company</th>
              <th className="py-3 px-4 font-semibold">Sector</th>
              <th className="py-3 px-4 font-semibold">Progress</th>
              <th className="py-3 px-4 font-semibold">Orders</th>
              <th className="py-3 px-4 font-semibold">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {companies
              .filter(c => companyFilter === "All Company" || c.name === companyFilter)
              .map((c) => (
                <tr key={c.id} className="border-b border-gray-100 hover:bg-blue-50 transition">
                  <td className="py-3 px-4 flex items-center gap-2">
                    <img src={c.avatar} alt={c.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="font-semibold text-gray-800">{c.name}</div>
                      <div className="text-xs text-gray-500">{c.email}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{c.sector}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-semibold">
                        {c.progress}%
                      </span>
                      {c.growth > 0 ? (
                        <span className="flex items-center text-xs font-semibold text-green-600">
                          <span className="material-icons text-base ml-1">arrow_upward</span>
                        </span>
                      ) : c.growth < 0 ? (
                        <span className="flex items-center text-xs font-semibold text-red-600">
                          <span className="material-icons text-base ml-1">arrow_downward</span>
                        </span>
                      ) : (
                        <span className="flex items-center text-xs font-semibold text-gray-500">
                          <span className="material-icons text-base ml-1">remove</span>
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{c.orders}</td>
                  <td className="py-3 px-4 font-semibold text-gray-800">{c.revenue}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <div className="font-semibold text-gray-800 mb-4">Recent Activity</div>
        <ul className="space-y-3">
          {activity.map((a, i) => (
            <li key={i} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                <span className="text-gray-700 text-sm">{a}</span>
              </div>
              <span className="text-gray-400 text-xs">1 hour</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Most Sales */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="font-semibold text-gray-800 mb-4">Most Sales</div>
        <div className="flex items-center gap-4">
          <span className="material-icons text-blue-400 text-3xl">public</span>
          <div>
            <div className="text-lg font-bold text-gray-800">GlobalUSA</div>
            <div className="text-xs text-gray-400">Overview</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-xs text-gray-400 mb-1">Invested amount</div>
          <div className="text-2xl font-bold text-blue-600">$8264.35</div>
          <div className="text-xs text-green-500 mt-1">+0.001.23 (0.2%)</div>
        </div>
      </div>
    </div>
  );
} 