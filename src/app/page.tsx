import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import CurriculumSection from '@/components/CurriculumSection'
import TestimonialSection from '@/components/TestimonialSection'
import YouTubeSection from '@/components/YouTubeSection'
import PortfolioSection from '@/components/PortfolioSection'
import KindleSection from '@/components/KindleSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <YouTubeSection />
      <PortfolioSection />
      <KindleSection />
      <ProblemSection />
      <SolutionSection />
      <CurriculumSection />
      <TestimonialSection />
      <Footer />
    </main>
  )
}