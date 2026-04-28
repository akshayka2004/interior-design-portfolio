'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Home, 
  Building2, 
  Paintbrush, 
  Lightbulb, 
  Settings, 
  Palette,
  ArrowRight
} from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Residential Design',
      description: 'Transform your home with personalized interior design that reflects your style and meets your lifestyle needs.',
      features: ['Space Planning', 'Color Consultation', 'Furniture Selection']
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Commercial Spaces',
      description: 'Create inspiring workplaces and commercial environments that enhance productivity and brand identity.',
      features: ['Office Design', 'Retail Spaces', 'Hospitality Design']
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: 'Renovation & Remodeling',
      description: 'Breathe new life into existing spaces with thoughtful renovations that enhance functionality and beauty.',
      features: ['Kitchen Remodels', 'Bathroom Updates', 'Full Home Renovations']
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Consultation Services',
      description: 'Get expert design advice tailored to your specific needs and vision without the full design project.',
      features: ['Design Planning', 'Material Selection', 'Budget Optimization']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Project Management',
      description: 'We oversee every aspect of your project from concept through completion, ensuring quality and timeliness.',
      features: ['Timeline Management', 'Vendor Coordination', 'Quality Control']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Specialized Styling',
      description: 'From staging for sale to creating themed spaces, we offer specialized styling for unique needs.',
      features: ['Home Staging', 'Event Design', 'Themed Spaces']
    }
  ]

  return (
    <section id="services" className="py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-4"
          >
            What We Offer
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl font-bold text-foreground mb-8"
          >
            Our Design <span className="text-primary italic">Services</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-light"
          >
            Comprehensive interior design solutions tailored to your unique needs and vision.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-8 text-primary group-hover:scale-110 transition-transform duration-500 w-fit">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
              </div>

              <h4 className="font-serif text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h4>

              <p className="text-muted-foreground leading-relaxed mb-8 font-light text-lg">
                {service.description}
              </p>

              <ul className="space-y-4 mb-10">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all group/btn">
                Discover More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
