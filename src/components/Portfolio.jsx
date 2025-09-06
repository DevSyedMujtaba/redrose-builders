import React from 'react'
import { Calendar, MapPin, Heart } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import work9 from '../assets/images/work-9.jpeg'
import work10 from '../assets/images/work-10.jpeg'
import work11 from '../assets/images/work-11.jpeg'
import work12 from '../assets/images/work-12.jpeg'
import work13 from '../assets/images/work-13.jpeg'
import work14 from '../assets/images/work-14.jpeg'
import work15 from '../assets/images/work-15.jpeg'
import work16 from '../assets/images/work-16.jpeg'
import work17 from '../assets/images/work-17.jpeg'
import work18 from '../assets/images/work-18.jpeg'
import work19 from '../assets/images/work-19.jpeg'
import work20 from '../assets/images/work-20.jpeg'
import work21 from '../assets/images/work-21.jpeg'
import work22 from '../assets/images/work-22.jpeg'
import work23 from '../assets/images/work-23.jpeg'

const Portfolio = () => {
  const [portfolioRef, isPortfolioVisible] = useScrollAnimation()
  const [whyChooseRef, isWhyChooseVisible] = useScrollAnimation()
  
  const portfolioItems = [
    {
      image: work9,
      title: "Roof Construction",
      category: "Roofing"
    },
    {
      image: work10,
      title: "Roof Construction",
      category: "Roofing"
    },
    {
      image: work11,
      title: "Roof Construction",
      category: "Roofing"
    },
    {
      image: work12,
      title: "Roof Construction",
      category: "Roofing"
    },
    {
      image: work13,
      title: "Roof Construction",
      category: "Roofing"
    },
    {
      image: work14,
      title: "Roof Construction",
      category: "Roofing"
    },
    {
      image: work15,
      title: "Roof Construction",
      category: "Roofing"
    },
    {
      image: work16,
      title: "Roof Construction",
      category: "Roofing"
    },
    {
      image: work17,
      title: "Roof Construction",
      category: "Roofing"
    },
    {
      image: work18,
      title: "Roof Construction",
      category: "Roofing"
    },
    {
      image: work19,
      title: "Roof Construction",
      category: "Roofing"
    },
    {
      image: work20,
      title: "Roof Construction",
      category: "Roofing"
    },
    {
      image: work21,
      title: "Roof Construction",
      category: "Roofing"
    },
    {
      image: work22,
      title: "Roof Construction",
      category: "Roofing"
    },
    {
      image: work23,
      title: "Roof Construction",
      category: "Roofing"
    },
    
    
    {
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Modern House Extension",
      category: "Extension"
    },
    {
      image: "https://www.sasautomation.co.uk/wp-content/uploads/2024/06/Aluminium-Sliding-Gate.jpg",
      title: "Custom Gate Installation",
      category: "Outdoor Work"
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2158&q=80",
      title: "Interior Renovation",
      category: "Home Improvement"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "External Building Work",
      category: "Construction"
    },
    {
      image: "https://redrosebuilders.netlify.app/1.jpg",
      title: "External Building Work",
      category: "Construction"
    },
    {
      image: "https://redrosebuilders.netlify.app/2.jpg",
      title: "External Building Work",
      category: "Construction"
    },
    {
      image: "https://redrosebuilders.netlify.app/3.jpg",
      title: "Flooring work",
      category: "Construction"
    },
    {
      image: "https://redrosebuilders.netlify.app/4.jpg",
      title: "External Building Work",
      category: "Construction"
    }

  ]

  return (
    <>
      {/* Portfolio Section */}
      <section ref={portfolioRef} id="work" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isPortfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              OUR WORK
            </h2>
            <p className="text-lg text-gray-600">
              Recent work showcasing our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div 
                key={index} 
                className={`group cursor-pointer transition-all duration-700 transform ${
                  isPortfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-image w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-center">
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className="burgundy-bg py-20 text-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isWhyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              WHY CHOOSE RED ROSE BUILDERS
            </h2>
            <p className="text-lg opacity-90">
              Three pillars of excellence that set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Calendar className="w-10 h-10 text-white" />,
                title: "25+ Years Experience",
                description: "Over two and a half decades of trusted construction expertise in Wolverhampton"
              },
              {
                icon: <MapPin className="w-10 h-10 text-white" />,
                title: "Local Specialists",
                description: "Deep knowledge of Wolverhampton building regulations and local requirements"
              },
              {
                icon: <Heart className="w-10 h-10 text-white" />,
                title: "Customer Focused",
                description: "Dedicated to delivering exceptional results that exceed your expectations"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 transform hover:scale-105 ${
                  isWhyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 transform hover:scale-110 hover:rotate-12 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio