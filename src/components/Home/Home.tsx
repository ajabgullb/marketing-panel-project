import HeroSection from "./HeroSection"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Analytics",
                description: "Get detailed insights into your marketing performance"
              },
              {
                title: "AI-Powered Recommendations",
                description: "Leverage machine learning for better campaign results"
              },
              {
                title: "Automated Workflows",
                description: "Save time with smart automation tools"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
