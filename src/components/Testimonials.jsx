import React from 'react'
import { Star } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Testimonials = () => {
  const [testimonialsRef, isTestimonialsVisible] = useScrollAnimation()
  
  const testimonials = [
    {
      name: "Sue",
      rating: 5,
      review: "I contacted Red Rose Builders in April to give me a quote on replacing a canopy. The quote was ideal and the job was done within a week. We were extremely happy with the job and so asked Paul if he could replace and fit a new kitchen sink, which was no small feat as the house is extremely old and the sink had not been touched in years. Once the sink was in, we were extremely happy again and so asked Paul if he could replace and fit 2 bathroom extractor fans, done within a few weeks of asking. I would highly recommend Red Rose Builders. We are so very happy with all the work they have done. Thank you!"
    },
    {
      name: "Peter",
      rating: 5,
      review: "Red Rose were brought in to build this shed and finish the fence off. Really good workmanship, on time as promised, finished the job, left the site clean and tidy, and was on budget with no hidden extras at the end of the works. Very impressed with management and the whole team - will use them again. A special thank you to all the team."
    },
    {
      name: "Alex",
      rating: 5,
      review: "I bought my first house just before Christmas and it turned out to be a real problem from day one. I called in Red Rose Builders to look, and we decided rather than patch it up, we had all the plasterwork replaced, new kitchen and bathroom, new heating and rewire. Red Rose Builders were able to do the whole job and myself and my wife are very pleased with the result. All of the workers were very professional and worked to a high standard. When we had our quote, we forgot to ask for smoke alarms and a kitchen extractor to be added when the wiring was done. James the electrician got that sorted out for us and we weren't even charged for that, which was a nice thing to do."
    },
    {
      name: "Martin",
      rating: 5,
      review: "The Red Rose team completely renovated my house from top to bottom to a high-quality finish. Thanks to Daniel for overseeing all of the different trades to ensure a high standard of work."
    },
    {
      name: "Sarah",
      rating: 5,
      review: "We used Red Rose to knock through a load-bearing wall between our lounge and dining room and put in an RSJ. Very pleased with the outcome - no unnecessary damage, very clean and tidy. Job was finished in a day. Paul was also a great source of friendly advice with other work we were planning."
    },
    {
      name: "David",
      rating: 5,
      review: "Paul, Daniel and their team were excellent throughout, from the first meeting right through to the aftercare we have received. They were on site every day when they said they would offer advice when needed. All work was completed to a high standard, on schedule as they transformed our garage into a modern office space."
    }
  ]

  return (
    <section ref={testimonialsRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-lg text-gray-600">
            Real reviews from satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-card transform hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-yellow-400 text-yellow-400 transform hover:scale-125 transition-transform duration-300" 
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 mb-6 leading-relaxed line-clamp-6">
                "{testimonial.review}"
              </p>

              {/* Customer Name */}
              <div className="text-center">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
