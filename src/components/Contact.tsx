"use client";
import { useState } from "react";
import { MailIcon } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setStatus("sending");

    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Contact Me
        </h2>
        <p className="text-gray-600 mb-16 text-sm sm:text-base md:text-lg">
          Feel free to reach out! Whether you want to collaborate, ask a question, or just say hi.
        </p>

        <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 transition-all duration-500 hover:shadow-blue-200">
          {/* Contact Info */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4">
            <div className="flex items-center gap-3 text-blue-600">
              <MailIcon className="w-6 h-6" />
              <a
                href="mailto:kaeherngchong@gmail.com"
                className="text-lg sm:text-xl font-semibold hover:text-blue-800 transition-colors"
              >
                kaeherngchong@gmail.com
              </a>
            </div>
            <p className="text-gray-500 text-sm sm:text-base">
              I’m available for full-time work, either hybrid or fully on-site. Let’s build something amazing together!
            </p>
          </div>

          {/* Contact Form */}
          <form
            className="flex-1 flex flex-col gap-4 w-full"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm transition duration-300 placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm transition duration-300 placeholder-gray-400"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 rounded-xl p-4 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm transition duration-300 placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* Status Message */}
            {status === "success" && (
              <p className="text-green-600 mt-2 animate-fadeIn">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-2 animate-fadeIn">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
