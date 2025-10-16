'use client';

import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaTelegram, FaInstagram, FaEnvelope, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <main id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden pt-20 md:pt-0">
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full"></div>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center md:text-left mb-12 md:mb-0 md:pl-20"
        >
          <h2 className="text-3xl font-light mb-2">Hello, I&apos;m</h2>
          <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Mohit Sharma</h1>
          <div className="text-2xl font-semibold text-teal-300 h-10">
            <Typewriter
              words={['Frontend Developer', 'UI Enthusiast']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <div className="flex justify-center md:justify-start space-x-4 my-8">
            <motion.a
              href="https://www.linkedin.com/in/mohit-sharma-8a113630b/"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5, boxShadow: '0 0 25px rgba(56, 189, 248, 0.7)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-transparent bg-clip-border flex items-center justify-center text-white hover:text-blue-300"
            >
              <FaLinkedin size={26} />
            </motion.a>
            <motion.a
              href="https://github.com/sharmamohit-devops"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5, boxShadow: '0 0 25px rgba(56, 189, 248, 0.7)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-transparent bg-clip-border flex items-center justify-center text-white hover:text-blue-300"
            >
              <FaGithub size={26} />
            </motion.a>
            <motion.a
              href="https://t.me/@mohit_javascript"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5, boxShadow: '0 0 25px rgba(56, 189, 248, 0.7)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-transparent bg-clip-border flex items-center justify-center text-white hover:text-blue-300"
            >
              <FaTelegram size={26} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/mohit.defencecoder/"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5, boxShadow: '0 0 25px rgba(56, 189, 248, 0.7)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-transparent bg-clip-border flex items-center justify-center text-white hover:text-blue-300"
            >
              <FaInstagram size={26} />
            </motion.a>
            <motion.a
              href="mailto:mohitfrontendev@gmail.com"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5, boxShadow: '0 0 25px rgba(56, 189, 248, 0.7)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-transparent bg-clip-border flex items-center justify-center text-white hover:text-blue-300"
            >
              <FaEnvelope size={26} />
            </motion.a>
          </div>
          <a href="/mohit1.pdf" download className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full font-semibold hover:scale-105 transition-transform">
            <FaDownload className="mr-2" /> Download Resume
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-80 h-80 md:w-96 md:h-96 group [perspective:1000px]"
        >
          <div className="relative w-full h-full rounded-full shadow-2xl transition-transform duration-1000 [transform-style:preserve-3d]">
            <div className="absolute w-full h-full rounded-full overflow-hidden [backface-visibility:hidden]">
              <Image src="/portfolio.png.jpeg" alt="Mohit Sharma" layout="fill" objectFit="cover" />
            </div>
            <div className="absolute w-full h-full rounded-full overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <Image src="/portfolio.png.jpeg" alt="Mohit Sharma" layout="fill" objectFit="cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;