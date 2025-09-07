import React, { useState, useEffect, useRef } from 'react'
import { Star } from 'lucide-react'

const TypewriterText = ({ text, delay = 100, className = "" }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text[currentIndex])
          setCurrentIndex(prev => prev + 1)
        } else {
          // Finished typing, wait a bit then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1))
        } else {
          // Finished deleting, reset and start typing again
          setIsDeleting(false)
          setCurrentIndex(0)
        }
      }
    }, isDeleting ? delay / 2 : delay) // Delete faster than typing

    return () => clearTimeout(timeout)
  }, [currentIndex, text, delay, isDeleting, displayText])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = "07737675941"

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, '_self')
  }

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Stars Rating */}
          <div className={`flex justify-center mb-6 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-6 h-6 fill-yellow-400 text-yellow-400 transition-all duration-500 transform hover:scale-125 hover:rotate-12 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                />
              ))}
            </div> */}
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            RED ROSE BUILDERS
          </h1>
          
          {/* Subheading */}
          <h2 className={`text-xl md:text-2xl font-medium mb-4 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '400ms' }}>
            WOLVERHAMPTON'S TRUSTED CONSTRUCTION SPECIALISTS
          </h2>

          {/* Service Area */}
          <div className={`mb-8 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '600ms' }}>
            <p className="text-lg md:text-xl">
              <TypewriterText 
                text="Wolverhampton & surrounding 10-mile radius Transformations." 
                delay={80}
                className="text-red-500 font-semibold"
              />
            </p>
            <p className="text-lg md:text-xl mt-2">
              {/* <TypewriterText 
                text="Transformations" 
                delay={100}
                className="text-red-500 font-semibold"
              /> */}
            </p>
          </div>

          {/* Description */}
          <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '800ms' }}>
            Over 25 years of exceptional craftsmanship in home improvements, 
            extensions, kitchen & bathroom fitting and complete home 
            transformations across Wolverhampton
          </p>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1000ms' }}>
            <button 
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-4 transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Request a Free Quote
            </button>
            <button 
              onClick={handleCall}
              className="btn-secondary text-lg px-8 py-4 transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


