"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here
    console.log(formData);
  };

  const goToLogin = () => {
    router.push("/Auth/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create Your Account
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            required
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            required
          />
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-md transition"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <a onClick={goToLogin} className="text-blue-500 hover:underline">
            Sign In
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gray-300"></span>
          <span className="text-gray-400 font-medium">or continue with</span>
          <span className="h-px w-16 bg-gray-300"></span>
        </div>

        {/* Social login buttons */}
        <div className="mt-4 flex justify-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-xl hover:bg-gray-100 transition">
            <img src="/assets/google.svg" alt="Google" className="w-5 h-5" />
            Google
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-xl hover:bg-gray-100 transition">
            <img src="/assets/github.svg" alt="GitHub" className="w-5 h-5" />
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
