'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', section: 'home' },
    { name: 'Skills', section: 'skills' },
    { name: 'Projects', section: 'projects' },
    { name: 'Education', section: 'education' },
    { name: 'Contact', section: 'contact' },
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'h-16 bg-gray-900/80 backdrop-blur-md' : 'h-20 bg-transparent'}`}
    >
      <div className="container mx-auto px-6 h-full flex justify-start items-center">
        <div className="logo mr-auto">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer text-2xl font-bold text-white hover:text-blue-400 transition-colors">
            Mohit Sharma
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <motion.ul className="flex space-x-8" variants={listVariants} initial="hidden" animate="visible">
            {navLinks.map((link) => (
              <motion.li key={link.section} variants={itemVariants}>
                <Link to={link.section} smooth={true} duration={500} className="cursor-pointer text-white hover:text-blue-400 transition-colors relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-5px] after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0">
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center text-white hover:text-blue-300 focus:outline-none transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.7)]"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:hidden bg-gray-900/95"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <li key={link.section}>
                <Link to={link.section} smooth={true} duration={500} className="cursor-pointer text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;