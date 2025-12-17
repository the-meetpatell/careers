import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Globe2, Laptop2, ShieldCheck, Users, MapPin, Sparkles } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

const PROCESS_STEPS = [
  { title: 'HR round', detail: 'Track mapping (controllership, delivery, pod leadership, or accounting), expectation-setting, and comp bands before we dive deep.' },
  { title: 'Assessment', detail: 'A practical case or short working session that mirrors the pod work you’ll own.' },
  { title: 'Technical round', detail: 'Deep dive on your judgment, quality bar, and operating cadence with our hiring managers.' },
  { title: 'Final round', detail: 'Leadership conversation to align on pod fit, start plan, and rollout support before an offer.' },
]

const FINOPS_ROLES = [
  {
    title: 'Financial Controller',
    tag: 'FinOps • UAE (Dubai) / Remote',
    description: 'Own pod-level controllership, reviews, and quality for high-growth startup clients.',
    to: '/finops-drive/financial-controller',
    accent: 'from-indigo-500 to-blue-600',
    chipBg: 'bg-indigo-100 text-indigo-700',
  },
  {
    title: 'Account Manager - FinOps',
    tag: 'FinOps • UAE (Dubai) / Remote',
    description: 'Lead client pods, manage delivery SLAs, and partner with controllers on escalations.',
    to: '/finops-drive/finops-account-manager',
    accent: 'from-emerald-500 to-teal-600',
    chipBg: 'bg-emerald-100 text-emerald-700',
  },
  {
    title: 'Team Lead - FinOps',
    tag: 'FinOps • UAE (Dubai) / Remote',
    description: 'Run daily execution for pods; coach Sr/Jr associates to deliver error-free work.',
    to: '/finops-drive/finops-team-lead',
    accent: 'from-amber-500 to-orange-500',
    chipBg: 'bg-amber-100 text-amber-700',
  },
  {
    title: 'Accounting Advisor',
    tag: 'FinOps • Remote',
    description: 'Handle complex reconciliations, reporting packs, and support month-end closes.',
    to: '/finops-drive/senior-accounting-associate',
    accent: 'from-purple-500 to-pink-500',
    chipBg: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'Accounting Fresher',
    tag: 'FinOps • Remote',
    description: 'Learn fast in a structured pod, supporting data prep, reconciliations, and reporting.',
    to: '/finops-drive/accounting-fresher',
    accent: 'from-lime-500 to-green-500',
    chipBg: 'bg-lime-100 text-lime-700',
  },
]

export default function FinOpsDrive() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/60 to-white pt-24">
      <section className="px-6 sm:px-8 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div>
            <AnimatedSection animation="fade-down">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-800 font-semibold border border-sky-100 mb-4">
                <Sparkles size={16} />
                FinOps Hiring Hub
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
                Always-on FinOps hiring for pod-ready talent.
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl font-medium">
                Join our FinOps pods across controllership, delivery, and accounting excellence. Ongoing hiring with weekly virtual slots—no walk-ins required.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-sky-50 text-sky-700 text-sm font-semibold border border-sky-100">
                  <Calendar size={16} />
                  Weekly interview slots (virtual)
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold border border-indigo-100">
                  <Laptop2 size={16} />
                  100% virtual • timezone-friendly
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-100">
                  <ShieldCheck size={16} />
                  Structured pods with clear SLAs
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
                  <Button size="lg" className="group h-14 px-8 text-base shadow-lg shadow-sky-500/20 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700">
                    View open FinOps roles
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </a>
                <Link to="/virtual-drive" className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-indigo-700">
                  Looking for other roles?
                  <ArrowRight size={18} />
                </Link>
              </div>
              <p className="text-sm text-slate-500 mt-3">Submit anytime—we schedule you into the next weekly interview batch.</p>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection animation="fade-left" delay={150}>
              <Card className="bg-white shadow-2xl border-0 p-6 sm:p-8">
                <div className="flex items-start gap-3 pb-6 border-b border-slate-200">
                  <ShieldCheck className="text-sky-600 flex-shrink-0" size={24} />
                  <div>
                    <div className="text-sm font-bold text-sky-700 uppercase tracking-wide">Always-on FinOps hiring</div>
                    <p className="text-slate-700 font-semibold">We’re meeting FinOps talent weekly to plug into controllership, delivery, and pod leadership roles.</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100">
                    <div className="text-xs font-semibold text-sky-700 uppercase mb-2">Scheduling</div>
                    <div className="font-extrabold text-slate-900 text-xl">Weekly slots</div>
                    <div className="text-slate-600 text-sm">Choose the next available virtual slot once you apply; we keep pods moving every week.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                    <div className="text-xs font-semibold text-emerald-700 uppercase mb-2">Format</div>
                    <div className="font-extrabold text-slate-900 text-xl">Virtual only</div>
                    <div className="text-slate-600 text-sm">Structured conversations on Meet that mirror real pod workflows—no walk-ins.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                    <div className="text-xs font-semibold text-blue-700 uppercase mb-2">Locations</div>
                    <div className="font-extrabold text-slate-900 text-xl">UAE (Dubai) & Remote</div>
                    <div className="text-slate-600 text-sm">Pod placements match your location fit after selection.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                    <div className="text-xs font-semibold text-amber-700 uppercase mb-2">Who we want</div>
                    <div className="font-extrabold text-slate-900 text-xl">Top FinOps talent</div>
                    <div className="text-slate-600 text-sm">Operators who can ship clean closes, reporting, and client-ready quality at speed—year-round.</div>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">How we hire FinOps talent</h2>
            <p className="text-lg text-slate-600 max-w-3xl">Straightforward, repeatable rounds to meet operators who can plug into pods immediately.</p>
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
              Rolling process—once you apply, we share the next available virtual slots for your timezone.
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">FinOps roles we’re hiring for</h2>
            <p className="text-lg text-slate-600 max-w-3xl">Pick the pod and level that fits you best. Apply now and we’ll line up the next virtual rounds.</p>
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
