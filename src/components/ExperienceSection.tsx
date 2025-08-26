import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Building, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Associate Software Developer",
    company: "Aroopa Technologies",
    location: "Chennai, India",
    period: "05/2023 - Present",
    type: "Full-time",
    description:
      "Developed and enhanced complex modules including Project Management, Order Management Integration, Product Management, and CRM (Leads, Opportunities, and Customer Company), improving system functionality and user workflows. Managed development of scalable microservices and optimized backend performance.",
    achievements: [
      "Developed and enhanced 5+ complex modules, improving system functionality",
      "Reduced application load times by 30%, enhancing user satisfaction",
      "Implemented feature increasing customer engagement by 25%",
      "Managed 10 microservices handling 1M+ daily requests",
      "Decreased server response time by 25% with optimized queries",
      "Improved system efficiency by 50% through code refactoring",
      "Developed and maintained 5+ web applications",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Intern (Full Stack Development)",
    company: "Aroopa Technologies",
    location: "Chennai, India",
    period: "02/2023 - 05/2023",
    type: "Internship",
    description:
      "Assisted in developing scalable web applications and optimizing system performance. Collaborated on implementing customer engagement features and streamlining development processes.",
    achievements: [
      "Contributed to feature increasing user retention by 25%",
      "Optimized 10+ database queries, improving response time by 40%",
      "Developed scalable web application supporting 10,000+ monthly users",
      "Streamlined CI/CD pipelines, reducing development cycles by 30%",
      "Enhanced system reliability, cutting downtime by 15%",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Firebase"],
    color: "from-purple-500 to-pink-500",
  },
];

export const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey through the world of software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10 flex items-center justify-center">
                  <div
                    className={`w-2 h-2 bg-gradient-to-r ${experience.color} rounded-full`}
                  ></div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ml-20 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-100 dark:border-gray-700">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                          <Building size={18} />
                          <span className="font-semibold">
                            {experience.company}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award size={16} />
                            <span>{experience.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start gap-3"
                            >
                              <div
                                className={`w-2 h-2 bg-gradient-to-r ${experience.color} rounded-full mt-2 flex-shrink-0`}
                              ></div>
                              <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 bg-gradient-to-r ${experience.color} text-white rounded-full text-sm font-medium shadow-lg`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how my experience can help bring your project to
              life
            </p>
            <button
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 hover-lift"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
