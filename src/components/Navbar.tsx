"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  let closeTimeout: NodeJS.Timeout;
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const goToDetails = () => {
    router.push("/more-details?ref=navbar&user=123");
    setIsOpen(false);
    setIsSubmenuOpen(false);
  };

  const goToTableView = () => {
    router.push("/table-page");
    setIsOpen(false);
    setIsSubmenuOpen(false);
  };

  const goToDashboard = () => {
    router.push("/dashboard");
    setIsOpen(false);
    setIsSubmenuOpen(false);
  };

  // 🔹 点击其他区域关闭 submenu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".submenu-container")) {
        setIsSubmenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md z-40 rounded-xl px-6 py-3 mx-4 mt-4 mb-0 flex justify-between items-center sticky top-0 relative">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-blue-600">
        MyPortfolio
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium relative">
        <li><Link href="/#hero">Home</Link></li>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#projects">Projects</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
        <li>
          <button
            onClick={goToDetails}
            className="hover:text-blue-600 cursor-pointer"
          >
            Details
          </button>
        </li>

        {/* Others submenu (Desktop hover with delay) */}
        <li
          className="relative submenu-container"
          onMouseEnter={() => {
            clearTimeout(closeTimeout);
            setIsSubmenuOpen(true);
          }}
          onMouseLeave={() => {
            closeTimeout = setTimeout(() => setIsSubmenuOpen(false), 200); // 200ms 延迟
          }}
        >
          <button className="hover:text-blue-600 cursor-pointer flex items-center gap-1">
            Others ▾
          </button>

          {isSubmenuOpen && (
            <ul
              className="absolute top-full right-0 mt-1 bg-white shadow-md rounded-lg py-2 text-gray-700 text-sm z-50 w-48 min-w-[150px]"
              onMouseEnter={() => clearTimeout(closeTimeout)}
              onMouseLeave={() => {
                closeTimeout = setTimeout(() => setIsSubmenuOpen(false), 200);
              }}
            >
              <li>
                <button
                  onClick={goToTableView}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Table View
                </button>
              </li>
              <li>
                <button
                  onClick={goToDashboard}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Dashboard
                </button>
              </li>
              {/* 可以继续添加更多 submenu */}
            </ul>
          )}
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700" onClick={toggleMenu}>
        {isOpen ? "✖️" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium md:hidden rounded-b-xl">
          <li><Link href="#hero" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="#about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li>
            <button
              onClick={goToDetails}
              className="hover:text-blue-600 cursor-pointer"
            >
              Details
            </button>
          </li>

          {/* Others submenu (Mobile click) */}
          <li className="submenu-container">
            <button
              onClick={() => setIsSubmenuOpen(prev => !prev)}
              className="flex justify-between items-center w-full hover:text-blue-600"
            >
              Others <span>{isSubmenuOpen ? "▲" : "▼"}</span>
            </button>

            {isSubmenuOpen && (
              <ul className="mt-2 bg-gray-50 rounded-lg text-gray-700 text-sm flex flex-col space-y-2 px-4 py-2">
                <li>
                  <button
                    onClick={goToTableView}
                    className="text-left w-full hover:text-blue-600"
                  >
                    Table View
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}
