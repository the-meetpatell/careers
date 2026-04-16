import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Globe2, Laptop2, ShieldCheck, Users, Sparkles, MapPin } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

const PROCESS_STEPS = [
  { title: 'Apply (rolling)', detail: 'Submit once; we review applications weekly and prioritise the strongest profiles.' },
  { title: 'Screening & HR', detail: 'Short screening and expectation alignment with our people team.' },
  { title: 'Role Interview', detail: 'Skills-focused conversations with leaders who own the function.' },
  { title: 'Offer & Onboarding', detail: 'Final decision with leadership and a fast, structured onboarding plan.' },
]

const ROLE_GROUPS = [
  {
    title: 'Sales & Partnerships',
    roles: [
      {
        title: 'VAS Revenue & Vendor Partnerships Executive',
        tag: 'Revenue • Dubai',
        description: 'Drive revenue growth by managing value-added service partnerships and vendor relationships in the UAE market.',
        to: '/virtual-drive/vas-revenue-vendor-partnerships-executive',
        accent: 'from-blue-500 to-cyan-500',
        chipBg: 'bg-blue-100 text-blue-700',
      },
      {
        title: 'Outbound Sales - India / Business Development',
        tag: 'Revenue • India',
        description: 'Lead outbound sales efforts targeting SMBs in India, driving pipeline and revenue growth for our fintech services.',
        to: '/virtual-drive/outbound-sales-india-business-development',
        accent: 'from-amber-500 to-orange-500',
        chipBg: 'bg-amber-100 text-amber-700',
      },
    ],
  },
  {
    title: 'Engineering',
    roles: [
      {
        title: 'Engineering Lead',
        tag: 'Engineering • Remote/Hybrid',
        description: 'Lead our engineering team to build scalable, secure, and innovative fintech solutions that drive our mission forward.',
        to: '/virtual-drive/engineering-lead',
        accent: 'from-indigo-600 to-blue-600',
        chipBg: 'bg-indigo-100 text-indigo-700',
      },
      {
        title: 'DevOps Engineer - Part Time',
        tag: 'Engineering • Remote/Hybrid',
        description: 'Manage infrastructure, automate deployments, and ensure the reliability and scalability of our fintech platform.',
        to: '/virtual-drive/devops-engineer-part-time',
        accent: 'from-emerald-500 to-teal-600',
        chipBg: 'bg-emerald-100 text-emerald-700',
      },
    ],
  },

  {
    title: 'HR & Talent Acquisition',
    roles: [
      {
        title: 'Senior Talent Acquisition Executive',
        tag: 'HR & Talent Acquisition • Remote/Hybrid',
        description: 'Lead our talent acquisition efforts to attract, retain, and develop top talent for our organization.',
        to: '/virtual-drive/senior-talent-acquisition',
        accent: 'from-indigo-600 to-blue-600',
        chipBg: 'bg-indigo-100 text-indigo-700',
      },
    ],
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
                Career Opportunities
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
                Career Opportunities
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl font-medium">
                Hiring across teams—apply once; we move fast.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold border border-indigo-100">
                  <Calendar size={16} />
                  Rolling applications
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
                  <Clock size={16} />
                  Fast-track interviews
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-100">
                  <Laptop2 size={16} />
                  Virtual-first, hybrid teams
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
              <p className="text-sm text-slate-500 mt-3">We review applications weekly and schedule interviews quickly.</p>
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
                    <div className="text-xs font-semibold text-indigo-700 uppercase mb-2">Cadence</div>
                    <div className="font-extrabold text-slate-900 text-xl">Weekly review</div>
                    <div className="text-slate-600 text-sm">We schedule screens and role interviews every week for the best profiles.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                    <div className="text-xs font-semibold text-emerald-700 uppercase mb-2">Locations</div>
                    <div className="font-extrabold text-slate-900 text-xl">UAE (Dubai) & Global (Remote)</div>
                    <div className="text-slate-600 text-sm">Remote interviews; location fit finalized with offers.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                    <div className="text-xs font-semibold text-blue-700 uppercase mb-2">Format</div>
                    <div className="font-extrabold text-slate-900 text-xl">Virtual-first</div>
                    <div className="text-slate-600 text-sm">You’ll receive confirmed slots—structured conversations, no walk-ins.</div>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">How we hire</h2>
            <p className="text-lg text-slate-600 max-w-3xl">Fast, structured, and focused on builders who own outcomes.</p>
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
              Weekly shortlists, quick interviews, and decisive offers.
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Open roles at Finanshels</h2>
            <p className="text-lg text-slate-600 max-w-3xl">Pick the role that fits you best. We review applications every week and move fast for the right talent.</p>
          </AnimatedSection>

          <div className="space-y-10 mt-8">
            {ROLE_GROUPS.map((group, groupIdx) => (
              <div key={group.title} id={group.title.toLowerCase().replace(/\\s+/g, '-')}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-indigo-600 to-cyan-600 rounded-full" />
                  <h3 className="text-2xl font-extrabold text-slate-900">{group.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {group.roles.map((role, idx) => (
                    <AnimatedSection key={role.title} animation="fade-up" delay={(groupIdx * 2 + idx) * 60}>
                      <Link to={role.to} className="block h-full group">
                        <Card className="h-full p-6 bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all relative overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-br ${role.accent} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                          <div className="relative">
                            <div className={`inline-flex px-3 py-1 rounded-full ${role.chipBg} text-xs font-bold mb-3`}>{role.tag}</div>
                            <h4 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{role.title}</h4>
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
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
