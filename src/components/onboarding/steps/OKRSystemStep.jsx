import { useOnboarding } from '../../../contexts/OnboardingContext'
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card'
import { ArrowRight, ArrowLeft, Target, Sparkles, Leaf } from 'lucide-react'
import AnimatedSection from '../../AnimatedSection'

export default function OKRSystemStep() {
  const { nextStep, previousStep } = useOnboarding()

  const goal = {
    title: 'To make financial management effortless, reliable, and trustable for growing companies',
    description:
      'Position Finanshels as the most trusted AI-powered finance partner for growing companies across MENA through consistent delivery and measurable customer outcomes.'
  }

  const objectiveTeams = [
    'Pre-sales',
    'Sales',
    'Marketing & Branding',
    'Partnerships',
    'Customer Success',
    'HR & TA',
    'Tech & Product',
    'FinOps',
    'Taxations',
    'AML',
    'ALC',
    'Internal Finance',
    'COE'
  ]

  const objectiveRows = []
  for (let i = 0; i < objectiveTeams.length; i += 3) {
    objectiveRows.push(objectiveTeams.slice(i, i + 3))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-6 py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-200/25 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-down">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur border border-blue-200 text-sm font-bold text-blue-700 mb-6 shadow-sm">
              <Target size={16} />
              FINANSHELS OKR SYSTEM
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tighter leading-tight">
              Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Goals</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              One sharp focus, aligned execution across every team.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <div className="mb-12 max-w-5xl mx-auto">
            <Card className="border-2 border-blue-200/70 shadow-2xl overflow-hidden bg-white/90 backdrop-blur">
              <div className="p-5 sm:p-8 md:p-10">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg ring-4 ring-blue-100">
                    <Target className="text-white" size={26} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-extrabold tracking-wide border border-blue-100">
                      <Sparkles size={12} />
                      PRIMARY GOAL
                    </div>
                    <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
                      {goal.title}
                    </h3>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                <Leaf className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900">Our Teams</h3>
            </div>
            <p className="text-slate-600 mb-6">Cross-functional teams growing one category-leader brand together.</p>

            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
              {objectiveTeams.map((team, idx) => (
                <Card key={idx} className="border-2 border-emerald-100/90 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur overflow-hidden">
                  <div className="p-4 bg-gradient-to-br from-emerald-50/80 via-teal-50/60 to-lime-50/70 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-xs font-extrabold flex items-center justify-center shadow-md ring-4 ring-emerald-100">
                      {idx + 1}
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <Leaf size={14} className="text-emerald-600 shrink-0" />
                      <div className="text-sm font-bold text-slate-900 truncate">{team}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="hidden lg:block relative pt-4">
              <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-emerald-300 via-emerald-200 to-transparent rounded-full" />

              <div className="relative space-y-6">
                {objectiveRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="relative">
                    <div
                      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1 bg-emerald-200/90 rounded-full"
                      style={{ width: row.length === 1 ? '26%' : '82%' }}
                    />

                    <div className={`grid gap-5 ${row.length === 1 ? 'grid-cols-1 max-w-sm mx-auto' : 'grid-cols-3'}`}>
                      {row.map((team, colIndex) => {
                        const teamIndex = rowIndex * 3 + colIndex

                        return (
                          <Card key={team} className="border-2 border-emerald-100/90 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/95 backdrop-blur overflow-hidden relative">
                            <div className="pointer-events-none absolute left-1/2 -top-5 h-5 w-0.5 -translate-x-1/2 bg-emerald-300" />

                            <div className="relative p-4 bg-gradient-to-br from-emerald-50/85 via-teal-50/65 to-lime-50/75 flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-xs font-extrabold flex items-center justify-center shadow-md ring-4 ring-emerald-100">
                                {teamIndex + 1}
                              </div>
                              <div className="flex items-center gap-2 min-w-0">
                                <Leaf size={14} className="text-emerald-600 shrink-0" />
                                <div className="text-sm font-bold text-slate-900 truncate">{team}</div>
                              </div>
                            </div>
                          </Card>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="flex justify-center gap-4 mt-12">
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
              Continue
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

