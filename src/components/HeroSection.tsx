import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { useInfiniteTypewriter } from "../hooks/useInfiniteTypewriter";
import { ParticleRain } from "./ParticleRain";

const roles = [
  "Full Stack Developer",
  "MERN Stack Expert",
  "React Specialist",
  "Node.js Developer",
  "MongoDB Expert",
];

export const HeroSection: React.FC = () => {
  const typewriterText = useInfiniteTypewriter(roles, 100, 50, 2000);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mesh dark:bg-mesh-dark"
    >
      {/* Particle Rain Effect */}
      <ParticleRain />

      {/* Beautiful Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-pink-400/25 to-purple-500/25 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center max-w-5xl mx-auto py-24">
          {/* Code Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8 lg:mb-12"
          >
            <div className="p-4 lg:p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl animate-pulse-glow">
              <Code2 size={48} className="text-white lg:w-16 lg:h-16" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 text-shadow-lg leading-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text animate-gradient-shift bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_auto]">
              Balaji S
            </span>
          </motion.h3>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 lg:mb-12"
          >
            <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-700 dark:text-gray-300 min-h-[2.5rem] lg:min-h-[3.5rem] flex items-center justify-center">
              <span className="border-r-2 border-blue-600 animate-blink pr-1">
                {typewriterText}
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-10 lg:mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating exceptional web experiences with modern
            technologies. Specializing in React, Node.js, MongoDB, and
            Express.js with 2.5+ years of experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 lg:mb-20"
          >
            <button
              className="btn-primary hover-lift group"
              onClick={() => scrollToSection("projects")}
            >
              <span className="flex items-center gap-3">
                View My Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </span>
            </button>

            <button className="btn-secondary hover-lift">
              Download Resume
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-6 mb-12 lg:mb-20"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 group"
                aria-label={label}
              >
                <Icon
                  size={24}
                  className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 group"
            aria-label="Scroll to about section"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown
                size={24}
                className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
              />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
