import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  age: z.number().min(18, { message: 'You must be at least 18 years old' }).max(100, { message: 'Age must be less than 100' }),
  gender: z.string().min(1, { message: 'Please select a gender' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  password: z.string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/[A-Z]/, { message: 'Must contain at least one uppercase letter' })
    .regex(/[0-9]/, { message: 'Must contain at least one number' }),
});

type FormData = z.infer<typeof formSchema>;

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      age: undefined,
      gender: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      reset();
      setSubmitSuccess(false);
    }, 2000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  if (submitSuccess) {
    return (
      <motion.div
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <motion.div
          className="text-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-green-500"
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
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Success!</h2>
          <p className="text-gray-600">Your form has been submitted successfully.</p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-2xl font-bold text-center text-gray-800 mb-6"
        variants={itemVariants}
      >
        Create Account
      </motion.h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <motion.div variants={itemVariants}>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </motion.div>

        {/* Age Field */}
        <motion.div variants={itemVariants}>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
            Age
          </label>
          <input
            id="age"
            type="number"
            {...register('age', { valueAsNumber: true })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              errors.age ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="25"
          />
          {errors.age && (
            <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
          )}
        </motion.div>

        {/* Gender Field */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <div className="grid grid-cols-3 gap-3">
            {['Male', 'Female', 'Other'].map((gender) => (
              <div key={gender} className="flex items-center">
                <input
                  id={gender.toLowerCase()}
                  type="radio"
                  value={gender.toLowerCase()}
                  {...register('gender')}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={gender.toLowerCase()} className="ml-2 block text-sm text-gray-700">
                  {gender}
                </label>
              </div>
            ))}
          </div>
          {errors.gender && (
            <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
          )}
        </motion.div>

        {/* Email Field */}
        <motion.div variants={itemVariants}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </motion.div>

        {/* Password Field */}
        <motion.div variants={itemVariants}>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              className={`w-full px-4 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </motion.div>
        
        {/* Login Link */}
        <motion.div variants={itemVariants} className="text-center pt-2">
          <p className="text-sm text-gray-600">
            Create an account{' '}
            <Link
              to="/signup" 
              className="font-medium text-black hover:text-gray-700 hover:underline"
            >
              Signup
            </Link>
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-2">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all cursor-pointer ${
              isSubmitting ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'
              }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Create Account'
            )}
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default LoginForm;
