import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Globe2, Laptop2, ShieldCheck, Users, Sparkles, MapPin } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

const PROCESS_STEPS = [
  { title: 'Apply by Friday, 19th Dec 2025', detail: 'Submit your application before 11:59 PM. Only pre-registered candidates move forward.' },
  { title: 'Screening & HR • Saturday, 20th Dec 2025', detail: 'Initial screening plus a quick HR conversation to align expectations.' },
  { title: 'Technical • Sunday, 21st Dec 2025', detail: 'Role-specific technical/skills discussions with our leaders.' },
  { title: 'Final Round • Following Week', detail: 'Top candidates meet leadership for the closing conversation.' },
]

const ROLE_CARDS = [
  {
    title: 'Senior Software Engineer',
    tag: 'Engineering • Remote/Hybrid',
    description: 'Build and ship production-grade features end-to-end across our fintech platform.',
    to: '/virtual-drive/sr-software-engineer',
    accent: 'from-indigo-600 to-blue-600',
    chipBg: 'bg-indigo-100 text-indigo-700',
  },
  {
    title: 'Junior Web Developer',
    tag: 'Engineering • Remote/Hybrid',
    description: 'Ship UI changes, fix bugs, and learn full-stack fundamentals alongside senior engineers.',
    to: '/virtual-drive/jr-web-developer',
    accent: 'from-emerald-500 to-teal-600',
    chipBg: 'bg-emerald-100 text-emerald-700',
  },
  {
    title: 'Content & PR Manager (Arabic is a must)',
    tag: 'Marketing • Dubai',
    description: 'Lead Arabic content, PR, and media narratives for founders.',
    to: '/virtual-drive/content-pr-manager',
    accent: 'from-purple-600 to-amber-500',
    chipBg: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'Field Marketing Manager (Arabic is a must)',
    tag: 'Marketing • Dubai',
    description: 'Run Arabic-first field marketing programs, events, and ecosystem visibility across the region.',
    to: '/virtual-drive/event-pr-manager',
    accent: 'from-rose-500 to-orange-500',
    chipBg: 'bg-rose-100 text-rose-700',
  },
  {
    title: 'Marketing Ops & CRM Manager',
    tag: 'Marketing • Remote',
    description: 'Build and optimize CRM, automations, and reporting for growth teams.',
    to: '/virtual-drive/marketing-ops-crm-manager',
    accent: 'from-lime-500 to-green-600',
    chipBg: 'bg-lime-100 text-lime-700',
  },
  {
    title: 'Field Sales Executive',
    tag: 'Revenue • Dubai',
    description: 'Drive outbound, pipeline, and conversions for fintech services in the UAE.',
    to: '/virtual-drive/field-sales-executive',
    accent: 'from-blue-500 to-cyan-500',
    chipBg: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Content Writer (English)',
    tag: 'Marketing • Remote/Hybrid',
    description: 'Own crisp English storytelling across product, web, and growth campaigns.',
    to: '/virtual-drive/content-writer-english',
    accent: 'from-sky-500 to-indigo-500',
    chipBg: 'bg-sky-100 text-sky-700',
  },
  {
    title: 'Content Writer (Arabic)',
    tag: 'Marketing • Remote/Hybrid',
    description: 'Craft Arabic content that builds trust with founders and partners.',
    to: '/virtual-drive/content-writer-arabic',
    accent: 'from-amber-500 to-red-500',
    chipBg: 'bg-amber-100 text-amber-700',
  },
  {
    title: 'Appointment Setter',
    tag: 'Revenue • Remote',
    description: 'Qualify and schedule high-intent meetings for the partnerships team.',
    to: '/virtual-drive/appointment-setter',
    accent: 'from-emerald-500 to-teal-600',
    chipBg: 'bg-emerald-100 text-emerald-700',
  },
]

