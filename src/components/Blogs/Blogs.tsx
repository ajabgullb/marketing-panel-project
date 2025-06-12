import BlogCard from "./BlogCard"
import { Box, Container, Typography, useTheme } from "@mui/material"
import { motion } from 'framer-motion';
import blogPosts from "@/lib/blogsData"

const Blogs = () => {
  const theme = useTheme()

  return (
    <Box sx={{ 
      pt: 6,
      pb: 12,
      backgroundColor: 'black',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
        zIndex: 0,
      },
      '& > *': {
        position: 'relative',
        zIndex: 1,
      }
    }}>
      <Container maxWidth="xl">
        <Box 
          sx={{ 
            textAlign: 'center',
            mb: 8,
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 4,
              background: theme.palette.primary.main,
              borderRadius: 2
            }
          }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 800,
              background: 'linear-gradient(90deg, #fff 0%, #aaa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              letterSpacing: '-0.5px',
            }}
          >
            Latest Blog Posts
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.6
            }}
          >
            Discover the latest insights, trends, and strategies in digital marketing
          </Typography>
        </Box>
        
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <BlogCard
                key={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                author={post.author}
                date={post.date}
                slug={post.slug}
              />
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Blogs
