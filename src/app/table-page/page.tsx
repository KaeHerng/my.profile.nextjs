"use client";

import { useState } from "react";

const generateFakeData = () => {
  const data = [];
  for (let i = 1; i <= 80; i++) {
    data.push({
      id: i,
      name: `Name ${i}`,
      age: 20 + (i % 10),
      email: `user${i}@example.com`,
      role: `Role ${i % 5}`,
      department: `Dept ${i % 3}`,
      status: i % 2 === 0 ? "Active" : "Inactive",
      location: `City ${i % 4}`,
    });
  }
  return data;
};

const data = generateFakeData();
const columns = [
  "ID",
  "Name",
  "Age",
  "Email",
  "Role",
  "Department",
  "Status",
  "Location",
];

export default function TablePage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalPages = Math.ceil(data.length / pageSize);
  const currentData = data.slice((page - 1) * pageSize, page * pageSize);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));
  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    setPage(1);
  };

  return (
    // <div className="p-6 min-h-screen flex flex-col gap-12 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 animate-gradient-x rounded-3xl">
    <div className="p-6 min-h-screen flex flex-col gap-12 rounded-3xl">
      {/* ===== Light Table (Original) ===== */}
      <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200 p-4 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Light Table</h2>

        <div className="flex justify-between items-center flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium">Rows per page:</label>
            <select
              value={pageSize}
              onChange={handlePageSizeChange}
              className="px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all hover:scale-105"
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="text-gray-700 font-medium">
            Showing {(page - 1) * pageSize + 1} -{" "}
            {Math.min(page * pageSize, data.length)} of {data.length} records
          </div>
        </div>

        <div className="overflow-auto max-h-[400px] rounded-lg shadow-inner scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
          <table className="min-w-[900px] w-full border-collapse text-sm">
            <thead className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
              <tr>
                {columns.map((col) => (
                  <th
                    key={col}
                    className="px-6 py-3 text-left font-semibold tracking-wide uppercase"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentData.map((row) => (
                <tr
                  key={row.id}
                  className="transition-all duration-300 cursor-pointer hover:bg-blue-50 hover:shadow-md"
                >
                  <td className="px-6 py-3 text-gray-700">{row.id}</td>
                  <td className="px-6 py-3 text-gray-700">{row.name}</td>
                  <td className="px-6 py-3 text-gray-700">{row.age}</td>
                  <td className="px-6 py-3 text-gray-700">{row.email}</td>
                  <td className="px-6 py-3 text-gray-700">{row.role}</td>
                  <td className="px-6 py-3 text-gray-700">{row.department}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        row.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-gray-700">{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-3 flex-wrap">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((p) => {
              return (
                p === 1 ||
                p === 2 ||
                p === totalPages ||
                p === totalPages - 1 ||
                (p >= page - 1 && p <= page + 1)
              );
            })
            .map((p, idx, arr) => {
              const prev = arr[idx - 1];
              const showDots = prev && p - prev > 1;
              return (
                <span key={p} className="flex items-center">
                  {showDots && <span className="px-2 text-gray-400">...</span>}
                  <button
                    onClick={() => setPage(p)}
                    className={`px-3 py-1 rounded-md transition-all ${
                      p === page
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                        : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {p}
                  </button>
                </span>
              );
            })}

          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
          >
            Next
          </button>
        </div>
      </div>

      {/* ===== Dark Table (New Design) ===== */}
      <div className="bg-gray-800/90 backdrop-blur-md rounded-lg shadow-xl border border-gray-700 p-4 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-white mb-2">Dark Table</h2>

        <div className="flex justify-between items-center flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <label className="text-gray-200 font-medium">Rows per page:</label>
            <select
              value={pageSize}
              onChange={handlePageSizeChange}
              className="px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all hover:scale-105 bg-gray-700 text-white border-gray-600"
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="text-gray-200 font-medium">
            Showing {(page - 1) * pageSize + 1} -{" "}
            {Math.min(page * pageSize, data.length)} of {data.length} records
          </div>
        </div>

        <div className="overflow-auto max-h-[400px] rounded-lg shadow-inner custom-scrollbar">
          <table className="min-w-[900px] w-full border-collapse text-sm text-gray-200">
            <thead className="sticky top-0 bg-gray-900 text-white">
              <tr>
                {columns.map((col) => (
                  <th
                    key={col}
                    className="px-6 py-3 text-left font-semibold tracking-wide uppercase border-b border-gray-700"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentData.map((row) => (
                <tr
                  key={row.id}
                  className="transition-all duration-300 cursor-pointer hover:bg-gray-700 hover:shadow-md"
                >
                  <td className="px-6 py-3">{row.id}</td>
                  <td className="px-6 py-3">{row.name}</td>
                  <td className="px-6 py-3">{row.age}</td>
                  <td className="px-6 py-3">{row.email}</td>
                  <td className="px-6 py-3">{row.role}</td>
                  <td className="px-6 py-3">{row.department}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        row.status === "Active"
                          ? "bg-green-700 text-green-200"
                          : "bg-red-700 text-red-200"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-3">{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dark Pagination */}
        <div className="flex justify-center items-center gap-2 mt-3 flex-wrap">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-700 text-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-gray-600"
          >
            Prev
          </button>
                    
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((p) => {
              return (
                p === 1 ||
                p === 2 ||
                p === totalPages ||
                p === totalPages - 1 ||
                (p >= page - 1 && p <= page + 1)
              );
            })
            .map((p, idx, arr) => {
              const prev = arr[idx - 1];
              const showDots = prev && p - prev > 1;
              return (
                <span key={p} className="flex items-center">
                  {showDots && <span className="px-2 text-gray-400">...</span>}
                  <button
                    onClick={() => setPage(p)}
                    className={`px-3 py-1 rounded-md transition-all ${
                      p === page
                        ? "bg-blue-600 text-white shadow-md scale-105"
                        : "bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {p}
                  </button>
                </span>
              );
            })}
        
          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-700 text-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-gray-600"
          >
            Next
          </button>
        </div>
      </div>

      {/* ===== Glass Table (Third Design) ===== */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-4 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Glass Table</h2>

        {/* Top Controls */}
        <div className="flex justify-between items-center flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium">Rows per page:</label>
            <select
              value={pageSize}
              onChange={handlePageSizeChange}
              className="px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all hover:scale-105 bg-white/10 text-gray-700 border-white/30"
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
            
          <div className="text-gray-700 font-medium">
            Showing {(page - 1) * pageSize + 1} -{" "}
            {Math.min(page * pageSize, data.length)} of {data.length} records
          </div>
        </div>
            
        {/* Table */}
        <div className="overflow-auto max-h-[400px] rounded-2xl shadow-inner scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-white/10 hover:scrollbar-thumb-white/60 transition-colors">
          <table className="min-w-[900px] w-full border-collapse text-sm text-gray-700">
            <thead className="sticky top-0 bg-white/10 backdrop-blur-md">
              <tr>
                {columns.map((col) => (
                  <th
                    key={col}
                    className="px-6 py-3 text-left font-semibold tracking-wide uppercase border-b border-white/20">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentData.map((row) => (
                <tr
                  key={row.id}
                  className="transition-all duration-300 cursor-pointer hover:bg-white/10 hover:backdrop-blur-sm">
                  <td className="px-6 py-3">{row.id}</td>
                  <td className="px-6 py-3">{row.name}</td>
                  <td className="px-6 py-3">{row.age}</td>
                  <td className="px-6 py-3">{row.email}</td>
                  <td className="px-6 py-3">{row.role}</td>
                  <td className="px-6 py-3">{row.department}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        row.status === "Active"
                          ? "bg-green-200/80 text-green-500"
                          : "bg-red-200/80 text-red-500"
                      }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-3">{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
            
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-3 flex-wrap">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className="px-4 py-2 bg-white/20 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-white/30"
          >
            Prev
          </button>
            
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((p) => {
              return (
                p === 1 ||
                p === 2 ||
                p === totalPages ||
                p === totalPages - 1 ||
                (p >= page - 1 && p <= page + 1)
              );
            })
            .map((p, idx, arr) => {
              const prev = arr[idx - 1];
              const showDots = prev && p - prev > 1;
              return (
                <span key={p} className="flex items-center">
                  {showDots && <span className="px-2 text-gray-700/50">...</span>}
                  <button
                    onClick={() => setPage(p)}
                    className={`px-3 py-1 rounded-md transition-all ${
                      p === page
                        ? "bg-white/30 text-gray-700 shadow-md scale-105"
                        : "bg-white/10 text-gray-700 hover:bg-white/20"
                    }`}>
                    {p}
                  </button>
                </span>
              );
            })}

          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className="px-4 py-2 bg-white/20 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-white/30">
            Next
          </button>
        </div>
      </div>

      {/* ===== Sticky Last Column Table (Fixed Header + Sticky Last Column) ===== */}
      <div className="bg-gray-50 rounded-2xl shadow-2xl border border-gray-200 p-4 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sticky Last Column Table</h2>

        {/* Top Controls */}
        <div className="flex justify-between items-center flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium">Rows per page:</label>
            <select
              value={pageSize}
              onChange={handlePageSizeChange}
              className="px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all hover:scale-105">
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
            
          <div className="text-gray-700 font-medium">
            Showing {(page - 1) * pageSize + 1} - {Math.min(page * pageSize, data.length)} of {data.length} records
          </div>
        </div>
            
        {/* Table */}
        <div className="overflow-auto max-h-[400px] rounded-2xl shadow-inner scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200">
          <table className="min-w-[1000px] w-full border-collapse text-sm">
            <thead className="sticky top-0 bg-gray-100 z-10">
              <tr>
                {columns.map((col, idx) => (
                  <th
                    key={col}
                    className={`px-6 py-3 text-left font-semibold tracking-wide border-b border-gray-300 ${
                      idx === columns.length - 1 ? "sticky right-0 bg-gray-100 z-20" : ""
                    }`}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
              
            <tbody>
              {currentData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-all">
                  {columns.map((col, idx) => {
                    const value = row[col.toLowerCase() as keyof typeof row];
                    return (
                      <td
                        key={col}
                        className={`px-6 py-3 text-gray-700 border-b border-gray-200 ${
                          idx === columns.length - 1 ? "sticky right-0 bg-gray-50 z-5" : ""
                        }`}
                      >
                        {value}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
            
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-3 flex-wrap">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-gray-300"
          >
            Prev
          </button>
            
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((p) => {
              return (
                p === 1 ||
                p === 2 ||
                p === totalPages ||
                p === totalPages - 1 ||
                (p >= page - 1 && p <= page + 1)
              );
            })
            .map((p, idx, arr) => {
              const prev = arr[idx - 1];
              const showDots = prev && p - prev > 1;
              return (
                <span key={p} className="flex items-center">
                  {showDots && <span className="px-2 text-gray-400">...</span>}
                  <button
                    onClick={() => setPage(p)}
                    className={`px-3 py-1 rounded-md transition-all ${
                      p === page
                        ? "bg-blue-500 text-white shadow-md scale-105"
                        : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {p}
                  </button>
                </span>
              );
            })}

          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>



    </div>
  );
}
