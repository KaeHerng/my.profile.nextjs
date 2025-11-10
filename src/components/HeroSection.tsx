"use client";

import { useState } from "react";
import PopupModal from "@/components/Modal/PopupModal";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50">
      <h1 className="text-5xl font-bold mb-4">Hi, I’m [Chong Kae Herng] 👋</h1>
      <p className="text-lg text-gray-600 max-w-xl">
        I’m a [Frontend Developer]. Welcome to my portfolio!
      </p>

       {/* Button to trigger modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Learn More
      </button>

      {/* Use reusable Modal component */}
      <PopupModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Hello!">
        <p>This is a smooth animated modal with blurred background!</p>
        <div>
          {/* Put long content here */}
          {Array.from({ length: 50 }, (_, i) => (
            <p key={i}>Scrollable content line {i + 1}</p>
          ))}
        </div>
      </PopupModal>
    </section>
  );
}
