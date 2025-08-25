import React from "react";
import { motion } from "framer-motion";
import { Heart, Code2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Code2 size={24} className="text-blue-400" />
            <span className="text-2xl font-bold gradient-text">
              Balaji Srinivasan
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 mb-6"
          >
            Full Stack Developer specializing in MERN Stack
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm text-gray-500"
          >
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 pt-6 border-t border-gray-800 text-sm text-gray-500"
          >
            © {new Date().getFullYear()} Balaji Srinivasan. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
