import { motion } from 'framer-motion';
import { LightBulbIcon, ChartBarIcon, UserGroupIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { FC, ReactNode, ElementType } from 'react';
import { useNavigate } from 'react-router-dom';

// Type definitions
interface SectionProps {
  children: ReactNode;
  className?: string;
}

interface GridContainerProps {
  children: ReactNode;
  className?: string;
}

interface CardProps {
  title: string;
  description: string;
  icon: ElementType;
  iconColor: string;
  delay: number;
}

// Custom styled components
const Section: FC<SectionProps> = ({ children, className = '' }) => (
  <section className={`py-12 bg-black text-white relative overflow-hidden ${className}`}>
    {children}
  </section>
);

const GridContainer: FC<GridContainerProps> = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {children}
    </div>
  </div>
);

const Card: FC<CardProps> = ({ title, description, icon: Icon, iconColor, delay }) => (
  <motion.div
    className="h-full flex flex-col items-center text-center bg-black/50 backdrop-blur-sm rounded-xl border border-opacity-10 border-white p-10 transition-all duration-300 hover:border-opacity-30 hover:shadow-lg hover:shadow-purple-500/20 hover:bg-black/70"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <div className={`flex items-center justify-center p-4 mb-8 rounded-full ${iconColor} transition-transform duration-300 group-hover:scale-110`}>
      <Icon className="w-10 h-10" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
    <p className="text-gray-300 text-lg leading-relaxed mb-6">{description}</p>
  </motion.div>
);

const AboutCompany: FC = () => {
  const navigate = useNavigate();

  return (
    <Section>
      {/* Animated background elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center w-full">
              <h1 
                className="text-4xl md:text-5xl font-bold mb-4 inline-block relative z-10"
                style={{
                  background: 'linear-gradient(90deg, #fff 0%, #888 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                About Our Company
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#3f51b5] to-[#9c27b0] rounded mx-auto mt-4" />
            </div>
          </motion.div>
          
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-center text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed relative z-10">
              Empowering businesses with innovative marketing solutions since 2023. Our mission is to help brands connect with their audience through data-driven strategies and creative excellence.
            </p>
          </motion.div>

          {/* Cards Grid - First Row */}
          <GridContainer>
            <Card
              title="Our Mission"
              description="To deliver exceptional marketing solutions that drive growth and create meaningful connections between brands and their audiences."
              icon={LightBulbIcon}
              iconColor="text-[#3f51b5] bg-[rgba(63,81,181,0.1)]"
              delay={0.3}
            />
            
            <Card
              title="Our Vision"
              description="To be the most trusted partner for businesses seeking innovative and effective marketing strategies in the digital age."
              icon={ChartBarIcon}
              iconColor="text-[#4caf50] bg-[rgba(76,175,80,0.1)]"
              delay={0.4}
            />
          </GridContainer>

          {/* Cards Grid - Second Row */}
          <GridContainer className="mt-12">
            <Card
              title="Our Team"
              description="A dedicated group of marketing experts, designers, and developers working together to deliver outstanding results for our clients."
              icon={UserGroupIcon}
              iconColor="text-[#ff9800] bg-[rgba(255,152,0,0.1)]"
              delay={0.5}
            />
            
            <Card
              title="Our Values"
              description="Integrity, innovation, and excellence are at the core of everything we do, ensuring we deliver the best possible results for our clients."
              icon={ShieldCheckIcon}
              iconColor="text-[#9c27b0] bg-[rgba(156,39,176,0.1)]"
              delay={0.6}
            />
          </GridContainer>
            
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-[#3f51b5] to-[#9c27b0] p-8 rounded-2xl text-white relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to grow your business?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto" z-10>
                Let's discuss how our marketing solutions can help you achieve your business goals and reach new heights.
              </p>
              <button
                className="bg-white text-[#3f51b5] py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 cursor-pointer relative z-10"
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Button clicked, navigating to /signup');
                  navigate('/signup');
                }}
              >
                Get Started Today
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutCompany;
