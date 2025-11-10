"use client";

import { useState } from "react";
import Link from "next/link";
import { HomeIcon, UserIcon, FolderIcon, MailIcon } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/", icon: <HomeIcon size={22} /> },
    { label: "About Me", href: "/about", icon: <UserIcon size={22} /> },
    { label: "Projects", href: "/projects", icon: <FolderIcon size={22} /> },
    { label: "Contact", href: "/contact", icon: <MailIcon size={22} /> },
  ];

  return (
    <>
      {/* ===== MOBILE OVERLAY ===== */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside
        className={`hidden md:flex flex-col sticky top-[70px] h-[calc(100vh-104px)]
          bg-white/90 backdrop-blur-xl border border-gray-200 shadow-xl
          rounded-3xl transition-all duration-300 overflow-hidden
          ${isOpen ? "w-64" : "w-20"}`}
      >
        {/* Header / Toggle */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          {isOpen && (
            <h1 className="text-xl font-bold text-gray-800 whitespace-nowrap">
              MyPortfolio
            </h1>
          )}
          <button
            className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "◀" : "▶"}
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col gap-2 p-3 mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 p-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200
                ${!isOpen ? "justify-center" : "px-5"}`}
            >
              {item.icon}
              {isOpen && (
                <span className="font-medium tracking-wide">{item.label}</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto px-4 py-4 border-t border-gray-200 text-sm text-gray-500">
          {isOpen ? "© 2025 MyPortfolio" : "ⓘ"}
        </div>
      </aside>

      {/* ===== MOBILE SIDEBAR ===== */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-2xl z-50
          rounded-tr-3xl rounded-br-3xl transform transition-transform duration-300 md:hidden
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">MyPortfolio</h1>
          <button
            className="text-gray-600 text-lg hover:text-gray-900"
            onClick={() => setIsMobileOpen(false)}
          >
            ✖️
          </button>
        </div>
        <nav className="mt-5 flex flex-col gap-2 px-3">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition-all"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.icon}
              <span className="font-medium text-gray-700">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* ===== MOBILE TOGGLE BUTTON ===== */}
      <button
        className="fixed top-4 left-4 z-50 p-3 bg-white rounded-full shadow-lg md:hidden hover:bg-gray-100 transition"
        onClick={() => setIsMobileOpen(true)}
      >
        ☰
      </button>
    </>
  );
}
