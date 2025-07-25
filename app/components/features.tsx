
'use client'

import { CheckCircle, Award, Users, Clock, Shield, Star } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Over a decade of professional painting experience with hundreds of satisfied customers."
  },
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "We stand behind our work with a satisfaction guarantee and use only premium materials."
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Skilled, insured, and reliable painters who treat your property with respect and care."
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "We respect your schedule and complete projects on time, every time."
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete insurance coverage for your peace of mind and property protection."
  },
  {
    icon: Star,
    title: "5-Star Reviews",
    description: "Consistently rated 5 stars by our customers for quality work and excellent service."
  }
]

export default function Features() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose CG Painting?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just painters - we're craftsmen dedicated to transforming your space 
            with quality, reliability, and exceptional service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                About CG Painting - The Travelling Painter
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With over 10 years of experience in the painting industry, CG Painting has built 
                  a reputation for excellence throughout the region. We specialize in both residential 
                  and commercial painting projects, bringing quality craftsmanship to every job.
                </p>
                <p>
                  Our "travelling painter" approach means we come to you, providing convenient, 
                  professional service wherever you need it. From small touch-ups to complete 
                  property transformations, we handle projects of all sizes with the same attention 
                  to detail and commitment to quality.
                </p>
                <p>
                  We use only premium paints and materials, employ proper preparation techniques, 
                  and maintain the highest standards of workmanship. Your satisfaction is our 
                  priority, and we're not finished until you're completely happy with the results.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Our Promise to You</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Free, detailed quotes with no hidden costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Clean, professional work environment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Respect for your property and schedule</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">100% satisfaction guarantee</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <a 
                  href="tel:0413847063"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block"
                >
                  Get Your Free Quote Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
