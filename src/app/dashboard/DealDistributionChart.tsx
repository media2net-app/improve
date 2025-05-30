"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "JAN", deals: 78 },
  { month: "FEB", deals: 62 },
  { month: "MAR", deals: 70 },
  { month: "APR", deals: 50 },
  { month: "MAY", deals: 68 },
  { month: "JUN", deals: 40 },
  { month: "JUL", deals: 60 },
  { month: "AUG", deals: 55 },
  { month: "SEP", deals: 72 },
  { month: "OCT", deals: 48 },
];

type TooltipPayload = { value?: number };
const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: TooltipPayload[]; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-lg shadow-lg px-4 py-2 border border-gray-100">
        <div className="text-xs text-gray-400">{label}</div>
        <div className="text-base font-semibold text-blue-600">{payload[0]?.value}</div>
      </div>
    );
  }
  return null;
};

const DealDistributionChart = () => (
  <ResponsiveContainer width="100%" height={120}>
    <LineChart
      data={data}
      margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
      <XAxis
        dataKey="month"
        tick={{ fill: "#9ca3af", fontSize: 12, fontWeight: 500 }}
        axisLine={false}
        tickLine={false}
        padding={{ left: 10, right: 10 }}
      />
      <Tooltip
        content={props => <CustomTooltip {...props} />}
        cursor={{ stroke: "#3b82f6", strokeWidth: 1, opacity: 0.1 }}
      />
      <Line
        type="monotone"
        dataKey="deals"
        stroke="#3b82f6"
        strokeWidth={3}
        dot={false}
        activeDot={{ r: 5, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
        isAnimationActive={true}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default DealDistributionChart; 