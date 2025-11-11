"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PopupModal from "@/components/Modal/PopupModal";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  // Typing Role Component
  function TypingRole() {
    const roles = ["Frontend Developer", "React Enthusiast", "UI/UX Lover"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

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
      }, 120);
      return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, roles]);

    useEffect(() => {
      const interval = setInterval(() => setBlink((prev) => !prev), 500);
      return () => clearInterval(interval);
    }, []);

    return (
      <span>
        {roles[index].substring(0, subIndex)}
        <span className="border-r-2 border-blue-600 ml-1 animate-pulse">{blink ? "|" : " "}</span>
      </span>
    );
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-tl-3xl rounded-tr-3xl">
        
      {/* Subtle grid/lines pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:30px_30px] opacity-30"></div>

      {/* Background floating blobs (layered, pastel) */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-10%] w-[450px] h-[450px] bg-sky-200/40 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-5%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[140px]"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[-20%] w-[300px] h-[300px] bg-pink-100/30 rounded-full blur-[100px]"
      />

      {/* Floating particles layer */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0], x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            className="absolute w-2 h-2 bg-white/70 rounded-full top-[calc(10%+10*i)] left-[calc(5%+7*i)]"
          />
        ))}
      </div>
      
      {/* Glassy glow behind content */}
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30 backdrop-blur-3xl opacity-70"
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-6 px-4"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800">
          Hi, I’m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500 animate-gradient-x">
            Chong Kae Herng
          </span>{" "}
          👋
        </h1>
      
        <p className="text-gray-600 max-w-2xl">
          I’m a{" "}
          <span className="font-semibold text-sky-600 relative inline-block">
            <TypingRole />
            <motion.span
              className="absolute left-0 -bottom-1 h-1 bg-sky-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            />
          </span>
          . I build modern, high-quality web experiences.
        </p>
      
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(59,130,246,0.25)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="mt-6 px-10 py-4 bg-gradient-to-r from-sky-400 to-indigo-400 text-white rounded-3xl font-semibold shadow-md hover:from-sky-500 hover:to-indigo-500 transition-all duration-300"
        >
          Learn More
        </motion.button>
      </motion.div>
      
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mt-12 relative z-10"
      >
        <motion.img
          src="/asset/Programmer.jpg"
          alt="Hero Illustration"
          className="w-64 sm:w-72 md:w-80 rounded-3xl shadow-xl object-cover border-4 border-white/70"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
      {/* Modal */}
      <PopupModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Hello!">
        <p>Welcome to my profile website!</p>
        <div>
          {Array.from({ length: 50 }, (_, i) => (
            <p key={i}>Scrollable content line {i + 1}</p>
          ))}
        </div>
      </PopupModal>
    </section>

  );
}
