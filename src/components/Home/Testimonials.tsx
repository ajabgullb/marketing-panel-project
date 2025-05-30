import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

interface TestimonialType {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  testimonial: string;
}

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'TechCorp',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    rating: 5,
    testimonial: 'This marketing platform has completely transformed how we approach our digital campaigns. The analytics tools are intuitive and the automation features have saved us countless hours.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CEO',
    company: 'Innovate Solutions',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    rating: 5,
    testimonial: 'As a small business owner, I needed a marketing solution that was both powerful and easy to use. This platform delivered beyond my expectations and has helped us grow our customer base by 40%.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Digital Strategist',
    company: 'Creative Minds',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    rating: 4,
    testimonial: 'The integration capabilities with our existing tools made the transition seamless. Our team was able to get up and running in just a few days, and we saw results almost immediately.'
  },
  {
    id: 4,
    name: 'David Wilson',
    position: 'Growth Lead',
    company: 'Startup Ventures',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    rating: 5,
    testimonial: "The ROI we've seen from implementing this platform has been incredible. The data-driven insights have allowed us to make smarter decisions and allocate our budget more effectively."
  },
  {
    id: 5,
    name: 'Olivia Thompson',
    position: 'Brand Manager',
    company: 'Global Retail',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    rating: 5,
    testimonial: "The customer support team is exceptional. Whenever we've had questions or needed assistance, they've been responsive and incredibly helpful. It's rare to find this level of service."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate()

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setAutoplay(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    }),
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
      />
    ));
  };

  if (!isMounted) return null;

  const direction = 1;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-indigo-900 to-purple-900 text-white py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px] opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
      
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
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-xl text-indigo-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hear from businesses that have transformed their marketing with our platform
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div 
            ref={carouselRef}
            className="overflow-hidden relative min-h-[400px] sm:min-h-[350px]"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full"
              >
                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 max-w-4xl mx-auto transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Avatar on the left */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-lg relative z-10">
                        <img 
                          src={testimonials[currentIndex].avatar} 
                          alt={testimonials[currentIndex].name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Decorative ring around avatar */}
                      <div className="absolute -inset-2 rounded-full border border-indigo-300/30 animate-pulse z-0"></div>
                      {/* Badge */}
                      <motion.div 
                        className="absolute -bottom-2 -right-2 bg-indigo-600 rounded-full p-1 shadow-lg z-20"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </motion.div>
                    </div>
                    
                    {/* Content to the right of avatar */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Quote with decorative elements */}
                      <div className="relative">
                        <div className="absolute -top-6 -left-2 text-4xl text-indigo-400 opacity-50">❝</div>
                        <p className="text-lg italic mb-4 text-indigo-100 relative z-10">{testimonials[currentIndex].testimonial}</p>
                        <div className="absolute -bottom-6 -right-2 text-4xl text-indigo-400 opacity-50">❞</div>
                      </div>
                      
                      {/* Divider */}
                      <div className="h-px w-16 bg-indigo-400/30 my-4 mx-auto md:mx-0"></div>
                      
                      {/* Name, position and stars */}
                      <div className="mt-4">
                        <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                        <p className="text-indigo-200 text-sm">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
                        <div className="flex justify-center md:justify-start mt-2">
                          {renderStars(testimonials[currentIndex].rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons - positioned much further from the card */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2" style={{ left: '-100px', right: '-100px', width: 'calc(100% + 200px)' }}>
            <motion.button
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full border border-white/20 cursor-pointer shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeftIcon className="h-7 w-7" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full border border-white/20 cursor-pointer shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRightIcon className="h-7 w-7" />
            </motion.button>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/30'}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">Join hundreds of satisfied customers who have transformed their marketing strategy with our platform.</p>
          <motion.button
            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(129, 140, 248, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/services")}
          >
            Browse Our Services
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-10 left-10 w-20 h-20 rounded-full border-2 border-indigo-300/30 hidden lg:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute top-20 right-20 w-16 h-16 rounded-full border-2 border-purple-300/30 hidden lg:block"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
};

export default Testimonials;
