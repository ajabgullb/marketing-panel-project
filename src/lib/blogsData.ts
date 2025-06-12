// Define the BlogPost interface
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  slug: string;
  category?: string;
  content?: string;
}

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Tips for Effective Digital Marketing in 2025",
    description: "Discover the latest trends and strategies to boost your digital marketing efforts in the coming year.",
    image: "https://source.unsplash.com/random/800x400?marketing,digital",
    author: "Sarah Johnson",
    date: "June 10, 2025",
    slug: "digital-marketing-tips-2025",
    category: "Digital Marketing",
    content: `In today's fast-paced digital landscape, staying ahead of the curve is more important than ever. Here are 10 essential tips to enhance your digital marketing strategy in 2025:\n\n1. **Leverage AI-Powered Personalization**: Use AI to analyze customer behavior and deliver personalized experiences at scale.\n2. **Optimize for Voice Search**: With the rise of smart speakers, ensure your content is optimized for voice search queries.\n3. **Focus on Video Content**: Video continues to dominate, with short-form videos leading the way in engagement.\n4. **Implement Zero-Party Data Collection**: Build trust by being transparent about data collection and respecting user privacy.\n5. **Enhance Customer Experience**: Create seamless omnichannel experiences that delight customers at every touchpoint.\n6. **Invest in Interactive Content**: Quizzes, polls, and interactive tools can significantly boost engagement.\n7. **Prioritize Mobile-First Design**: Ensure your website and content are optimized for mobile users.\n8. **Leverage Micro-Moments**: Be present when customers are making quick decisions with bite-sized, relevant content.\n9. **Focus on Community Building**: Create spaces for your audience to connect and engage with your brand.\n10. **Measure What Matters**: Focus on meaningful metrics that align with your business goals.`
  },
  {
    id: 2,
    title: "The Future of Social Media: What to Expect",
    description: "Exploring upcoming social media trends and how they will impact your marketing strategy.",
    image: "https://source.unsplash.com/random/800x400?social,media",
    author: "Michael Chen",
    date: "June 5, 2025",
    slug: "future-of-social-media",
    category: "Social Media",
    content: `The social media landscape is evolving rapidly, and 2025 promises to bring exciting changes. Here's what to expect:\n\n## The Rise of Niche Platforms\n\nWhile major platforms will continue to dominate, we'll see a surge in niche social networks catering to specific interests and communities. These platforms will offer more targeted advertising opportunities and higher engagement rates.\n\n## Augmented Reality Takes Center Stage\n\nAR features will become more sophisticated, allowing brands to create immersive experiences directly within social apps. From virtual try-ons to interactive product demonstrations, AR will transform how consumers interact with brands.\n\n## The Growth of Social Commerce\n\nSocial platforms will continue to expand their e-commerce capabilities, making it easier than ever for users to discover and purchase products without leaving the app.`
  },
  {
    id: 3,
    title: "Content Marketing: Creating Engaging Stories",
    description: "Learn how to craft compelling content that resonates with your audience and drives engagement.",
    image: "https://source.unsplash.com/random/800x400?content,writing",
    author: "Emma Davis",
    date: "May 28, 2025",
    slug: "content-marketing-stories",
    category: "Content Marketing",
    content: `Great content marketing is all about telling stories that resonate with your audience. Here's how to create content that captivates and converts:\n\n## Understand Your Audience\n\nBefore you start creating content, take the time to understand your audience's pain points, interests, and preferences. Use tools like audience surveys, social listening, and analytics to gather insights.\n\n## Craft Compelling Headlines\n\nYour headline is the first thing people see, so make it count. Use power words, numbers, and questions to pique curiosity.\n\n## Focus on Value\n\nEvery piece of content should provide value to your audience. Whether it's educational, entertaining, or inspiring, make sure it meets a need or solves a problem.`
  },
  {
    id: 4,
    title: "SEO Best Practices for 2025",
    description: "Stay ahead of the curve with these essential SEO strategies for the current year.",
    image: "https://source.unsplash.com/random/800x400?seo,search",
    author: "David Kim",
    date: "May 20, 2025",
    slug: "seo-best-practices-2025",
    category: "SEO",
    content: `SEO continues to evolve, and staying on top of the latest trends is crucial for online visibility. Here are the key SEO best practices for 2025:\n\n## Core Web Vitals\n\nGoogle's Core Web Vitals remain a critical ranking factor. Focus on improving loading performance, interactivity, and visual stability.\n\n## E-A-T and Content Quality\n\nExpertise, Authoritativeness, and Trustworthiness are more important than ever. Create comprehensive, well-researched content that demonstrates your expertise.\n\n## Mobile-First Indexing\n\nWith mobile-first indexing now the default, ensure your site is fully optimized for mobile devices.`
  },
  {
    id: 5,
    title: "Email Marketing: Beyond the Inbox",
    description: "Innovative ways to make your email campaigns stand out in a crowded inbox.",
    image: "https://source.unsplash.com/random/800x400?email,marketing",
    author: "Lisa Wong",
    date: "May 15, 2025",
    slug: "email-marketing-beyond-inbox",
    category: "Email Marketing",
    content: `Email marketing remains one of the most effective digital marketing channels, but standing out in a crowded inbox requires creativity. Here are some innovative approaches:\n\n## Interactive Emails\n\nIncorporate interactive elements like polls, quizzes, and image carousels to boost engagement.\n\n## AI-Powered Personalization\n\nUse AI to deliver hyper-personalized content based on user behavior and preferences.\n\n## Mobile Optimization\n\nWith the majority of emails now opened on mobile devices, ensure your emails are mobile-responsive and load quickly.`
  },
  {
    id: 6,
    title: "The Power of Video Marketing",
    description: "How video content can transform your marketing strategy and engage your audience.",
    image: "https://source.unsplash.com/random/800x400?video,marketing",
    author: "James Wilson",
    date: "May 10, 2025",
    slug: "power-of-video-marketing"
  },
  {
    id: 7,
    title: "10 Tips for Effective Digital Marketing in 2025",
    description: "Discover the latest trends and strategies to boost your digital marketing efforts in the coming year.",
    image: "https://source.unsplash.com/random/800x400?marketing,digital",
    author: "Sarah Johnson",
    date: "June 10, 2025",
    slug: "digital-marketing-tips-2025"
  },
  {
    id: 8,
    title: "The Future of Social Media: What to Expect",
    description: "Exploring upcoming social media trends and how they will impact your marketing strategy.",
    image: "https://source.unsplash.com/random/800x400?social,media",
    author: "Michael Chen",
    date: "June 5, 2025",
    slug: "future-of-social-media"
  },
  {
    id: 9,
    title: "Content Marketing: Creating Engaging Stories",
    description: "Learn how to craft compelling content that resonates with your audience and drives engagement.",
    image: "https://source.unsplash.com/random/800x400?content,writing",
    author: "Emma Davis",
    date: "May 28, 2025",
    slug: "content-marketing-stories"
  },
]

export default blogPosts