"use client";

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

export default function AboutMe() {
  const skills = ["React.js", "JavaScript", "Next.js", "Tailwind CSS", "Node.js", "Redux", "Styled + CSS"];
  const stats = [
    { label: "Years of Experience", value: "4+" },
    { label: "Projects Completed", value: "9+" },
    { label: "Happy Clients", value: "8+" },
  ];

  const handleDownload = () => {
    // Optional: track click or analytics here
    console.log("Resume download clicked");

    // Force download
    const link = document.createElement("a");
    link.href = "/asset/ResumeChong- 2025.pdf"; // path to your resume
    link.download = "ResumeChong- 2025.pdf"; // suggested file name
    link.click();
  };

  return (
    <section
      id="about"
      className="relative py-24 px-4 md:px-0 bg-gradient-to-b from-white to-blue-50 flex flex-col items-center text-center overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl animate-blob"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>

      {/* Section Title */}
      <FadeInWhenVisible direction="up">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 relative">
          About Me
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
        </h2>
      </FadeInWhenVisible>

      {/* Profile & Intro */}
      <FadeInWhenVisible delay={0.2}>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-5xl">
          {/* Profile Image */}
          <div className="flex-shrink-0" style={{ perspective: "1000px" }}>
            <img
              src="/asset/akaza.jpg"
              alt="Profile"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-blue-100 transform transition-transform duration-500 hover:rotate-3 hover:-rotate-3 hover:scale-105 hover:shadow-blue-300"
            />
          </div>

          {/* Description & Skills */}
          <div className="flex-1 space-y-8">
            <p className="text-gray-700 leading-relaxed md:text-left fontsize16">
              I am a passionate developer with experience in building modern web
              applications using{" "}
              <span className="font-semibold text-blue-600">React.js</span>,{" "}
              <span className="font-semibold text-blue-600">Context</span>, and{" "}
              <span className="font-semibold text-blue-600">Redux</span>. Currently, I’m learning{" "}
              <span className="font-semibold text-blue-600">Next.js</span>, and{" "}
              <span className="font-semibold text-blue-600">Tailwind CSS</span> while focusing on creating clean,
              and user-friendly interfaces using traditional{" "}
              <span className="font-semibold text-blue-600">Style</span>, and{" "}
              <span className="font-semibold text-blue-600">CSS</span>
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium text-sm sm:text-base md:text-base lg:text-lg transition transform hover:scale-105 hover:bg-blue-200 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center md:items-start">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                    {stat.value}
                  </span>
                  <span className="text-gray-600">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                Hire Me
              </a>
              <button
                onClick={handleDownload}
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-2xl font-semibold transition-all hover:bg-blue-50 cursor-pointer"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
