"use client";

import { useState, useEffect  } from "react";
import { motion } from "framer-motion";
import PopupModal from "@/components/Modal/PopupModal";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated Background Circles */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-blue-200 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-purple-200 rounded-full opacity-20 blur-3xl"
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-6 px-4"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800">
          Hi, I’m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x">
            Chong Kae Herng
          </span>{" "}
          👋
        </h1>

        {/* Typing animation for role */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl">
          I’m a{" "}
          <span className="font-semibold text-blue-600">
            <TypingRole />
          </span>
          . I build modern, high-quality web experiences.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(59,130,246,0.3)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="mt-4 px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold shadow-lg transition-all duration-300"
        >
          Learn More
        </motion.button>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mt-12"
      >
        <motion.img
          src="/assets/akaza.jpg"
          alt="Hero Illustration"
          className="w-64 sm:w-72 md:w-80 rounded-3xl shadow-2xl object-cover"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Modal */}
      <PopupModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Hello!">
        <p>This is a smooth animated modal with blurred background!</p>
        <div>
          {Array.from({ length: 50 }, (_, i) => (
            <p key={i}>Scrollable content line {i + 1}</p>
          ))}
        </div>
      </PopupModal>
    </section>
  );
}

// Typing role component
function TypingRole() {
  const roles = ["Frontend Developer", "React Enthusiast", "UI/UX Lover"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Typing effect
  useEffect(() => {
    if (index === roles.length) return;
    const timeout = setTimeout(() => {
      if (!reverse) {
        if (subIndex < roles[index].length) setSubIndex(subIndex + 1);
        else setReverse(true);
      } else {
        if (subIndex > 0) setSubIndex(subIndex - 1);
        else {
          setReverse(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, 150);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, roles]);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(timeout2);
  }, []);

  return (
    <span>
      {roles[index].substring(0, subIndex)}
      <span className="border-r-2 border-blue-600 ml-1 animate-pulse">{blink ? "|" : " "}</span>
    </span>
  );
}
