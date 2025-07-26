'use client'

import { Paintbrush, Home, Building, Palette, Shield, Clock } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const services = [
  {
    icon: Home,
    title: "Residential Painting",
    description: "Interior and exterior painting for homes, apartments, and condos with premium quality finishes.",
    features: ["Interior walls & ceilings", "Exterior siding & trim", "Kitchen & bathroom painting", "Color consultation"],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    icon: Building,
    title: "Commercial Painting",
    description: "Professional painting services for offices, retail spaces, and commercial buildings.",
    features: ["Office spaces", "Retail stores", "Warehouses", "Scheduled maintenance"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Expert advice on color schemes and finishes to transform your space perfectly.",
    features: ["Color matching", "Trend analysis", "Lighting considerations", "Sample testing"],
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    icon: Paintbrush,
    title: "Specialty Finishes",
    description: "Decorative painting techniques including textures, faux finishes, and custom work.",
    features: ["Textured walls", "Faux finishes", "Accent walls", "Custom designs"],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    icon: Shield,
    title: "Surface Preparation",
    description: "Thorough preparation including cleaning, sanding, priming, and repair work.",
    features: ["Wall repairs", "Surface cleaning", "Primer application", "Crack filling"],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    icon: Clock,
    title: "Maintenance Services",
    description: "Regular maintenance and touch-up services to keep your property looking fresh.",
    features: ["Touch-up painting", "Regular inspections", "Preventive maintenance", "Emergency repairs"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Our Painting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-manrope">
            From residential homes to commercial buildings, we provide comprehensive painting solutions 
            with attention to detail and quality craftsmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer hover-zoom hover-lift"
                onClick={() => setSelectedService(selectedService === index ? null : index)}
              >
                {/* Service Image */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-deep-blue/20 group-hover:bg-deep-blue/10 transition-colors duration-300"></div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-deep-blue transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-deep-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-black ml-4 group-hover:text-deep-blue transition-colors duration-300">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed font-manrope">
                  {service.description}
                </p>
                
                {/* Expandable Features */}
                <div className={`transition-all duration-300 overflow-hidden ${selectedService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-deep-blue rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="text-deep-blue font-semibold hover:text-blue-800 transition-colors duration-200">
                  {selectedService === index ? 'Show Less' : 'Learn More'}
                </button>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-deep-blue to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-manrope opacity-90">
              Get a free, no-obligation quote for your painting project. We'll assess your needs 
              and provide a detailed estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0413847063"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 hover-lift"
              >
                Call for Quote: 0413 847 063
              </a>
              <a 
                href="#contact"
                className="border-2 border-white text-white hover:bg-white hover:text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover-lift"
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