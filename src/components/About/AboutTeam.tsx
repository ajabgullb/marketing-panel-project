import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';

interface SocialLinks {
  twitter: string;
  linkedin: string;
  github: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: SocialLinks;
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const teamMembers = [
  {
    id: 1,
    name: 'Noman Chohan',
    role: 'Co-founder & Marketing Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=60',
    bio: '10+ years of experience in digital marketing and brand strategy. Passionate about data-driven campaigns.',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com/in/ajabgullbhatti',
      github: 'https://github.com/ajabgullb'
    }
  },
  {
    id: 2,
    name: 'Ajab Gull Bhatti',
    role: 'Co-founder & CEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=60',
    bio: 'Creative mind with expertise in visual storytelling and campaign design. Loves turning ideas into engaging content.',
    social: {
      twitter: 'https://x.com/ajabgullbhatti',
      linkedin: 'https://linkedin.com/in/ajabgullbhatti',
      github: 'https://github.com/ajabgullb'
    }
  }
];

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut'
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
      className="relative group h-full"
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at center, rgba(156, 39, 176, 0.1) 0%, transparent 70%)',
          filter: 'blur(20px)',
          zIndex: -1,
          borderRadius: '0.75rem',
          transform: 'translateY(10px) scale(1.02)'
        }}
      />
      
      <motion.div
        className="h-full flex flex-col items-center text-center bg-black/50 backdrop-blur-sm rounded-xl border border-opacity-10 border-white p-6 relative z-10"
        whileHover={{
          y: -8,
          borderColor: '#9c27b080',
          boxShadow: '0 10px 25px -5px rgba(156, 39, 176, 0.3), 0 8px 10px -6px rgba(156, 39, 176, 0.3)',
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }}
        transition={{ 
          duration: 0.2, 
          ease: 'easeOut',
          type: 'spring',
          stiffness: 300,
          damping: 15
        }}
      >
        <motion.div 
          className="w-32 h-32 rounded-full overflow-hidden mb-6 relative z-10"
          whileHover={{ 
            scale: 1.05,
            rotate: '2deg'
          }}
          transition={{ 
            type: 'spring',
            stiffness: 500,
            damping: 10
          }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-1">
            {member.name}
          </h3>
          <p className="text-purple-400 mb-4">
            {member.role}
          </p>
          <p className="text-gray-300 mb-6">
            {member.bio}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={member.social.twitter}
              className="text-gray-400 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href={member.social.linkedin}
              className="text-gray-400 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href={member.social.github}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AboutTeam = () => {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl font-bold mb-4 inline-block"
            style={{
              background: 'linear-gradient(90deg, #fff 0%, #888 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Meet Our Team
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3f51b5] to-[#9c27b0] rounded mx-auto mt-4" />
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
        >
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;
