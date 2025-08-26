import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Star } from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    title: "House Marketplace",
    description:
      "A real estate marketplace with OAuth authentication, Leaflet map integration, user authentication, and product listing functionality.",
    image:
      "https://images.pexels.com/photos/8469940/pexels-photo-8469940.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "OAuth", "Leaflet"],
    github: "https://github.com/SBalaji666/house-marketplace",
    live: "https://house-marketplace-olive-six.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "GitHub Finder App",
    description:
      "An application to search and display GitHub user profiles and repositories with real-time updates and user-friendly interface.",
    image:
      "https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "TypeScript", "GitHub API"],
    github: "https://github.com/SBalaji666/React-github-finder-app",
    live: "https://react-github-finder-app-ashen.vercel.app/",
    featured: true,
  },
];

const otherProjects = [
  {
    id: 3,
    title: "React Feedback App",
    description:
      "A user-friendly application for collecting and displaying feedback with interactive forms and real-time updates.",
    technologies: ["React", "Tailwind Css", "Node.js"],
    github: "https://github.com/SBalaji666/React-Feedback-App",
    live: "https://my-react-feedback-app.netlify.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Redux Blog Post",
    description:
      "A modern blog post platform with markdown support, state management using Redux, and user authentication.",
    technologies: ["React", "Redux", "Tailwind Css"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Responsive portfolio website with smooth animations and dark mode support.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/SBalaji666/My-Porfolio",
    live: "https://balajisrinivasan.vercel.app/",
  },
];

export const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift"
            >
              <div className="absolute top-4 right-4 z-10">
                <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white text-sm font-medium">
                  <Star size={14} />
                  Featured
                </div>
              </div>

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    target="_blank"
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    target="_blank"
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">
            Other Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100 dark:border-gray-700"
              >
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    target="_blank"
                    href={project.github}
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    target="_blank"
                    href={project.live}
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
