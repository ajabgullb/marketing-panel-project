import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Text animation variants
  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Image animation variants
  const imageContainer = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 0.2,
      } 
    },
  };

  // Floating elements animation
  const floatingAnimation = (delay = 0) => ({
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    },
  });

  // Letter animation for the heading
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Split text for letter animation
  const headingText = "ELEVATE YOUR MARKETING WITH US";
  const headingLetters = headingText.split('');

  if (!isMounted) return null;

  return (
    <section className="relative w-full overflow-hidden bg-white text-black min-h-screen flex items-center">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Animated circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-black/10"
          style={{
            width: `${(i + 1) * 100}px`,
            height: `${(i + 1) * 100}px`,
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div 
            className="space-y-8 text-center md:text-left"
            variants={textContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={textItem}>
              <span className="inline-block px-4 py-1.5 border border-black/20 rounded-full text-sm font-medium tracking-wide">
                TRUSTED MARKETING PLATFORM
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-none mb-4">
                {headingLetters.map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    custom={index}
                    variants={letterAnimation}
                    initial="hidden"
                    animate="visible"
                  >
                    {letter === " " ? <span>&nbsp;</span> : letter}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <motion.p 
              className="text-lg text-black/80 max-w-lg mx-auto md:mx-0"
              variants={textItem}
            >
              Leverage our powerful platform to transform your digital presence with elegant, minimalist design and AI-powered marketing tools.
            </motion.p>
            
            <motion.div 
              className="flex justify-center md:justify-start pt-4"
              variants={textItem}
            >
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:bg-gray-800 no-underline"
              >
                Get Started
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.span>
              </Link>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center md:justify-start gap-3 pt-8"
              variants={textItem}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-black overflow-hidden"
                    style={{ zIndex: 5 - i }}
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-full h-full bg-gray-300" />
                  </motion.div>
                ))}
              </div>
              <div className="text-sm text-black/70">
                <p>Trusted by <span className="font-semibold text-black">500+</span> businesses</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Dashboard Mockup */}
          <motion.div 
            className="relative hidden md:block"
            variants={imageContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Main dashboard mockup */}
            <motion.div 
              className="relative z-10 bg-gradient-to-br from-gray-100 to-white p-1 rounded-2xl shadow-2xl border border-black/10 overflow-hidden"
              animate={floatingAnimation(0)}
            >
              {/* Dashboard content */}
              <div className="bg-white rounded-xl overflow-hidden p-4">
                {/* Header bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-4 w-24 bg-black/10 rounded-full"></div>
                </div>
                
                {/* Dashboard grid */}
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <motion.div 
                    className="col-span-2 h-40 bg-black/5 rounded-lg p-3"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="h-4 w-20 bg-black/20 rounded-full mb-2"></div>
                    <div className="flex items-end h-24 pt-2">
                      {[...Array(12)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="flex-1 bg-black/20 mx-0.5 rounded-t"
                          style={{ height: `${Math.random() * 100}%` }}
                          initial={{ height: 0 }}
                          animate={{ height: `${Math.random() * 100}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                        ></motion.div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div 
                    className="h-40 bg-black/5 rounded-lg p-3 flex flex-col justify-between"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="h-4 w-12 bg-black/20 rounded-full"></div>
                    <div className="w-16 h-16 rounded-full bg-black/10 mx-auto flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-black/20"></div>
                    </div>
                    <div className="h-3 w-full bg-black/10 rounded-full"></div>
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <motion.div 
                    className="h-32 bg-black/5 rounded-lg p-3"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="h-3 w-12 bg-black/20 rounded-full mb-2"></div>
                    <div className="h-20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-black/10 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-black/20"></div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="h-32 bg-black/5 rounded-lg p-3"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="h-3 w-16 bg-black/20 rounded-full mb-2"></div>
                    <div className="space-y-2 pt-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-3 bg-black/10 rounded-full"></div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div 
                    className="h-32 bg-black/5 rounded-lg p-3"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="h-3 w-14 bg-black/20 rounded-full mb-2"></div>
                    <div className="h-20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-black/20"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-10 -left-10 w-40 h-40 bg-black/5 rounded-full mix-blend-overlay filter blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div 
              className="absolute -bottom-12 -right-12 w-56 h-56 bg-black/5 rounded-full mix-blend-overlay filter blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
            />
            
            {/* Floating small elements */}
            <motion.div 
              className="absolute top-20 -right-6 w-12 h-12 bg-black rounded-lg shadow-lg"
              animate={floatingAnimation(1.5)}
              style={{ rotate: '10deg' }}
            />
            <motion.div 
              className="absolute bottom-20 -left-6 w-8 h-8 bg-black rounded-full shadow-lg"
              animate={floatingAnimation(2)}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Animated particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-black"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs text-black/50 mb-2">Scroll to explore</span>
        <motion.div 
          className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-black rounded-full"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
