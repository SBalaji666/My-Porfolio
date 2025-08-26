import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Award, Coffee, TrendingUp, Code } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "2.6+" },
  { icon: Coffee, label: "Projects Completed", value: "10+" },
  { icon: Code, label: "Hours of Code", value: "1000+" },
  { icon: User, label: "Technologies Mastered", value: "10+" },
];

export const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate full-stack developer with a love for creating innovative
            solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Alex Johnson"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl hover-lift"
              />
            </div> */}

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 relative overflow-hidden"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="text-center relative z-10">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <TrendingUp className="w-20 h-20 text-blue-600 mx-auto mb-6" />
                    </motion.div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                      Always learning,
                      <br />
                      always innovating
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Full Stack Developer & MERN Stack Expert
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                With over 2.6+ years of experience in full-stack development, I
                specialize in creating robust, scalable web applications using
                the MERN stack. My journey began with a passion for
                problem-solving and has evolved into expertise in modern web
                technologies.
              </p>

              <p>
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest industry trends. My approach combines
                technical excellence with user-centered design to deliver
                exceptional digital experiences.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover-lift"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                      <stat.icon size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
