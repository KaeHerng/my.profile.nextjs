"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

import { useDispatch } from "react-redux";
import { login } from "@/store/userSlice";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // <-- new

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple client-side validation
    if (!email || !password) {
      setErrorMsg("Email and password cannot be empty.");
      return;
    }

    // Example: check password (mock)
    if (password !== "123456") {
      setErrorMsg("Incorrect password. Please try again.");
      return;
    }

    // Clear error
    setErrorMsg("");

    // Mock login
    const user = { name: "Chong Kae Herng", email };
    dispatch(login(user));
    router.push("/Page");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Animated background blobs */}
      <motion.div
        className="absolute top-[-20%] left-[-15%] w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-[140px]"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-25%] right-[-10%] w-[450px] h-[450px] bg-purple-300/20 rounded-full blur-[140px]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glassy Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 bg-white/70 backdrop-blur-xl p-10 sm:p-14 rounded-3xl shadow-2xl w-full max-w-md border border-white/30 hover:shadow-3xl transition-shadow duration-500"
      >
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-3">Welcome Back</h1>
        <p className="text-gray-500 text-center mb-8">Login to your account</p>

        {/* Error message */}
        {errorMsg && (
          <div className="mb-4 text-red-600 text-center font-medium animate-pulse">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-6">

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition shadow-sm hover:shadow-md"
              required
            />
          </div>

          {/* Password with toggle */}
          <div className="flex flex-col relative">
            <label htmlFor="password" className="mb-2 font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition shadow-sm w-full pr-12 hover:shadow-md"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-500 hover:text-gray-700 transition"
              >
                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-between items-center text-sm text-blue-600">
            <button type="button" className="hover:underline">Forgot password?</button>
            <button
              type="button"
              className="hover:underline"
              onClick={() => router.push("/Auth/registration")}
            >
              Register
            </button>
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg transition-all hover:shadow-2xl"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
