import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import AuthComponents from './AuthComponents';

const navLinks = [
  { name: 'Home', path: '/home' },
  { name: 'About', path: '/about' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.header 
      className="w-full bg-gray-900 shadow-sm sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo - Always on the left */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation - Center on desktop */}
          <div className="hidden md:flex-1 md:flex md:justify-center">
            <nav className="flex">
              <motion.ul 
                className="flex space-x-4 lg:space-x-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={item}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-medium transition-colors ${
                        isActive 
                          ? 'text-white font-semibold border-b-2 border-white' 
                          : 'text-gray-400 hover:text-white'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
              </motion.ul>
            </nav>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center">
            <AuthComponents className="space-x-2" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute left-0 right-0 bg-gray-900 shadow-lg z-40"
            style={{ top: '4rem' }}
          >
            <motion.div 
              className="px-2 pt-2 pb-4 space-y-1 sm:px-3"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {navLinks.map((link) => (
                <motion.div key={`mobile-${link.name}`} variants={item}>
                  <NavLink
                    to={link.path}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block px-3 py-3 rounded-md text-base font-medium ${
                        isActive 
                          ? 'bg-gray-900 text-white' 
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <div className="pt-2 pb-2 border-t border-gray-800">
                <div className="mt-2 space-y-2 px-2">
                  <AuthComponents className="flex flex-col space-y-2" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
