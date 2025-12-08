import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Globe2, Laptop2, ShieldCheck, Users, MapPin, Sparkles } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

const PROCESS_STEPS = [
  { title: 'Friday, 12th — 1-hour group discussion', detail: '5:30 – 6:30pm (Asia/Dubai) via Google Meet. Virtual group discussion focused on how you operate within pods and handle live scenarios.' },
  { title: 'Saturday, 13th — Technical round', detail: 'Hands-on discussions with FinOps leaders to test accounting depth, reconciliations, and reporting rigor.' },
  { title: 'Final round — Early next week', detail: 'Leadership conversation for shortlisted candidates before offers are rolled out.' },
]

const FINOPS_ROLES = [
  {
    title: 'Financial Controller',
    tag: 'FinOps • UAE (Dubai) / Remote',
    description: 'Own pod-level controllership, reviews, and quality for high-growth startup clients.',
    to: '/virtual-drive/financial-controller',
    accent: 'from-indigo-500 to-blue-600',
    chipBg: 'bg-indigo-100 text-indigo-700',
  },
  {
    title: 'Account Manager - FinOps',
    tag: 'FinOps • UAE (Dubai) / Remote',
    description: 'Lead client pods, manage delivery SLAs, and partner with controllers on escalations.',
    to: '/virtual-drive/finops-account-manager',
    accent: 'from-emerald-500 to-teal-600',
    chipBg: 'bg-emerald-100 text-emerald-700',
  },
  {
    title: 'Team Lead - FinOps',
    tag: 'FinOps • UAE (Dubai) / Remote',
    description: 'Run daily execution for pods; coach Sr/Jr associates to deliver error-free work.',
    to: '/virtual-drive/finops-team-lead',
    accent: 'from-amber-500 to-orange-500',
    chipBg: 'bg-amber-100 text-amber-700',
  },
  {
    title: 'Senior Accounting Associate',
    tag: 'FinOps • Remote',
    description: 'Handle complex reconciliations, reporting packs, and support month-end closes.',
    to: '/virtual-drive/senior-accounting-associate',
    accent: 'from-purple-500 to-pink-500',
    chipBg: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'Junior Accounting Associate',
    tag: 'FinOps • Remote',
    description: 'Execute daily bookkeeping, AP/AR hygiene, and assist in close activities.',
    to: '/virtual-drive/junior-accounting-associate',
    accent: 'from-sky-500 to-cyan-500',
    chipBg: 'bg-sky-100 text-sky-700',
  },
  {
    title: 'Accounting Fresher',
    tag: 'FinOps • Remote',
    description: 'Learn fast in a structured pod, supporting data prep, reconciliations, and reporting.',
    to: '/virtual-drive/accounting-fresher',
    accent: 'from-lime-500 to-green-500',
    chipBg: 'bg-lime-100 text-lime-700',
  },
]

export default function FinOpsDrive() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/50 to-white pt-24">
      <section className="px-6 sm:px-8 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div>
            <AnimatedSection animation="fade-down">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-100 mb-4">
                <Sparkles size={16} />
                FinOps Career Drive
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
                Dedicated hiring for FinOps. Virtual rounds on 12th & 13th.
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl font-medium">
                Join our FinOps pods across controllership, delivery, and accounting excellence. All conversations are scheduled—no walk-ins.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold border border-indigo-100">
                  <Calendar size={16} />
                  Friday 12th • Group discussion (1 hour)
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold border border-amber-100">
                  <Clock size={16} />
                  Saturday 13th • Technical round
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-100">
                  <Laptop2 size={16} />
                  100% virtual
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold border border-slate-200">
                  <Globe2 size={16} />
                  UAE (Dubai) & Global (Remote)
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="mt-10 flex gap-4 flex-wrap items-center">
                <a href="#roles">
                  <Button size="lg" className="group h-14 px-8 text-base shadow-lg shadow-emerald-500/20 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                    View FinOps roles
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </a>
                <Link to="/virtual-drive" className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-indigo-700">
                  Looking for other roles?
                  <ArrowRight size={18} />
                </Link>
              </div>
              <p className="text-sm text-slate-500 mt-3">Submit now to be scheduled for the 12th & 13th. Finals happen early the following week.</p>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection animation="fade-left" delay={150}>
              <Card className="bg-white shadow-2xl border-0 p-6 sm:p-8">
                <div className="flex items-start gap-3 pb-6 border-b border-slate-200">
                  <ShieldCheck className="text-emerald-600 flex-shrink-0" size={24} />
                  <div>
                    <div className="text-sm font-bold text-emerald-700 uppercase tracking-wide">FinOps-only sprint</div>
                    <p className="text-slate-700 font-semibold">We’re meeting FinOps talent ready to own controllership, delivery, and pod leadership.</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                    <div className="text-xs font-semibold text-indigo-700 uppercase mb-2">Timeline</div>
                    <div className="font-extrabold text-slate-900 text-xl">Fri 12th & Sat 13th</div>
                    <div className="text-slate-600 text-sm">Group discussion on Friday, technical on Saturday, finals early next week.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                    <div className="text-xs font-semibold text-emerald-700 uppercase mb-2">Format</div>
                    <div className="font-extrabold text-slate-900 text-xl">Virtual only</div>
                    <div className="text-slate-600 text-sm">Confirmed slots—no walk-ins. Expect structured conversations.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                    <div className="text-xs font-semibold text-blue-700 uppercase mb-2">Locations</div>
                    <div className="font-extrabold text-slate-900 text-xl">UAE (Dubai) & Remote</div>
                    <div className="text-slate-600 text-sm">Pod placements match your location fit after selection.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                    <div className="text-xs font-semibold text-amber-700 uppercase mb-2">Who we want</div>
                    <div className="font-extrabold text-slate-900 text-xl">Top FinOps talent</div>
                    <div className="text-slate-600 text-sm">Operators who can ship clean closes, reporting, and client-ready quality at speed.</div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-8 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">How this FinOps drive runs</h2>
            <p className="text-lg text-slate-600 max-w-3xl">Straightforward, fast-moving rounds to meet operators who can plug into pods immediately.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {PROCESS_STEPS.map((step, idx) => (
              <AnimatedSection key={step.title} animation="fade-up" delay={idx * 80}>
                <Card className="h-full p-6 bg-white border-2 border-slate-100 hover:border-emerald-200 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-extrabold">
                      {idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm">{step.detail}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={350}>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold">
              <Users size={16} />
              Group discussion on Friday (1 hour), technical on Saturday, finals early next week.
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="roles" className="px-6 sm:px-8 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="text-emerald-600" size={18} />
              <span className="text-sm font-bold text-emerald-700 uppercase tracking-wide">FinOps hiring • UAE (Dubai) & Remote</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Roles in the FinOps Career Drive</h2>
            <p className="text-lg text-slate-600 max-w-3xl">Pick the pod and level that fits you best. Apply now so we can slot you into the 12th & 13th sessions.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {FINOPS_ROLES.map((role, idx) => (
              <AnimatedSection key={role.title} animation="fade-up" delay={idx * 60}>
                <Link to={role.to} className="block h-full group">
                  <Card className="h-full p-6 bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${role.accent} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                    <div className="relative">
                      <div className={`inline-flex px-3 py-1 rounded-full ${role.chipBg} text-xs font-bold mb-3`}>{role.tag}</div>
                      <h4 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{role.title}</h4>
                      <p className="text-slate-600 text-sm mb-4">{role.description}</p>
                      <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                        Apply now
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
