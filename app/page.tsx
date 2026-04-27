import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import PortfolioSection from '@/components/PortfolioSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
