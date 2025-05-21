import { motion } from 'framer-motion';
import { ArrowRightIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import dashboardImage from '../../assets/dashboard-preview.jpg';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  if (!isMounted) return null;

  return (
    <div className="max-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden" style={{ userSelect: 'text', WebkitUserSelect: 'text' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-40 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div 
            className="space-y-6 text-center md:text-left"
            variants={container}
            initial="hidden"
            animate="show"
            style={{ userSelect: 'text', WebkitUserSelect: 'text', pointerEvents: 'auto' }}
          >
            <motion.div variants={item} className="inline-block">
              <span className="px-4 py-1.5 rounded-full bg-gray-200 text-gray-800 text-sm font-medium">
                Next Generation Platform
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={item}
              style={{ userSelect: 'text', WebkitUserSelect: 'text', pointerEvents: 'auto' }}
            >
              Transform Your
              <span className="text-gray-800"> Digital </span>
              Marketing
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0"
              variants={item}
              style={{ userSelect: 'text', WebkitUserSelect: 'text', pointerEvents: 'auto' }}
            >
              Leverage AI-powered tools to grow your business, engage customers, and increase your online presence like never before.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
              variants={item}
            >
              <a 
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 no-underline"
                style={{ textDecoration: 'none', pointerEvents: 'auto' }}
                onClick={(e) => { e.preventDefault(); window.location.href = '/services'; }}
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-3 rounded-lg font-medium transition-all duration-300 no-underline"
                style={{ textDecoration: 'none', pointerEvents: 'auto' }}
                onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                <ChartBarIcon className="w-5 h-5 text-gray-900" />
                View Features
              </a>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center md:justify-start gap-2 pt-8"
              variants={item}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                    style={{ zIndex: 5 - i }}
                  >
                    <div className="w-full h-full bg-gray-300" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <p>Trusted by <span className="font-semibold text-gray-800">100+</span> businesses</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Illustration */}
          <motion.div 
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          >
            <div className="relative z-10">
              <motion.div 
                className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md mx-auto"
                animate={floatingAnimation}
              >
                <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={dashboardImage} 
                  alt="Analytics Dashboard Preview" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback in case image fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
                  }}
                />
              </div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-32 h-32 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div 
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gray-200"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 60 - 30, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
