import { useParams } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Avatar, 
  Chip,
  Divider,
  styled
} from '@mui/material';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import blogPosts from '../lib/blogsData';

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 4,
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
          <Typography variant="h3" component="h1" gutterBottom>
            {post.title}
          </Typography>
          <Box display="flex" alignItems="center" mt={2} mb={4}>
            <Avatar 
              alt={post.author} 
              src={`https://ui-avatars.com/api/?name=${post.author.replace(/\s+/g, '+')}`} 
              sx={{ width: 40, height: 40, mr: 2 }}
            />
            <Box>
              <Typography variant="subtitle2" component="p" fontWeight={500}>
                {post.author}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {formattedDate} • {Math.ceil((post.content?.length || post.description.length) / 1000)} min read
              </Typography>
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

            <Box sx={{ 
              p: 4, 
              borderRadius: 2, 
              bgcolor: 'rgba(0, 204, 255, 0.05)',
              border: '1px solid rgba(0, 204, 255, 0.1)'
            }}>
              <Typography variant="h6" sx={{ mb: 2, color: '#00ccff' }}>About the Author</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Avatar 
                  src={`https://ui-avatars.com/api/?name=${post.author.replace(' ', '+')}`} 
                  alt={post.author}
                  sx={{ width: 80, height: 80 }}
                />
                <Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>{post.author}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {post.author} is a marketing expert with over 5 years of experience in digital strategy and content creation. They specialize in helping brands grow their online presence through innovative marketing techniques.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </ContentSection>
      </Container>
    </Box>
  );
};

export default BlogPost;
