"use client";

import { Facebook, Twitter, LinkedinIcon, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / About */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">MyPortfolio</h2>
          <p className="text-gray-400 text-sm">
            Personal portfolio and project showcase. Connect with me on social media.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Facebook />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter />
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">
              <LinkedinIcon />
            </a>
            <a href="#" className="hover:text-gray-100 transition-colors">
              <Github />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-white">Quick Links</h3>
          <a href="#about" className="hover:text-blue-500 transition-colors">About Me</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          <a href="/dashboard" className="hover:text-blue-500 transition-colors">Dashboard</a>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-white">Contact</h3>
          <p>Email: <a href="mailto:kaeherngchong@email.com" className="hover:text-blue-500 transition-colors">kaeherngchong@gmail.com</a></p>
          <p>Phone: <a href="tel:+60142596639" className="hover:text-blue-500 transition-colors">+60 14-2596639</a></p>
          <p>Location: Puchong Selangor, Malaysia</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
}
