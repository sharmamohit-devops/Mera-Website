'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', icon: '/html.png' },
  { name: 'CSS3', icon: '/css.png.png' },
  { name: 'JavaScript', icon: '/icons8-js-48.png' },
  { name: 'React', icon: '/icons8-react-100.png' },
  { name: 'Node.js', icon: '/icons8-node-js-48.png' },
  { name: 'MongoDB', icon: '/icons8-mongodb-48.png' },
  { name: 'Mongoose', icon: '/icons8-mongoose-48.png' },
  { name: 'Bootstrap', icon: '/icons8-bootstrap-48.png' },
  { name: 'Tailwind CSS', icon: '/icons8-tailwind-css-100.png' },
  { name: 'MATLAB', icon: '/file.svg' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#38bdf8] w-64 h-64 mx-auto"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="relative w-20 h-20 mb-4">
                <Image src={skill.icon} alt={skill.name} layout="fill" objectFit="contain" />
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
