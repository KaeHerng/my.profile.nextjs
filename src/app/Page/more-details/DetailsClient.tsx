"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Pencil, Trash2 } from "lucide-react";

interface TableRow {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
}

export default function DetailsClient() {
  const [tableData, setTableData] = useState<TableRow[]>([]);

  useEffect(() => {
    const data: TableRow[] = Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: i % 3 === 0 ? "Admin" : "User",
      created_at: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString(),
    }));
    setTableData(data);
  }, []);

  return (
    <div className="mt-6">
      {/* Scroll container for both horizontal & vertical scrolling */}
      <div className="overflow-auto max-h-[60vh] rounded-lg shadow-lg border border-gray-200">
        <table className="w-full table-auto border-collapse bg-white">
          <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left font-semibold border-b">ID</th>
              <th className="px-4 py-3 text-left font-semibold border-b">Name</th>
              <th className="px-4 py-3 text-left font-semibold border-b">Email</th>
              <th className="px-4 py-3 text-left font-semibold border-b">Role</th>
              <th className="px-4 py-3 text-left font-semibold border-b">Created At</th>
              <th className="px-4 py-3 text-center font-semibold border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={row.id}
                className={`transition hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}>
                <td className="px-4 py-2 whitespace-nowrap">{row.id}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.email}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.role}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {dayjs(row.created_at).format("YYYY-MM-DD HH:mm")}
                </td>
                <td className="px-4 py-2 text-center flex justify-center gap-2 whitespace-nowrap">
                  <button className="p-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition">
                    <Pencil className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-red-600 hover:bg-red-500 rounded-lg transition">
                    <Trash2 className="w-4 h-4 text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 text-sm text-gray-500 text-right">
        Scroll horizontally inside the table to see all columns →
      </div>
    </div>
  );
}
