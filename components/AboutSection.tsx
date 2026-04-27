import React from 'react'

export default function AboutSection() {
  const values = [
    {
      icon: '✨',
      title: 'Design Excellence',
      description: 'We pursue perfection in every detail, creating spaces that are both beautiful and functional.'
    },
    {
      icon: '🎯',
      title: 'Client-Focused',
      description: 'Your vision drives our work. We listen, understand, and deliver exactly what you imagine.'
    },
    {
      icon: '🏆',
      title: 'Timeless Quality',
      description: 'We choose materials and styles that stand the test of time, ensuring lasting elegance.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We work closely with architects, contractors, and our clients throughout the entire process.'
    }
  ]

  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</h2>
          <h3 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
            Creating Beautiful Spaces for 12+ Years
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Placeholder */}
          <div className="h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border flex items-center justify-center">
            <p className="text-muted-foreground text-center px-6">Studio Team Image</p>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2012, Studio Interior Design has been transforming spaces and enriching lives through thoughtful, sophisticated design. Our passion is creating environments that inspire, comfort, and delight.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With a team of award-winning designers and a deep understanding of contemporary and classic aesthetics, we specialize in bringing our clients' visions to life. Every project is a collaboration, a journey of discovery, and an opportunity to create something truly exceptional.
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex gap-3">
                <div className="w-1 bg-primary rounded-full" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">150+ Completed Projects</h4>
                  <p className="text-sm text-muted-foreground">From residential to commercial spaces across the region</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1 bg-primary rounded-full" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">98% Client Satisfaction</h4>
                  <p className="text-sm text-muted-foreground">Our clients love what we create for them</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1 bg-primary rounded-full" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Award-Winning Team</h4>
                  <p className="text-sm text-muted-foreground">Recognized for innovation and excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="font-serif text-xl font-bold text-foreground mb-3">
                {value.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
