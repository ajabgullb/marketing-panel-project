import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with our powerful analytics tools. Track performance and make data-driven decisions.',
    icon: '📊',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Smart Automation',
    description: 'Automate repetitive tasks and workflows to save time and increase productivity.',
    icon: '⚙️',
    color: 'bg-purple-500'
  },
  {
    id: 3,
    title: 'Seamless Integration',
    description: 'Connect with your favorite tools and platforms for a unified marketing experience.',
    icon: '🔄',
    color: 'bg-green-500'
  },
  {
    id: 4,
    title: 'Real-time Collaboration',
    description: 'Work together with your team in real-time, no matter where they are located.',
    icon: '👥',
    color: 'bg-yellow-500'
  }
];

const FeatureCard: React.FC<{ feature: FeatureItem; isSelected: boolean; onClick: () => void }> = ({ 
  feature, 
  isSelected, 
  onClick 
}) => {

  return (
    <motion.div
      onClick={onClick}
      className={`relative cursor-pointer rounded-xl p-6 shadow-lg transition-all backdrop-blur-sm bg-white/5 border border-white/10 ${isSelected ? 'col-span-1' : 'col-span-1'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className={`absolute -z-10 inset-0 rounded-xl opacity-20 ${feature.color}`} />
      <div className="flex items-start gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl ${feature.color}`}>
          {feature.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
          <p className="text-gray-300">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  if (!isMounted) return null;

  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Animated circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/10"
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
      
      {/* Animated particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gray-400"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Powerful Features
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Discover the tools that will transform your marketing strategy
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, staggerChildren: 0.1 }}
      >
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            isSelected={selectedFeature === feature.id}
            onClick={() => setSelectedFeature(selectedFeature === feature.id ? null : feature.id)}
          />
        ))}
      </motion.div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/services')}
        >
          Explore All Features
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          >
            →
          </motion.span>
        </motion.button>
      </motion.div>
      
      {/* Decorative floating elements */}
      <motion.div 
        className="absolute top-32 right-[25%] w-12 h-12 bg-gray-700 rounded-lg shadow-lg hidden md:block"
        animate={floatingAnimation(1.5)}
        style={{ rotate: '10deg' }}
      />
      <motion.div 
        className="absolute bottom-20 left-[30%] w-8 h-8 bg-gray-700 rounded-full shadow-lg hidden md:block"
        animate={floatingAnimation(2)}
      />
      </div>
    </section>
  );
};

export default FeaturedSection;
