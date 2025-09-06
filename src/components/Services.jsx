import React from 'react'
import ServiceCard from './ServiceCard'
import { Home, ChefHat, Bath, Plus, Square, TrendingUp, Building, Hammer } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Services = () => {
  const [problemRef, isProblemVisible] = useScrollAnimation()
  const [servicesRef, isServicesVisible] = useScrollAnimation()
  
  const services = [
    {
      icon: <Home className="w-full h-full" />,
      title: "HOME IMPROVEMENTS",
      description: "Complete home upgrades and modern finishes tailored to your needs.",
      link: "#"
    },
    {
      icon: <ChefHat className="w-full h-full" />,
      title: "KITCHEN FITTING",
      description: "Bespoke kitchen installations, units and worktops fitted to precision.",
      link: "#"
    },
    {
      icon: <Bath className="w-full h-full" />,
      title: "BATHROOM FITTING",
      description: "Full bathroom installs from tiling to sanitary ware and waterproofing.",
      link: "#"
    },
    {
      icon: <Plus className="w-full h-full" />,
      title: "EXTENSIONS",
      description: "Seamless single- or double-storey extensions with full planning support.",
      link: "#"
    },
    {
      icon: <Square className="w-full h-full" />,
      title: "WINDOWS",
      description: "Supply and fit energy-efficient windows, frames and trickle-vent upgrades.",
      link: "#"
    },
    {
      icon: <TrendingUp className="w-full h-full" />,
      title: "LOFT CONVERSIONS",
      description: "Maximise space with loft conversions, dormers and structural works.",
      link: "#"
    },
    {
      icon: <Building className="w-full h-full" />,
      title: "GARAGE CONVERSIONS",
      description: "Transform garages into living space, offices or studios.",
      link: "#"
    },
    {
      icon: <Hammer className="w-full h-full" />,
      title: "BRICKLAYING",
      description: "Quality brickwork, walls and rebuilds with lasting structural integrity.",
      link: "#"
    }
  ]

  return (
    <>
      {/* Problem Statement Section */}
      <section ref={problemRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className={`lg:w-1/2 transition-all duration-1000 transform ${
              isProblemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <img
                // 
                src='https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'
                alt="Modern Kitchen Interior"
                className="rounded-lg shadow-lg w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className={`lg:w-1/2 transition-all duration-1000 transform ${
              isProblemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`} style={{ transitionDelay: '200ms' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                TIRED OF UNRELIABLE BUILDERS OR POOR FINISHES?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand the frustration of dealing with unprofessional 
                contractors. That's why Wolverhampton homeowners trust Red 
                Rose Builders for quality work, on time, every time.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Fully insured & certified professionals",
                  "Guaranteed timelines with no delays", 
                  "Local Wolverhampton team with 25+ years experience"
                ].map((text, index) => (
                  <div key={index} className={`flex items-center transition-all duration-700 transform ${
                    isProblemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 transform hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{text}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary transform hover:scale-105 hover:shadow-xl transition-all duration-300">
                Get a Callback Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              OUR SERVICES
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction services for Wolverhampton homes, from small 
              repairs to complete transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transition-all duration-700 transform ${
                  isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
