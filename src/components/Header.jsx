import React, { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const goToContact = () => {
    console.log("👉 Button clicked. Navigating to /contact#contact");
    navigate("/contact#contact");
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled ? "burgundy-bg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              </div>
            </div>
            <span
              className={`font-bold text-xl transition-colors duration-500 ${
                isScrolled
                  ? "text-white"
                  : "text-white drop-shadow-lg"
              }`}
            >
              Red Rose Builders
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className={`font-medium transition-colors duration-500 ${
                isScrolled
                  ? "text-white hover:text-red-300"
                  : "text-white hover:text-red-300 drop-shadow-lg"
              }`}
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`font-medium transition-colors duration-500 flex items-center ${
                  isScrolled
                    ? "text-white hover:text-red-300"
                    : "text-white hover:text-red-300 drop-shadow-lg"
                }`}
              >
                Services
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <ul className="py-2">
                  {[
                    "Home Improvements",
                    "Kitchen Fitting",
                    "Bathroom Fitting",
                    "Extensions",
                    "Windows",
                    "Loft Conversions",
                    "Garage Conversions",
                    "Bricklaying",
                    "Plastering",
                    "And More..."
                  ].map((service, i) => (
                    <li key={i}>
                      <a
                        href="#services"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="#work"
              className={`font-medium transition-colors duration-500 ${
                isScrolled
                  ? "text-white hover:text-red-300"
                  : "text-white hover:text-red-300 drop-shadow-lg"
              }`}
            >
              Our Work
            </a>
            <a
              href="#about"
              className={`font-medium transition-colors duration-500 ${
                isScrolled
                  ? "text-white hover:text-red-300"
                  : "text-white hover:text-red-300 drop-shadow-lg"
              }`}
            >
              About Us
            </a>
            <a
              href="#contact"
              className={`font-medium transition-colors duration-500 ${
                isScrolled
                  ? "text-white hover:text-red-300"
                  : "text-white hover:text-red-300 drop-shadow-lg"
              }`}
            >
              Contact
            </a>
            <div
              className={`flex items-center transition-colors duration-500 ${
                isScrolled ? "text-white" : "text-white drop-shadow-lg"
              }`}
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">07737675941</span>
            </div>
            <button
              className={`transition-all duration-500 ${
                isScrolled
                  ? "bg-white text-red-600 hover:bg-red-50 font-medium py-3 px-6 rounded-lg"
                  : "bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg"
              }`}
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`transition-colors duration-500 ${
                isScrolled ? "text-white" : "text-white drop-shadow-lg"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden mt-4 pb-4 transition-colors duration-500 ${
              isScrolled
                ? "border-t border-white/20"
                : "border-t border-white/30"
            }`}
          >
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#home"
                className={`font-medium transition-colors duration-500 ${
                  isScrolled
                    ? "text-white hover:text-red-300"
                    : "text-white hover:text-red-300"
                }`}
              >
                Home
              </a>
              <a
                href="#services"
                className={`font-medium transition-colors duration-500 ${
                  isScrolled
                    ? "text-white hover:text-red-300"
                    : "text-white hover:text-red-300"
                }`}
              >
                Services
              </a>
              <a
                href="#work"
                className={`font-medium transition-colors duration-500 ${
                  isScrolled
                    ? "text-white hover:text-red-300"
                    : "text-white hover:text-red-300"
                }`}
              >
                Our Work
              </a>
              <a
                href="#about"
                className={`font-medium transition-colors duration-500 ${
                  isScrolled
                    ? "text-white hover:text-red-300"
                    : "text-white hover:text-red-300"
                }`}
              >
                About Us
              </a>
              <a
                href="#contact"
                className={`font-medium transition-colors duration-500 ${
                  isScrolled
                    ? "text-white hover:text-red-300"
                    : "text-white hover:text-red-300"
                }`}
              >
                Contact
              </a>
              <div
                className={`flex items-center transition-colors duration-500 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">07737675941</span>
              </div>
              <button
                onClick={goToContact}
                className={`transition-all duration-500 ${
                  isScrolled
                    ? "bg-white text-red-600 hover:bg-red-50 font-medium py-3 px-6 rounded-lg"
                    : "bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg"
                }`}
              >
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
