import React from 'react'
import { Phone, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="burgundy-bg text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Red Rose Builders</h3>
            <p className="mb-6 opacity-90">
              Wolverhampton's trusted construction specialists 
              with over 25 years of experience in quality home 
              improvements.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                <span>07737 675 941</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3" />
                <span>redrosebuilders@hotmail.co.uk</span>
              </div>
            </div>
            <p className="mt-4 text-sm opacity-75">
              Open 24 hours — every day
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-90 hover:opacity-100 transition-opacity">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#work" className="opacity-90 hover:opacity-100 transition-opacity">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Get Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">OUR SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home Improvements
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Kitchen Fitting
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Bathroom Fitting
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Extensions
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Loft Conversions
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Garage Conversions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-75">
            © {currentYear} Red Rose Builders. All rights reserved. 
            Serving Wolverhampton and surrounding areas for over 25 years.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer