import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Welcome to Studio</h2>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground leading-tight text-pretty">
                Transform Your Space Into Art
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              We create timeless, elegant interior designs that reflect your personal style and enhance the beauty of your home. From contemporary minimalism to classic sophistication, we bring your vision to life.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition-all font-medium">
                View Portfolio
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-medium">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">150+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">12+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right - Featured image placeholder */}
          <div className="relative h-96 sm:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-secondary/50 flex items-center justify-center border border-border">
                <p className="text-muted-foreground text-center px-6">Featured Project Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
