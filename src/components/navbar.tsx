import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          AF.
        </a>
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className="text-gray-300 hover:text-blue-400 transition-all"
            >
              {item}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-white"
          onClick={handleToggle}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="bg-black bg-opacity-90 md:hidden"
        >
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-6 py-2 text-gray-300 hover:text-blue-400 transition-all"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
