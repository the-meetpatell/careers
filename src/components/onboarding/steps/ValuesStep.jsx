import { useOnboarding } from '../../../contexts/OnboardingContext'
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card'
import { ArrowRight, ArrowLeft, Sparkles, MousePointer2 } from 'lucide-react'
import AnimatedSection from '../../AnimatedSection'
import { coreValues } from '../../../data/coreValues'

export default function ValuesStep() {
  const { goToStep, nextStep, previousStep } = useOnboarding()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-down">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-50 to-blue-50 border-2 border-orange-200 text-sm font-bold text-orange-700 mb-6 shadow-sm">
              <Sparkles size={18} className="animate-pulse" />
              BRAND VALUES
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tighter leading-tight">
              INSPIRE <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">Our Core Values Framework</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              These 5 principles guide how we think, work, and show up every single day at Finanshels. <br className="hidden sm:block" />
              <span className="inline-flex items-center gap-2 mt-2 text-blue-600 font-bold">
                <MousePointer2 size={18} />
                Click on each value card to dive deeper and understand what drives us
              </span>
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {coreValues.map((value, idx) => (
            <AnimatedSection key={value.id} animation="fade-up" delay={idx * 100}>
              <Card
                className="h-full border-2 border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2"
                onClick={() => goToStep(value.id)}
              >
                <div className={`p-8 sm:p-10 flex flex-col items-center text-center h-full bg-gradient-to-br ${value.colors.soft} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${value.colors.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10 text-4xl font-extrabold text-white`}>
                    {value.sequence}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors relative z-10">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-700 font-bold mb-3 relative z-10 uppercase tracking-widest">
                    {value.sequence} — {value.title}
                  </p>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 relative z-10">
                    {value.tagline}
                  </p>

                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 relative z-10">
                    <span>Click to explore</span>
                    <ArrowRight size={16} className="animate-bounce" />
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={700}>
          <div className="bg-gradient-to-r from-orange-100 via-blue-100 to-purple-100 rounded-3xl p-8 sm:p-12 text-center mb-8 border-2 border-orange-200 shadow-xl">
            <p className="text-lg sm:text-xl text-slate-700 font-semibold mb-6 leading-relaxed">
              💡 <span className="font-bold text-slate-900">Pro Tip:</span> Click on any value above to learn detailed insights and understand what drives us!
            </p>
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
                className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:opacity-95 text-white font-bold px-12 py-4 text-lg shadow-2xl"
              >
                Next
                <ArrowRight className="ml-2" size={22} />
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
