import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
      { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-800' },
      { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-900' },
      { name: 'Tailwind CSS', level: 92, color: 'from-teal-400 to-blue-500' },
      { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-orange-500' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90, color: 'from-green-500 to-green-700' },
      { name: 'Express.js', level: 88, color: 'from-gray-600 to-gray-800' },
      { name: 'MongoDB', level: 85, color: 'from-green-600 to-green-800' },
      { name: 'PostgreSQL', level: 80, color: 'from-blue-700 to-indigo-800' },
      { name: 'REST APIs', level: 92, color: 'from-purple-500 to-purple-700' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90, color: 'from-orange-500 to-red-500' },
      { name: 'Docker', level: 75, color: 'from-blue-500 to-blue-700' },
      { name: 'AWS', level: 70, color: 'from-yellow-500 to-orange-600' },
      { name: 'Firebase', level: 85, color: 'from-yellow-400 to-orange-500' },
      { name: 'GraphQL', level: 78, color: 'from-pink-500 to-purple-600' },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section-padding">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="card hover-lift"
            >
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};