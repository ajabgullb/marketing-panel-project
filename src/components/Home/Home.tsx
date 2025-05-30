import ContactSection from "./Contact"
import FeaturedSection from "./Featured"
import HeroSection from "./Hero"
import Testimonials from "./Testimonials"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <Testimonials />
      <ContactSection />
    </div>
  )
}

export default Home
