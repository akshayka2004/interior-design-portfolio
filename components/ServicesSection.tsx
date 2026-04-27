import React from 'react'

export default function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Residential Design',
      description: 'Transform your home with personalized interior design that reflects your style and meets your lifestyle needs.',
      features: ['Space Planning', 'Color Consultation', 'Furniture Selection']
    },
    {
      number: '02',
      title: 'Commercial Spaces',
      description: 'Create inspiring workplaces and commercial environments that enhance productivity and brand identity.',
      features: ['Office Design', 'Retail Spaces', 'Hospitality Design']
    },
    {
      number: '03',
      title: 'Renovation & Remodeling',
      description: 'Breathe new life into existing spaces with thoughtful renovations that enhance functionality and beauty.',
      features: ['Kitchen Remodels', 'Bathroom Updates', 'Full Home Renovations']
    },
    {
      number: '04',
      title: 'Consultation Services',
      description: 'Get expert design advice tailored to your specific needs and vision without the full design project.',
      features: ['Design Planning', 'Material Selection', 'Budget Optimization']
    },
    {
      number: '05',
      title: 'Project Management',
      description: 'We oversee every aspect of your project from concept through completion, ensuring quality and timeliness.',
      features: ['Timeline Management', 'Vendor Coordination', 'Quality Control']
    },
    {
      number: '06',
      title: 'Specialized Styling',
      description: 'From staging for sale to creating themed spaces, we offer specialized styling for unique needs.',
      features: ['Home Staging', 'Event Design', 'Themed Spaces']
    }
  ]

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">What We Offer</h2>
          <h3 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
            Our Design Services
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to your unique needs and vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Number Badge */}
              <div className="inline-block mb-4">
                <div className="text-4xl font-serif font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {service.number}
                </div>
              </div>

              {/* Title */}
              <h4 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex gap-3 text-sm">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Border Accent */}
              <div className="pt-6 border-t border-border/50">
                <button className="text-primary hover:text-accent font-medium text-sm transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 border border-border rounded-2xl p-12 text-center">
          <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Let&apos;s discuss your vision and create something beautiful together.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition-all font-medium">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
