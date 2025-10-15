import { FaLinkedin, FaGithub, FaTelegram, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Mohit Sharma</h3>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.linkedin.com/in/mohit-sharma-8a113630b/" target="_blank" className="hover:text-pink-500 transition-colors"><FaLinkedin size={28} /></a>
          <a href="https://github.com/sharmamohit-devops" target="_blank" className="hover:text-pink-500 transition-colors"><FaGithub size={28} /></a>
          <a href="https://t.me/@mohit_javascript" target="_blank" className="hover:text-pink-500 transition-colors"><FaTelegram size={28} /></a>
          <a href="https://www.instagram.com/mohitsharma_dev7/" target="_blank" className="hover:text-pink-500 transition-colors"><FaInstagram size={28} /></a>
          <a href="mailto:mohitfrontendev@gmail.com" className="hover:text-pink-500 transition-colors"><FaEnvelope size={28} /></a>
        </div>
        <p className="mb-4 text-lg">Let's build something amazing together!</p>
        <p className="text-gray-500">© {new Date().getFullYear()} Mohit Sharma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
