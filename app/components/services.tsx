
'use client'

import { Paintbrush, Home, Building, Palette, Shield, Clock } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: "Residential Painting",
    description: "Interior and exterior painting for homes, apartments, and condos with premium quality finishes.",
    features: ["Interior walls & ceilings", "Exterior siding & trim", "Kitchen & bathroom painting", "Color consultation"]
  },
  {
    icon: Building,
    title: "Commercial Painting",
    description: "Professional painting services for offices, retail spaces, and commercial buildings.",
    features: ["Office spaces", "Retail stores", "Warehouses", "Scheduled maintenance"]
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Expert advice on color schemes and finishes to transform your space perfectly.",
    features: ["Color matching", "Trend analysis", "Lighting considerations", "Sample testing"]
  },
  {
    icon: Paintbrush,
    title: "Specialty Finishes",
    description: "Decorative painting techniques including textures, faux finishes, and custom work.",
    features: ["Textured walls", "Faux finishes", "Accent walls", "Custom designs"]
  },
  {
    icon: Shield,
    title: "Surface Preparation",
    description: "Thorough preparation including cleaning, sanding, priming, and repair work.",
    features: ["Wall repairs", "Surface cleaning", "Primer application", "Crack filling"]
  },
  {
    icon: Clock,
    title: "Maintenance Services",
    description: "Regular maintenance and touch-up services to keep your property looking fresh.",
    features: ["Touch-up painting", "Regular inspections", "Preventive maintenance", "Emergency repairs"]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Painting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential homes to commercial buildings, we provide comprehensive painting solutions 
            with attention to detail and quality craftsmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote for your painting project. We'll assess your needs 
              and provide a detailed estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0413847063"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Call for Quote: 0413 847 063
              </a>
              <a 
                href="#contact"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Request Online Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
