"use client";

import React, { useState } from "react";
import { loginFNC } from '@/api';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// ======= Fake Data =======
const lineData = Array.from({ length: 12 }, (_, i) => ({
  month: `Month ${i + 1}`,
  sales: Math.floor(Math.random() * 1000 + 200),
  revenue: Math.floor(Math.random() * 5000 + 1000),
}));

const barData = Array.from({ length: 6 }, (_, i) => ({
  product: `Product ${i + 1}`,
  sold: Math.floor(Math.random() * 500 + 50),
}));

const pieData = [
  { name: "Completed", value: 400 },
  { name: "In Progress", value: 300 },
  { name: "Pending", value: 200 },
  { name: "Cancelled", value: 100 },
];

const COLORS = ["#4ade80", "#facc15", "#3b82f6", "#f87171"];

// ======= Dashboard Page =======
export default function DashboardPage() {
  const [activeUsers, setActiveUsers] = useState(1234);
  const [totalOrders, setTotalOrders] = useState(456);
  const [revenue, setRevenue] = useState(7890);

  // ===== Button Functions =====
  const handleNewOrder = () => {
    alert("新订单已创建！");
    // TODO: 可以加 API 请求逻辑
    setTotalOrders(prev => prev + 1); // 示例: 总订单 +1
  };

  const handleGenerateReport = () => {
    alert("报告生成中，请稍候...");
    // TODO: 可以触发生成报表的逻辑
  };

  const handleExportData = async () => {
    try {
      // 假设这里是调用 loginFNC 作为示例
      const result = await loginFNC('Testing', '123123');
      console.log('API Response:', result);
      alert('数据导出成功！请查看控制台日志');
    } catch (err) {
      console.error(err);
      alert('导出失败，请稍后重试');
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white flex flex-col gap-8 rounded-3xl">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      {/* ===== Top Stats Cards ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center shadow-lg">
          <h2 className="text-lg font-semibold text-gray-200">Active Users</h2>
          <p className="text-3xl font-bold mt-2">{activeUsers}</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center shadow-lg">
          <h2 className="text-lg font-semibold text-gray-200">Total Orders</h2>
          <p className="text-3xl font-bold mt-2">{totalOrders}</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center shadow-lg">
          <h2 className="text-lg font-semibold text-gray-200">Revenue (RM)</h2>
          <p className="text-3xl font-bold mt-2">{revenue}</p>
        </div>
      </div>

      {/* ===== Quick Actions ===== */}
      <div className="flex gap-3">
        <button
          onClick={handleNewOrder}
          className="bg-blue-400 hover:bg-blue-300 px-4 py-2 rounded-md shadow-md text-white"
        >
          + New Order
        </button>
        <button
          onClick={handleGenerateReport}
          className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-md shadow-md text-white"
        >
          Generate Report
        </button>
        <button
          onClick={handleExportData}
          className="bg-blue-300 hover:bg-blue-200 px-4 py-2 rounded-md shadow-md text-white"
        >
          Export Data
        </button>
      </div>

      {/* ===== Charts Section ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart: Sales & Revenue */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">Sales & Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.7)" />
              <YAxis stroke="rgba(255,255,255,0.7)" />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="revenue" stroke="#facc15" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart: Products Sold */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">Products Sold</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
              <XAxis dataKey="product" stroke="rgba(255,255,255,0.7)" />
              <YAxis stroke="rgba(255,255,255,0.7)" />
              <Tooltip />
              <Bar dataKey="sold" fill="#4ade80" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ===== Pie Chart Section ===== */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg w-full lg:w-1/2">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">Orders Status</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
