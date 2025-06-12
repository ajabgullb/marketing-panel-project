import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography, Box, Chip, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { formatDistanceToNow } from 'date-fns';
import { ArrowForward } from '@mui/icons-material';

declare module '@mui/material/CardMedia' {
  interface CardMediaPropsMedia {
    component?: React.ElementType;
  }
}

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  slug: string;
  category?: string;
}

const StyledCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  zIndex: 1,
  '&:hover': {
    transform: 'translateY(-8px)',
    backgroundColor: '#1a1a1a',
    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
    '& .MuiCardMedia-root:after': {
      opacity: 0.8,
    },
  },
  borderRadius: '16px',
  overflow: 'hidden',
  backgroundColor: '#0f0f0f',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
}));

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  description, 
  image, 
  author, 
  date, 
  slug, 
  category = 'Marketing' 
}) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    },
    hover: { 
      y: -8,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };

  const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true });

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      style={{ width: '100%', height: '100%' }}
    >
      <Link to={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
        <StyledCard elevation={2}>
          <Box sx={{ position: 'relative' }}>
            <Box
              component="div"
              sx={{
                position: 'relative',
                paddingTop: '56.25%',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.8) 100%)',
                  opacity: 0.5,
                  transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                },
                '&:hover::after': {
                  opacity: 0.8,
                },
              }}
            >
              <Chip 
                label={category} 
                size="small"
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  zIndex: 1,
                  backgroundColor: 'primary.main',
                  color: '#fff',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  fontSize: '0.65rem',
                  letterSpacing: '1px',
                  padding: '4px 10px',
                  height: 'auto',
                  borderRadius: '4px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
                  '& .MuiChip-label': {
                    padding: 0,
                  },
                }}
              />
            </Box>
          </Box>
          <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography 
                variant="h6" 
                component="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  lineHeight: 1.3,
                  mb: 1.5,
                  color: 'white',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical' as const,
                  overflow: 'hidden',
                  minHeight: '3.6rem',
                  '&:hover': {
                    color: '#00ccff',
                  },
                  transition: 'color 0.2s ease'
                }}
              >
                {title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{
                  mb: 2.5,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical' as const,
                  overflow: 'hidden',
                  minHeight: '4.5rem',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}
              >
                {description}
              </Typography>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              pt: 2,
              mt: 'auto'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar 
                  src={`https://ui-avatars.com/api/?name=${author.replace(/\s+/g, '+')}`} 
                  alt={author}
                  sx={{ width: 32, height: 32 }}
                />
                <Typography variant="caption" color="text.secondary">
                  {author}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="caption" color="text.secondary">
                  {formattedDate}
                </Typography>
                <ArrowForward sx={{ fontSize: '1rem', color: 'rgba(0, 204, 255, 0.7)' }} />
              </Box>
            </Box>
          </CardContent>
        </StyledCard>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
