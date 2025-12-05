"use client";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
      image: "/asset/meme1.jpg",
      tech: ["Next.js", "Tailwind CSS", "React", "i18n", "Redux", "Context"],
      link: "#",
    },
    {
      title: "Warehouse Management System",
      description: "A system to manage warehouse inventory, track stock levels, and streamline warehouse operations efficiently.",
      image: "/asset/meme2.jpg",
      tech: ["React.js", "Node.js", "JavaScript", "Context", "RESTful API"],
      link: "#",
    },
    {
      title: "Claiming System",
      description: "A versatile React component library designed to streamline claim-related workflows.",
      image: "/asset/meme3.jpg",
      tech: ["React", "JavaScript", "Redux", "RESTful API"],
      link: "#",
    },
    {
      title: "Open Source",
      description: "A reusable React component library shared on GitHub.",
      image: "/asset/meme4.jpg",
      tech: ["React", "JavaScript", "Context", "RESTful API"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-28"
      style={{ scrollMarginTop: "5rem" }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Projects
        </h2>
        <p className="text-gray-600 mb-12 text-sm sm:text-base md:text-lg">
          Here are some of my projects — from web apps to open-source contributions.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              className="group bg-white rounded-3xl shadow-lg overflow-hidden project-card"
              style={{ cursor: "pointer" }}>
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover project-image"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs sm:text-sm project-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
