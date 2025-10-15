'use client';

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Weather Application',
    description: 'A responsive weather application that provides real-time weather forecasts for any location worldwide. Features include current weather conditions, 5-day forecast, temperature units toggle, and location search.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'API Integration'],
    live: 'https://mohit-weather.netlify.app/',
    source: 'https://github.com/sharmamohit-devops/weather-app',
  },
  {
    title: 'StudyTogether',
    description: 'A collaborative virtual study platform where users can join secure study rooms, watch synchronized videos from YouTube or Google Drive, chat in real-time, and share files. Features include user authentication, end-to-end encrypted rooms, and real-time collaboration tools.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'WebRTC'],
    live: 'https://togetherstudy.vercel.app/',
    source: 'https://github.com/sharmamohit-devops/studytogether',
  },
  {
    title: 'Todo List Application',
    description: 'A feature-rich todo list application with task management capabilities including add, edit, delete, mark as complete, and filter tasks. Local storage integration ensures tasks persist between sessions.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
    live: 'https://mohit-todolist.netlify.app/',
    source: 'https://github.com/sharmamohit-devops/todo-list',
  },
  {
    title: 'Blogging Platform',
    description: 'A full-stack blogging platform where users can create, read, update, and delete blog posts. Features include user authentication, rich text editing, comments, and responsive design.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'EJS'],
    live: 'https://mohitblog.vercel.app/',
    source: 'https://github.com/sharmamohit-devops/Blog-App',
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl w-full md:w-3/4 mx-auto"
              style={{ height: 'auto' }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-8">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.live} target="_blank" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-semibold hover:scale-105 transition-transform">
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                  <a href={project.source} target="_blank" className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-full font-semibold hover:bg-blue-500 transition-colors">
                    <FaGithub className="mr-2" /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
