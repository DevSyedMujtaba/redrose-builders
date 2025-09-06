import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Phone, Mail, MessageSquare, MapPin, Clock, Shield } from 'lucide-react'

const Contact = () => {
  const location = useLocation()
  const phoneNumber = "07737675941"
  const email = "redrosebuilders@hotmail.co.uk"
  const whatsappNumber = "447737675941" // UK format without + for WhatsApp

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, '_self')
  }

  const handleEmail = () => {
    window.open(`mailto:${email}?subject=Quote Request - Red Rose Builders&body=Hi, I would like to request a quote for my project. Please contact me at your earliest convenience.`, '_self')
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in getting a quote for my project. Could you please contact me?")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  useEffect(() => {
    console.log("📍 Current location:", location);
    if (location.hash === "#contact") {
      console.log("✅ Found #contact hash, scrolling...");
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.warn("⚠️ #contact element not found in DOM");
      }
    }
  }, [location]);


  return (
    <>
      {/* CTA Section */}
      <section className="bg-red-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a fast, free quote with no obligation. Our team is ready to bring your vision to life.
          </p>
          <button
            onClick={handleEmail}
            className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-lg"
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to discuss your project? Contact us today for a
                free, no-obligation quote.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <p className="text-sm text-gray-500">Phone:</p>
                    <p className="text-lg font-medium text-gray-900">07737675941</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <p className="text-sm text-gray-500">Email:</p>
                    <p className="text-lg font-medium text-gray-900">redrosebuilders@hotmail.co.uk</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <p className="text-sm text-gray-500">Service area:</p>
                    <p className="text-lg font-medium text-gray-900">Wolverhampton + 30-mile radius</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <p className="text-sm text-gray-500">Opening hours:</p>
                    <p className="text-lg font-medium text-red-600">Open 24 hours — every day</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <p className="text-sm text-gray-500">Trust a Trader:</p>
                    <a href="#" className="text-lg font-medium text-red-600 hover:text-red-700">
                      View our profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleCall}
                className="w-full bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center cursor-pointer transform hover:scale-105 hover:shadow-lg"
              >
                <Phone className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="font-bold">Call Now</div>
                  <div className="text-sm opacity-75">07737675941</div>
                </div>
              </button>

              <button
                onClick={handleEmail}
                className="w-full bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center cursor-pointer transform hover:scale-105 hover:shadow-lg"
              >
                <Mail className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="font-bold">Email Us</div>
                  <div className="text-sm opacity-75">Get in touch</div>
                </div>
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center cursor-pointer transform hover:scale-105 hover:shadow-lg"
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="font-bold">WhatsApp Us</div>
                  <div className="text-sm opacity-90">Chat now</div>
                </div>
              </button>

              <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center text-red-600 mb-2">
                  <Shield className="w-5 h-5 mr-2" />
                  <span className="font-medium">Up to 1-year guarantee on completed work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact