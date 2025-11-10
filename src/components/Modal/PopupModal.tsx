"use client";

import { useEffect, useState } from "react";

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export default function PopupModal({ isOpen, onClose, title, children }: PopupModalProps) {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setShow(true);
  }, [isOpen]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => onClose(), 300); // wait for animation
  };

  if (!isOpen && !show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Modal box */}
      <div
        className={`relative bg-white rounded-xl w-full max-w-3xl z-10 transform transition-all duration-300
          ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}
          flex flex-col min-h-[200px] max-h-[80vh]`}
      >
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center">
          {title && <h2 className="text-2xl font-semibold">{title}</h2>}
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-800 ml-4 cursor-pointer"
          >
            ✖️
          </button>
        </div>

        {/* Scrollable content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {children}
        </div>

        {/* Optional bottom button */}
        <div className="p-6 border-t flex justify-end">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