export default function VirtualDrive() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white pt-24">
      <section className="px-6 sm:px-8 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
          <div>
            <AnimatedSection animation="fade-down">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-100 mb-4">
                <Sparkles size={16} />
                Endgame Hiring 2025
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
                Final virtual drive of the year. Application-only hiring.
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl font-medium">
                We are looking for top performers who can move fast and own outcomes. Apply before Friday, 19th Dec 2025 to be considered for virtual rounds happening on the 20th & 21st.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold border border-indigo-100">
                  <Calendar size={16} />
                  Apply by Friday, 19th Dec 2025
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
                  <Clock size={16} />
                  Screening 20th Dec • Technical 21st Dec
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
              <div className="mt-10 flex gap-4 flex-wrap">
                <a href="#roles">
                  <Button size="lg" className="group h-14 px-8 text-base shadow-lg shadow-indigo-500/20">
                    See roles & apply
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </a>
              </div>
              <p className="text-sm text-slate-500 mt-3">Only applications submitted before Friday, 19th Dec 2025 will be scheduled.</p>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection animation="fade-left" delay={150}>
              <Card className="bg-white shadow-2xl border-0 p-6 sm:p-8">
                <div className="flex items-start gap-3 pb-6 border-b border-slate-200">
                  <ShieldCheck className="text-emerald-600 flex-shrink-0" size={24} />
                  <div>
                    <div className="text-sm font-bold text-emerald-700 uppercase tracking-wide">Selection promise</div>
                    <p className="text-slate-700 font-semibold">We’re meeting only the strongest applications. No walk-ins—every conversation is scheduled.</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                    <div className="text-xs font-semibold text-indigo-700 uppercase mb-2">Timeline</div>
                    <div className="font-extrabold text-slate-900 text-xl">20th Dec - 21st Dec 2025</div>
                    <div className="text-slate-600 text-sm">Screening on Saturday, Technical on Sunday, Finals the following week.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                    <div className="text-xs font-semibold text-emerald-700 uppercase mb-2">Locations</div>
                    <div className="font-extrabold text-slate-900 text-xl">UAE (Dubai) & Global (Remote)</div>
                    <div className="text-slate-600 text-sm">Remote interviews; location fit finalized with offers.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                    <div className="text-xs font-semibold text-blue-700 uppercase mb-2">Format</div>
                    <div className="font-extrabold text-slate-900 text-xl">Virtual only</div>
                    <div className="text-slate-600 text-sm">You’ll receive confirmed slots—no drop-ins.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                    <div className="text-xs font-semibold text-amber-700 uppercase mb-2">Who we want</div>
                    <div className="font-extrabold text-slate-900 text-xl">Top 10% talent</div>
                    <div className="text-slate-600 text-sm">Builders who own outcomes and raise the bar.</div>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">How the drive works</h2>
            <p className="text-lg text-slate-600 max-w-3xl"> Damn good talent only</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {PROCESS_STEPS.map((step, idx) => (
              <AnimatedSection key={idx} animation="fade-up" delay={idx * 80}>
                <Card className="h-full p-6 bg-white border-2 border-slate-100 hover:border-indigo-200 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-extrabold">
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
              Screening on 20th Dec, Technical on 21st Dec, Finals the following week.
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="roles" className="px-6 sm:px-8 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="text-indigo-600" size={18} />
              <span className="text-sm font-bold text-indigo-700 uppercase tracking-wide">UAE (Dubai) & Global (Remote) hiring</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Roles in Endgame Hiring 2025</h2>
            <p className="text-lg text-slate-600 max-w-3xl">Pick the role that fits you best in our final hiring drive of the year. Apply before Friday, 19th Dec 2025 to lock your slot for the weekend interviews.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {ROLE_CARDS.map((role, idx) => (
              <AnimatedSection key={role.title} animation="fade-up" delay={idx * 80}>
                <Link to={role.to} className="block h-full group">
                  <Card className="h-full p-6 bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${role.accent} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                    <div className="relative">
                      <div className={`inline-flex px-3 py-1 rounded-full ${role.chipBg} text-xs font-bold mb-3`}>{role.tag}</div>
                      <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{role.title}</h3>
                      <p className="text-slate-600 text-sm mb-4">{role.description}</p>
                      <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
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
