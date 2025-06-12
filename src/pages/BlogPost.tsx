import { useParams } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Avatar, 
  Chip,
  Divider,
  Button,
  IconButton,
  styled,
} from '@mui/material';
import { Twitter, LinkedIn, Instagram, Email } from '@mui/icons-material';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import blogPosts from '../lib/blogsData';

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 4,
  marginBottom: 40,
});

const ContentSection = styled(Box)({
  maxWidth: 800,
  margin: '0 auto',
  padding: 4,
});

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find the blog post with the matching slug
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'black' }}>
        <Typography variant="h4" color="text.primary">
          Blog post not found
        </Typography>
      </Box>
    );
  }

  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');

  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      pt: { xs: 4, md: 8 },
      pb: 8,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container maxWidth="lg">
        <Box mb={6}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 3,
              background: 'linear-gradient(90deg, #fff 0%, #aaa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {post.title}
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 2,
              p: 3,
              mb: 4,
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(0, 204, 255, 0.2)'
              }
            }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar 
                alt={post.author} 
                src={`https://ui-avatars.com/api/?name=${post.author.replace(/\s+/g, '+')}&background=0D8ABC&color=fff`} 
                sx={{ 
                  width: 54, 
                  height: 54,
                  border: '2px solid #00ccff',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />
              <Box>
                <Typography 
                  variant="subtitle1" 
                  component="p" 
                  fontWeight={600}
                  sx={{ 
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 0.5
                  }}
                >
                  {post.author}
                  <Box 
                    component="span" 
                    sx={{ 
                      width: 4, 
                      height: 4, 
                      borderRadius: '50%', 
                      backgroundColor: '#00ccff',
                      display: 'inline-block'
                    }} 
                  />
                  <Typography 
                    component="span" 
                    variant="caption" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontWeight: 400
                    }}
                  >
                    Author
                  </Typography>
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <span>{formattedDate}</span>
                  <Box 
                    component="span" 
                    sx={{ 
                      width: 3, 
                      height: 3, 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      display: 'inline-block'
                    }} 
                  />
                  <span>{Math.ceil((post.content?.length || post.description.length) / 1000)} min read</span>
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                size="small" 
                sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  '&:hover': { 
                    color: '#1DA1F2',
                    backgroundColor: 'rgba(29, 161, 242, 0.1)'
                  } 
                }}
              >
                <Twitter fontSize="small" />
              </IconButton>
              <Button 
                variant="outlined" 
                size="small"
                sx={{
                  color: '#00ccff',
                  borderColor: 'rgba(0, 204, 255, 0.3)',
                  '&:hover': {
                    borderColor: '#00ccff',
                    backgroundColor: 'rgba(0, 204, 255, 0.1)'
                  },
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 2,
                }}
              >
                Follow
              </Button>
            </Box>
          </Box>
        </Box>

        {post.image && (
          <StyledImage 
            src={post.image} 
            alt={post.title} 
            loading="lazy"
          />
        )}

        <ContentSection>
          {post.content ? (
            <ReactMarkdown>
              {post.content}
            </ReactMarkdown>
          ) : (
            <>
              <Typography variant="body1" paragraph>
                {post.description}
              </Typography>
              <ul>
                <li>Leverage data analytics to understand customer behavior</li>
                <li>Create personalized experiences across all touchpoints</li>
                <li>Focus on building genuine relationships with your audience</li>
                <li>Embrace new technologies and platforms</li>
                <li>Measure and optimize your campaigns continuously</li>
              </ul>
            </>
          )}

          <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 6 }}>
              {['Marketing', 'Strategy', 'Digital', 'Trends', '2025'].map((tag) => (
                <Chip 
                  key={tag}
                  label={`#${tag}`} 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }} 
                />
              ))}
            </Box>

            <Box 
              sx={{ 
                p: 4, 
                borderRadius: 2, 
                bgcolor: 'rgba(0, 204, 255, 0.03)',
                border: '1px solid rgba(0, 204, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(0, 204, 255, 0.1)',
                  borderColor: 'rgba(0, 204, 255, 0.3)'
                }
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2, 
                  color: '#00ccff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                About the Author
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                <Box sx={{ position: 'relative' }}>
                  <Avatar 
                    src={`https://ui-avatars.com/api/?name=${post.author.replace(' ', '+')}&background=0D8ABC&color=fff`} 
                    alt={post.author}
                    sx={{ 
                      width: 100, 
                      height: 100,
                      border: '2px solid #00ccff',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
                      {post.author}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#1DA1F2' } }}>
                        <Twitter fontSize="small" />
                      </IconButton>
                      <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#0077B5' } }}>
                        <LinkedIn fontSize="small" />
                      </IconButton>
                      <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#E1306C' } }}>
                        <Instagram fontSize="small" />
                      </IconButton>
                      <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#00ccff' } }}>
                        <Email fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2, lineHeight: 1.6 }}>
                    {post.author} is a marketing expert with over 5 years of experience in digital strategy and content creation. They specialize in helping brands grow their online presence through innovative marketing techniques.
                  </Typography>
                  <Button 
                    variant="outlined" 
                    size="small"
                    sx={{
                      color: '#00ccff',
                      borderColor: 'rgba(0, 204, 255, 0.3)',
                      '&:hover': {
                        borderColor: '#00ccff',
                        backgroundColor: 'rgba(0, 204, 255, 0.1)'
                      },
                      textTransform: 'none',
                      borderRadius: 2,
                      px: 2,
                      py: 0.5
                    }}
                  >
                    Follow {post.author.split(' ')[0]}
                  </Button>
                </Box>
              </Box>
            </Box>
          </ContentSection>
      </Container>
    </Box>
  );
};

export default BlogPost;
