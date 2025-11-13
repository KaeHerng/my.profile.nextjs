"use client";

import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  desc: string;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (product) setShow(true);
  }, [product]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => onClose(), 250); // smooth closing animation
  };

  if (!product) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* ===== Backdrop ===== */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* ===== Modal Box ===== */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative bg-white rounded-2xl shadow-xl w-[90%] max-w-md transform transition-all duration-300 ${
          show ? "scale-100" : "scale-95"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            ✖️
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3 text-gray-700">
          <p>
            <span className="font-medium text-gray-800">Category:</span>{" "}
            {product.category}
          </p>
          <p>
            <span className="font-medium text-gray-800">Price:</span> $
            {product.price}
          </p>
          <p className="text-gray-500 leading-relaxed">{product.desc}</p>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-200 flex justify-end">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
