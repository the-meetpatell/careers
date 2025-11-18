import { useOnboarding } from '../../../contexts/OnboardingContext'
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card'
import { ArrowRight, ArrowLeft, Star, Quote } from 'lucide-react'
import AnimatedSection from '../../AnimatedSection'

export default function TestimonialsStep() {
  const { nextStep, previousStep } = useOnboarding()

  const logos = Array.from({ length: 12 }, (_, idx) => ({
    src: `/Logos/logo${idx + 1}.png`,
    alt: `Client logo ${idx + 1}`
  }))

  const testimonialImages = Array.from({ length: 6 }, (_, idx) => ({
    src: `/Logos/review${idx + 1}.png`,
    alt: `Customer review ${idx + 1}`
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white px-6 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-down">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-sm font-bold text-blue-700 mb-6">
              <Star size={16} />
              WHAT OUR CUSTOMERS THINK OF US?
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tighter">
              Real Stories. Real Reviews. <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Real Customers.</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <Card className="border-2 border-blue-200 shadow-2xl mb-12">
            <div className="p-12 bg-gradient-to-br from-blue-50 to-purple-50 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Star className="text-yellow-500 fill-yellow-500" size={32} />
                <Star className="text-yellow-500 fill-yellow-500" size={32} />
                <Star className="text-yellow-500 fill-yellow-500" size={32} />
                <Star className="text-yellow-500 fill-yellow-500" size={32} />
                <Star className="text-yellow-500 fill-yellow-500" size={32} />
              </div>
              <div className="text-5xl font-extrabold text-slate-900 mb-2">4.9</div>
              <div className="text-lg text-slate-600 mb-8">Based on 200+ Reviews on Trustpilot</div>
              <div className="flex flex-wrap justify-center gap-6 items-center">
                {logos.map((logo) => (
                  <div key={logo.src} className="px-6 py-3 rounded-xl bg-white border-2 border-slate-100 shadow-md flex items-center justify-center">
                    <img src={logo.src} alt={logo.alt} className="h-8 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {testimonialImages.map((testimonial) => (
              <Card key={testimonial.src} className="border-2 border-slate-100 hover:border-blue-300 hover:shadow-xl transition-all duration-500 overflow-hidden">
                <img
                  src={testimonial.src}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              onClick={previousStep}
              className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white hover:opacity-95 font-bold px-12 text-lg shadow-xl"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back
            </Button>
            <Button
              size="lg"
              onClick={nextStep}
              className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:opacity-95 text-white font-bold px-12 text-lg shadow-xl"
            >
              Take the Knowledge Check
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
