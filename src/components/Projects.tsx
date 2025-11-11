"use client";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
      image: "/assets/project1.jpg",
      tech: ["Next.js", "Tailwind CSS", "React"],
      link: "#",
    },
    {
      title: "E-commerce App",
      description: "Frontend e-commerce application with shopping cart and payment integration.",
      image: "/assets/project2.jpg",
      tech: ["React.js", "Node.js", "Stripe"],
      link: "#",
    },
    {
      title: "Open Source Library",
      description: "A reusable React component library shared on GitHub.",
      image: "/assets/project3.jpg",
      tech: ["React", "TypeScript"],
      link: "#",
    },
    {
      title: "Open Source",
      description: "A reusable React component library shared on GitHub.",
      image: "/assets/project3.jpg",
      tech: ["React", "TypeScript"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-28"
      style={{ scrollMarginTop: "5rem" }} // example inline style
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Projects
        </h2>
        <p className="text-gray-600 mb-12 text-sm sm:text-base md:text-lg">
          Here are some of my projects — from web apps to open-source contributions.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              className="group bg-white rounded-3xl shadow-lg overflow-hidden project-card"
              style={{ cursor: "pointer" }} // inline style example
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover project-image"
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
