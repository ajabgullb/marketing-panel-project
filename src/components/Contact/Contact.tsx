import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Have questions? We're here to help. Send us a message and we'll get back to you as soon as possible.
        </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="px-6 py-8 sm:p-10"
            >
              {submitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                >
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-green-800">Message Sent!</h3>
                  <p className="mt-2 text-sm text-green-600">
                    Thank you for contacting us. We'll get back to you soon!
                  </p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <motion.div variants={item} className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your message here..."
                      />
                    </div>

                    <div className="mt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-gray-900 to-black px-4 sm:px-6 py-10 sm:py-12 text-white"
            >
              <div className="max-w-lg mx-auto lg:mx-0 space-y-6 sm:space-y-8">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                
                <div className="space-y-6">
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-gray-100 rounded-lg p-2 sm:p-3 mt-1">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h4 className="font-medium text-base sm:text-lg">Our Location</h4>
                      <p className="mt-1 text-sm sm:text-base text-gray-300 leading-relaxed">123 Marketing St, Suite 100<br />San Francisco, CA 94107</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-gray-100 rounded-lg p-2 sm:p-3 mt-1">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h4 className="font-medium text-base sm:text-lg">Email Us</h4>
                      <p className="mt-1 text-sm sm:text-base text-gray-300 leading-relaxed">info@marketingpanel.com<br />support@marketingpanel.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-gray-100 rounded-lg p-2 sm:p-3 mt-1">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h4 className="font-medium text-base sm:text-lg">Call Us</h4>
                      <p className="mt-1 text-sm sm:text-base text-gray-300 leading-relaxed">+1 (555) 123-4567<br />Mon - Fri, 9am - 5pm PST</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="pt-6 mt-6 border-t border-gray-800"
                >
                  <h4 className="font-medium text-lg mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[
                      { name: 'Facebook', icon: 'Fb' },
                      { name: 'Twitter', icon: 'Tw' },
                      { name: 'Instagram', icon: 'Ig' },
                      { name: 'LinkedIn', icon: 'Li' },
                    ].map((social) => (
                      <motion.a
                        key={social.name}
                        href="#"
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
