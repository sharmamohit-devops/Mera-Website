'use client';

import { motion } from 'framer-motion';

const educationHistory = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Electrical Engineering',
    institution: 'Aligarh Muslim University',
    duration: 'Expected Graduation: May 2028',
    details: 'Currently pursuing a degree in Electrical Engineering with a focus on power systems and control theory. Complementing my technical education with self-study in web development and computer science.',
  },
  {
    degree: 'Class 12 (Senior Secondary)',
    institution: 'Sayyid Hamid Senior Secondary School',
    duration: 'Year of Passing: 2024',
    details: 'Completed senior secondary education with Physics, Chemistry, and Mathematics as main subjects. Achieved 74.8% in final examinations while actively participating in coding competitions and tech events.',
  },
  {
    degree: 'Class 10 (Secondary)',
    institution: 'Babu Lal Jain Inter College',
    duration: 'Year of Passing: 2021',
    details: 'Completed secondary education with distinction (82%). Developed foundational skills in mathematics and problem-solving that would later support my transition into programming and web development.',
  },
];

const itemVariants = {
  hidden: (isLeft: boolean) => ({ opacity: 0, x: isLeft ? -100 : 100 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 w-1 bg-gradient-to-b from-blue-400 to-teal-400 h-full transform -translate-x-1/2 md:block hidden"></div>
          {educationHistory.map((edu, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex items-center w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 justify-start' : 'md:pl-8 md:ml-auto justify-end'}`}
              custom={index % 2 === 0}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className={`bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 w-full md:w-11/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-2">{edu.degree}</h3>
                <p className="text-lg font-semibold text-white mb-1">{edu.institution}</p>
                <p className="text-sm text-gray-400 mb-4">{edu.duration}</p>
                <p className="text-gray-300">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
