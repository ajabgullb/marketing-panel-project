import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Define the form schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
})

// Type for the form data
type ContactFormData = z.infer<typeof contactFormSchema>

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  // Initialize react-hook-form with zod validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  // Handle form submission
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Show success message
      setIsSubmitted(true)
      reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      {/* Animated particles */}
      {[...Array(10)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions or want to learn more? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 lg:gap-32 items-stretch">
          {/* Left Column - Contact Form */}
          <div className="h-full flex flex-col" style={{ minHeight: '400px', maxHeight: '550px' }}>
            {isSubmitted ? (
              <motion.div 
                className="bg-gray-900 border border-green-600 rounded-lg p-6 text-center flex flex-col justify-center h-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <svg 
                  className="w-12 h-12 text-green-500 mx-auto mb-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300">Your message has been sent successfully. We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gray-900 border border-gray-800 shadow-md rounded-lg p-6 flex flex-col flex-grow h-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-2 bg-gray-800 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors text-white ${errors.name ? 'border-red-500' : 'border-gray-700'}`}
                  placeholder="Your name"
                  {...register('name')}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </motion.div>

              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 bg-gray-800 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors text-white ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
                  placeholder="your.email@example.com"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </motion.div>

              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-2 bg-gray-800 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors text-white ${errors.message ? 'border-red-500' : 'border-gray-700'}`}
                  placeholder="Your message"
                  {...register('message')}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </motion.span>
                      </>
                    )}
                  </button>
                </motion.div>
              </motion.div>
            </motion.form>
            )}
          </div>
          
          {/* Right Column - Interactive 3D Globe */}
          <motion.div
            className="relative h-full mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ minHeight: '400px', maxHeight: '550px' }}
          >
            {/* 3D Globe Visualization */}
            <div className="relative h-full bg-gray-900 border border-gray-800 shadow-md rounded-lg p-6 flex flex-col">
              {/* Heading for globe section */}
              <motion.div 
                className="text-center mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Global Marketing Network</h3>
                <p className="text-gray-400 text-sm mt-1">Connecting businesses worldwide</p>
              </motion.div>
              
              <div className="flex-grow flex items-center justify-center relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-white"
                      style={{
                        width: Math.random() * 2 + 1,
                        height: Math.random() * 2 + 1,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* 3D Globe */}
              <motion.div 
                className="absolute top-1/2 left-1/2 w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 -translate-x-1/2 -translate-y-1/2"
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {/* Globe circles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-0 left-0 w-full h-full rounded-full border border-blue-500/30"
                    style={{
                      transform: `rotateX(${i * 20}deg) rotateY(${i * 15}deg)`,
                    }}
                  />
                ))}
                
                {/* Globe sphere */}
                <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-md border border-blue-500/50">
                  {/* Equator line */}
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blue-400/30 transform -translate-y-1/2" />
                  
                  {/* Meridian lines */}
                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-blue-400/30 transform -translate-x-1/2" />
                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-blue-400/20 transform -translate-x-1/2 rotate-45" />
                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-blue-400/20 transform -translate-x-1/2 -rotate-45" />
                  
                  {/* Connection points with lines */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i / 12) * Math.PI * 2;
                    const x = Math.cos(angle) * 40;
                    const y = Math.sin(angle) * 40;
                    return (
                      <React.Fragment key={i}>
                        <motion.div
                          className="absolute w-2 h-2 bg-blue-400 rounded-full z-10"
                          style={{
                            top: `calc(50% + ${y}px)`,
                            left: `calc(50% + ${x}px)`,
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7],
                            boxShadow: ['0 0 0px rgba(59, 130, 246, 0.5)', '0 0 10px rgba(59, 130, 246, 0.8)', '0 0 0px rgba(59, 130, 246, 0.5)'],
                          }}
                          transition={{
                            duration: 2 + i % 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        
                        {/* Random connection lines between points */}
                        {Math.random() > 0.6 && (
                          <motion.div
                            className="absolute h-[1px] bg-blue-400/30 origin-left"
                            style={{
                              top: `calc(50% + ${y}px)`,
                              left: `calc(50% + ${x}px)`,
                              width: `${Math.random() * 30 + 20}px`,
                              transform: `rotate(${Math.random() * 360}deg)`,
                            }}
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
                          />
                        )}
                      </React.Fragment>
                    );
                  })}
                  
                  {/* Glowing center */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-[8px] -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                      scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Data flow particles */}
                  {[...Array(8)].map((_, i) => {
                    const startAngle = Math.random() * Math.PI * 2;
                    const endAngle = startAngle + (Math.random() * Math.PI - Math.PI/2);
                    const startX = Math.cos(startAngle) * 40;
                    const startY = Math.sin(startAngle) * 40;
                    const endX = Math.cos(endAngle) * 40;
                    const endY = Math.sin(endAngle) * 40;
                    
                    return (
                      <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full z-20"
                        initial={{
                          top: `calc(50% + ${startY}px)`,
                          left: `calc(50% + ${startX}px)`,
                          opacity: 0,
                        }}
                        animate={{
                          top: [`calc(50% + ${startY}px)`, `calc(50% + ${endY}px)`],
                          left: [`calc(50% + ${startX}px)`, `calc(50% + ${endX}px)`],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 1.5,
                          ease: "easeInOut",
                        }}
                      />
                    );
                  })}
                </div>
                
                {/* Orbiting elements - Satellites */}
                {[...Array(5)].map((_, i) => {
                  const speed = 8 + i * 3;
                  const distance = 50 + i * 12; // Smaller base distance for mobile
                  const orbitAngle = i * 25; // Different orbit angles
                  const colors = [
                    'from-blue-400 to-cyan-300',
                    'from-purple-400 to-pink-300',
                    'from-green-400 to-emerald-300',
                    'from-amber-400 to-yellow-300',
                    'from-red-400 to-rose-300'
                  ];
                  
                  return (
                    <motion.div
                      key={`satellite-${i}`}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '100%',
                        height: '100%',
                        transformOrigin: 'center',
                        rotate: `${orbitAngle}deg`,
                      }}
                    >
                      {/* Orbit path */}
                      <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20"
                        style={{
                          width: distance * 2,
                          height: distance * 2,
                        }}
                      />
                      
                      {/* Satellite */}
                      <motion.div
                        className={`absolute top-1/2 left-0 -translate-y-1/2 w-6 h-6 flex items-center justify-center z-10`}
                        animate={{
                          rotateZ: [0, 360],
                        }}
                        transition={{
                          duration: speed,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <div className="relative">
                          {/* Main satellite body */}
                          <motion.div 
                            className={`w-4 h-4 rounded-full bg-gradient-to-r ${colors[i % colors.length]} shadow-lg`}
                            animate={{
                              boxShadow: ['0 0 5px rgba(59, 130, 246, 0.5)', '0 0 15px rgba(59, 130, 246, 0.8)', '0 0 5px rgba(59, 130, 246, 0.5)'],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          
                          {/* Satellite trail */}
                          <motion.div
                            className="absolute top-1/2 right-full h-[1px] -translate-y-1/2 origin-right"
                            style={{
                              background: `linear-gradient(to left, ${colors[i % colors.length].replace('from-', '').replace(' to-', ', ')}, transparent)`,
                              width: '30px',
                            }}
                            animate={{
                              opacity: [0.2, 0.8, 0.2],
                              width: ['15px', '30px', '15px'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })
                }
                
                {/* Floating elements */}
                {[...Array(8)].map((_, i) => {
                  const size = Math.random() * 3 + 2;
                  const x = (Math.random() - 0.5) * 100;
                  const y = (Math.random() - 0.5) * 100;
                  const colors = ['bg-blue-400', 'bg-purple-400', 'bg-cyan-400', 'bg-indigo-400'];
                  
                  return (
                    <motion.div
                      key={`float-${i}`}
                      className={`absolute rounded-full ${colors[i % colors.length]}`}
                      style={{
                        width: size,
                        height: size,
                        top: `calc(50% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                        opacity: 0.7,
                      }}
                      animate={{
                        y: [y, y + (Math.random() * 20 - 10), y],
                        x: [x, x + (Math.random() * 20 - 10), x],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })
                }
              </motion.div>
              
              {/* Pulse rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 rounded-full border border-blue-400/30"
                    initial={{ width: 0, height: 0, x: '-50%', y: '-50%', opacity: 0.8 }}
                    animate={{ 
                      width: [0, 300], 
                      height: [0, 300], 
                      opacity: [0.5, 0],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 1.3,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
              </div>
              
              {/* Location markers with labels */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  { city: 'Lahore', continent: 'Punjab', color: 'text-blue-400' },
                  { city: 'Islamabad', continent: 'Capital', color: 'text-purple-400' },
                  { city: 'Karachi', continent: 'Sindh', color: 'text-cyan-400' },
                  { city: 'Quetta', continent: 'Peshawar', color: 'text-amber-500' }
                ].map((location, index) => (
                  <motion.div 
                    key={location.city}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  >
                    {location.city === 'Quetta' ? (
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    ) : (
                      <div className={`w-2 h-2 rounded-full ${location.color.replace('text-', 'bg-')}`} />
                    )}
                    <div className="flex items-center">
                      <p className={`text-xs font-medium ${location.color}`}>{location.city}</p>
                      <p className="text-xs text-gray-500 ml-1">{location.continent}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
