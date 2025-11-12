"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

export default function MyProfilePage() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [name, setName] = useState("Chong Kae Herng");
  const [email, setEmail] = useState("kaeherngchong@gmail.com");
  const [phone, setPhone] = useState("014-2596639");
  const [Gender, setGender] = useState('');
  const [Birth, setBirth] = useState('');
  const [Nationality, setNational] = useState('');
  const [MaritalStatus, setMarital] = useState('');
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSaveBasicInfo = () => {
    console.log({ name, email, phone, profileImage });
    alert("Basic Info Updated!");
  };

  const handleSavePersonalInfo = () => {
    console.log({ Gender, Birth, Nationality, MaritalStatus });
    alert("Personal Info Updated!");
  };

  const handleSavePassword = () => {
    console.log({ password });
    alert("Password Updated!");
  };

  const handleSavePreferences = () => {
    console.log(notifications);
    alert("Preferences Updated!");
  };

  return (
    <div className="min-h-screen flex justify-center p-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-10xl bg-white/0 backdrop-blur-md rounded-3xl shadow-2xl p-10 sm:p-14 flex flex-col gap-10"
      >
        <h1 className="text-4xl font-bold text-gray-800 text-center">My Profile</h1>

        {/* ===== Profile Picture & Basic Info ===== */}
        <section className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={profileImage || "/asset/default-avatar.png"}
                // alt="Profile pic"
                onClick={() => fileInputRef.current?.click()}
                className="cursor-pointer w-40 h-40 sm:w-48 sm:h-48 md:w-35 md:h-35 rounded-full object-cover shadow-2xl border-5 border-blue-100 transform transition-transform duration-500 hover:rotate-3 hover:-rotate-3 hover:scale-105 hover:shadow-blue-300"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded-full shadow-lg transition fontsize16 cursor-pointer"
              >
                Upload
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
            <p className="text-gray-500 text-sm">Click to change profile picture</p>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-gray-700">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm transition"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm transition"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-600">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm transition"
                />
              </div>
            </div>
            <button
              onClick={handleSaveBasicInfo}
              className="cursor-pointer mt-3 w-36 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-md transition transform hover:scale-105 active:scale-95 active:shadow-inner">
              Save Info
            </button>
          </div>
        </section>

        {/* ====== Personal information ====== */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-gray-600">Persanol Information</h2>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col mb-5">
                <label className="mb-1 font-medium text-gray-600">Gender</label>
                <select
                  value={Gender}
                  onChange={(e) => setGender(e.target.value)}
                  className={`px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm transition`}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-600">Date of Birth</label>
                <input
                  type="date"
                  value={Birth}
                  onChange={(e) => setBirth(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm transition"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col mb-5">
                <label className="mb-1 font-medium text-gray-600">Nationality</label>
                <input 
                  type="text"
                  value={Nationality}
                  onChange={(e) => setNational(e.target.value)}
                  placeholder="eg.Malaysia"
                  className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm transition"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-600">Marital Status</label>
                {/* <div className="flex gap-6 mt-2">
                  {["single", "married"].map((status) => (
                    <label
                      key={status}
                      className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg transition 
                        ${MaritalStatus === status ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"}`}>
                      <input
                        type="radio"
                        name="maritalStatus"
                        value={status}
                        checked={MaritalStatus === status}
                        onChange={(e) => setMarital(e.target.value)}
                        className="accent-blue-500 w-4 h-4"
                      />
                      <span className="capitalize">{status}</span>
                    </label>
                  ))}
                </div> */}
                <div className="relative flex gap-4 mt-2 bg-gray-100 rounded-full p-1 w-max">
                  {["Single", "Married"].map((status, idx) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => setMarital(status.toLowerCase())}
                      className={`relative z-10 px-5 py-2 rounded-full font-medium transition
                        ${MaritalStatus === status.toLowerCase() 
                          ? "bg-blue-500 text-white shadow-md" 
                          : "text-gray-700 hover:bg-blue-100 cursor-pointer"}`
                      }
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleSavePersonalInfo}
            className="cursor-pointer mt-3 max-w-40 py-2 bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white font-semibold rounded-xl shadow-md transition transform hover:scale-105 active:scale-95 active:shadow-inner">
            Save Personal Info
          </button>
        </section>

        {/* ===== Change Password ===== */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-gray-700">Account Security</h2>
          <div className="relative w-full md:w-1/2">
            <label className="mb-1 font-medium text-gray-600">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm w-full pr-10 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute inset-y-0 right-3 top-6 flex items-center text-gray-500 hover:text-gray-700 transition"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            onClick={handleSavePassword}
            className="cursor-pointer w-36 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-md transition transform hover:scale-105 active:scale-95 active:shadow-inner"
          >
            Update Password
          </button>
        </section>

        {/* ===== Preferences / Notifications ===== */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-gray-700">Preferences</h2>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={notifications.email}
                onChange={() => setNotifications({ ...notifications, email: !notifications.email })}
                className="w-5 h-5 accent-blue-500"
              />
              Email Notifications
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={notifications.sms}
                onChange={() => setNotifications({ ...notifications, sms: !notifications.sms })}
                className="w-5 h-5 accent-blue-500"
              />
              SMS Notifications
            </label>
          </div>
          <button
            onClick={handleSavePreferences}
            className="cursor-pointer w-36 py-2 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold rounded-xl shadow-md transition transform hover:scale-105 active:scale-95 active:shadow-inner"
          >
            Save Preferences
          </button>
        </section>
      </motion.div>
    </div>
  );
}
