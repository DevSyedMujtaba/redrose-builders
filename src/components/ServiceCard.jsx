import React from 'react'

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="service-card group transform hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
        <div className="w-8 h-8 text-red-600 group-hover:text-white transition-all duration-500 group-hover:scale-110">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
      
      <a 
        href={link} 
        className="text-red-600 font-medium hover:text-red-700 transition-all duration-300 inline-flex items-center group-hover:translate-x-2"
      >
        Learn more
        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  )
}

export default ServiceCard


