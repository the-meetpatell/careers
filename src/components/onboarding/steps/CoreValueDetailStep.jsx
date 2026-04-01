import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, XCircle } from 'lucide-react'
import { coreValues } from '../../../data/coreValues'
import { useOnboarding } from '../../../contexts/OnboardingContext'
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card'
import AnimatedSection from '../../AnimatedSection'

export default function CoreValueDetailStep({ valueKey }) {
  const { nextStep, previousStep } = useOnboarding()
  const value = coreValues.find((item) => item.id === valueKey) || coreValues[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-down">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-700 shadow-sm">
              <Sparkles size={16} className="text-orange-500" />
              TRUST • Our Core Values
            </div>
            <div className="flex justify-center items-center gap-6 mt-6">
              <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${value.colors.gradient} flex items-center justify-center text-white text-4xl font-extrabold shadow-2xl`}>
                {value.letter || value.title?.charAt(0) || '?'}
              </div>
              <div className="text-left">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">{value.title}</h2>
                <p className="text-lg text-slate-600 mt-2 max-w-2xl">{value.tagline}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="border-2 border-slate-200 shadow-xl h-full overflow-hidden">
              <div className={`p-8 rounded-3xl bg-gradient-to-br ${value.colors.soft} relative`}>
                <div className="absolute inset-0 bg-white/30 mix-blend-overlay pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 text-xs font-bold text-slate-700 border border-white">
                    What it means
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-4 mb-3">{value.title}</h3>
                  <p className="text-slate-700 leading-relaxed text-lg mb-4">{value.meaning}</p>
                  <div className="flex flex-wrap gap-2">
                    {(value.tags || ['Consistency', 'Clarity', 'Craft']).map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/80 text-xs font-semibold text-slate-700 border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={150}>
            <Card className="border-2 border-slate-200 shadow-xl h-full">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-extrabold text-slate-900">Expected Behaviors</h3>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Do this</span>
                </div>
                <div className="space-y-3">
                  {value.behaviors.map((behavior) => (
                    <div key={behavior} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
                      <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-1" size={22} />
                      <span className="text-slate-700 font-medium">{behavior}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={200}>
          <Card className="border-2 border-slate-200 shadow-xl mb-8">
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-emerald-600 mb-2">Good Examples</h4>
                <div className="space-y-3">
                  {value.examples.good.map((example) => (
                    <div key={example} className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 shadow-sm">
                      <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-800 font-medium">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-red-600 mb-2">Not Good Examples</h4>
                <div className="space-y-3">
                  {value.examples.bad.map((example) => (
                    <div key={example} className="flex items-start gap-3 p-3 rounded-xl bg-red-50/70 border border-red-100 shadow-sm">
                      <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-800 font-medium">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={250}>
          <Card className="border-2 border-slate-200 shadow-xl mb-10 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-extrabold text-slate-900">Scorecard</h3>
                <div className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${value.colors.soft} text-slate-700 border border-slate-200 shadow-sm`}>
                  1 • 3 • 5
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse rounded-2xl overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                      <th className="p-4 text-xs font-bold uppercase tracking-widest text-white/90">Measure</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest text-center w-24">1</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest text-center w-24">3</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-widest text-center w-24">5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {value.scorecard.map((row, idx) => (
                      <tr key={row.measure} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                        <td className="p-4 border border-slate-100 font-semibold text-slate-900">{row.measure}</td>
                        <td className="p-4 border border-slate-100 text-center text-slate-700">{row.scores[1]}</td>
                        <td className="p-4 border border-slate-100 text-center text-slate-700">{row.scores[3]}</td>
                        <td className="p-4 border border-slate-100 text-center text-slate-700">{row.scores[5]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
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
              Next Value
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
