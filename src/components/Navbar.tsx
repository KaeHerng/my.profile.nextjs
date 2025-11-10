"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // <-- import useRouter
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // <-- initialize router

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to navigate to MoreDetails page
  const goToDetails = () => {
    router.push("/more-details?ref=navbar&user=123");
    setIsOpen(false); // close mobile menu if open
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="/#hero">Home</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#projects">Projects</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
          <li>
            <button
              onClick={goToDetails}
              className="hover:text-blue-600 cursor-pointer"
            >
              Details
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
          <li>
            <Link href="#hero" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={goToDetails}
              className="hover:text-blue-600 cursor-pointer"
            >
              Details
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
