"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function UploadPage() {
  // Image Upload
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const profileInputRef = useRef<HTMLInputElement | null>(null);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // File Upload
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="min-h-screen p-0 space-y-12 p-5">
      
      {/* ===== Top: Profile Image Upload ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl flex flex-col items-center gap-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">Upload Image</h2>
        <p className="text-gray-500 text-center mb-4">
          Click the image to select a new picture
        </p>

        <div
          className="relative w-55 h-55 rounded-full overflow-hidden border-4 border-blue-200 cursor-pointer shadow-lg"
          onClick={() => profileInputRef.current?.click()}
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile Preview"
              className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold text-xl">
              Preview
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            ref={profileInputRef}
            className="hidden"
            onChange={handleProfileChange}
          />
        </div>
      </motion.div>

      {/* ===== Bottom: File Upload ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">Upload Files</h2>
        <p className="text-gray-500 text-center mb-4">
          Upload multiple files and review the list below
        </p>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg transition-all"
          >
            Select Files
          </button>
          <input
            type="file"
            multiple
            ref={fileInputRef}
            className="hidden"
            onChange={handleFilesChange}
          />

          {/* File preview */}
          {files.length > 0 && (
            <div className="mt-4 w-full border-t border-gray-200 pt-4">
              <h3 className="font-semibold text-gray-700 mb-2">Selected Files:</h3>
              <ul className="space-y-2">
                {files.map((file, idx) => (
                  <li key={idx} className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
                    <span className="truncate">{file.name}</span>
                    <span className="text-gray-500 text-sm">{(file.size / 1024).toFixed(2)} KB</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
