"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  TooltipProps
} from "recharts";
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 700 },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="text-gray-600">{`${label}`}</p>
        <p className="text-blue-600 font-semibold">{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const DealDistributionChart = () => (
  <div className="w-full h-[300px] bg-white rounded-lg p-4">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          content={props => <CustomTooltip {...props} />}
          cursor={{ stroke: "#3b82f6", strokeWidth: 1, opacity: 0.1 }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={{ fill: "#3b82f6", strokeWidth: 2 }}
          activeDot={{ r: 8, fill: "#3b82f6" }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default DealDistributionChart; 