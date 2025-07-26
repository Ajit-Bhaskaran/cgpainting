
'use client'

import Image from 'next/image'
import { Button } from './ui/button'
import { Star, Phone, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-blue-600 block">Painting Services</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your space with CG Painting - The Travelling Painter. 
                Quality workmanship, reliable service, and competitive prices across the region.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-700 font-medium">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">Local & Reliable</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0413847063">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0413 847 063
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                  Get Free Quote
                </Button>
              </a>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600">Satisfaction Guaranteed</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-blue-600">Free</div>
                <div className="text-gray-600">Quotes & Estimates</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="relative aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://c8.alamy.com/comp/KH38X3/professional-painter-worker-is-painting-a-wall-KH38X3.jpg"
                  alt="Professional painter at work"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-blue-200">
                          <div class="text-center">
                            <div class="text-4xl mb-2">🎨</div>
                            <div class="text-gray-600 font-medium">Professional Painting</div>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-100 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
