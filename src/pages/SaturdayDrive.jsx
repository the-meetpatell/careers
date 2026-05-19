import { useEffect } from 'react'
import {
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  Globe2,
  Laptop2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

const FORM_CONTAINER_ID = 'zf_div_drive_eJHiYL5szMR2i0ahFh4Awh3AeLaAlbtX3PiC2UjpGWU'
const FORM_SRC = 'https://forms.zohopublic.com/finanshelsllc/form/AccountingRoles/formperma/eJHiYL5szMR2i0ahFh4Awh3AeLaAlbtX3PiC2UjpGWU?zf_rszfm=1'

const DRIVE_HIGHLIGHTS = [
  {
    label: 'Date',
    value: 'Saturday, 23 May 2026',
    note: 'One-day virtual recruitment drive',
    icon: Calendar,
    accent: 'from-amber-50 to-orange-50 border-amber-100',
    iconBg: 'text-amber-700',
    chipText: 'text-amber-700',
  },
  {
    label: 'Format',
    value: '100% Virtual',
    note: 'Slots confirmed once you apply',
    icon: Laptop2,
    accent: 'from-indigo-50 to-blue-50 border-indigo-100',
    iconBg: 'text-indigo-700',
    chipText: 'text-indigo-700',
  },
  {
    label: 'Position',
    value: 'Senior Accounting Advisor',
    note: '5 open positions for this drive',
    icon: Briefcase,
    accent: 'from-emerald-50 to-teal-50 border-emerald-100',
    iconBg: 'text-emerald-700',
    chipText: 'text-emerald-700',
  },
  {
    label: 'Location',
    value: 'UAE (Dubai) & Remote',
    note: 'Pod placement finalised with offer',
    icon: Globe2,
    accent: 'from-sky-50 to-cyan-50 border-sky-100',
    iconBg: 'text-sky-700',
    chipText: 'text-sky-700',
  },
]

const PROCESS_STEPS = [
  { title: 'Apply by Friday', detail: 'Submit the form below before Saturday so we can lock in your slot for the drive.' },
  { title: 'Slot confirmation', detail: 'Our team shares a confirmed virtual time on Saturday, 23 May 2026.' },
  { title: 'Live conversation', detail: 'A focused technical and judgement-led discussion with hiring managers.' },
  { title: 'Decision & offer', detail: 'Strong fits move to a final leadership round and a fast offer.' },
]

const RESPONSIBILITIES = [
  'Manage all aspects of the accounting cycle—accounts receivable, accounts payable, and general ledger entries.',
  'Run month-end and year-end closing procedures, ensuring timely and accurate financial reporting.',
  'Use accounting software such as Xero, QuickBooks, or Zoho to maintain records and generate reports.',
  'Conduct financial analysis and prepare management reports that surface real business insight.',
  'Collaborate with internal teams and clients to resolve accounting issues and stay compliant with standards.',
  'Identify opportunities for process improvement and efficiency in accounting workflows.',
  'Stay current with changes in accounting regulations and standards and apply them in client work.',
  'Provide exceptional client service—answer questions, share updates, and unblock teams quickly.',
]

const REQUIREMENTS = [
  "Bachelor's degree in Accounting, Finance, or a related field.",
  '4+ years of proven work experience in accounting.',
  'Proficiency in accounting software such as Xero, QuickBooks, or Zoho.',
  'Excellent written and interpersonal communication skills.',
  'Thorough understanding of accounting basics and principles.',
  'Strong MS Excel and PowerPoint skills for analysis, reporting, and presentations.',
  'Exceptional attention to detail and accuracy in financial records and reports.',
  'Strong problem-solving skills and a process-improvement mindset.',
  'Dedication to delivering an exceptional client experience.',
  'Eagerness to learn, adopt, and test new technologies in accounting.',
  'CMA / CA / ACCA certification is a plus.',
]

export default function SaturdayDrive() {
  useEffect(() => {
    const container = document.getElementById(FORM_CONTAINER_ID)
    if (!container || container.children.length > 0) return undefined

    const iframe = document.createElement('iframe')
    let ifrmSrc = FORM_SRC

    try {
      if (typeof window !== 'undefined' && typeof window.ZFAdvLead !== 'undefined' && typeof window.zfutm_zfAdvLead !== 'undefined') {
        for (let prmIdx = 0; prmIdx < window.ZFAdvLead.utmPNameArr.length; prmIdx++) {
          let utmPm = window.ZFAdvLead.utmPNameArr[prmIdx]
          utmPm = window.ZFAdvLead.isSameDomian && window.ZFAdvLead.utmcustPNameArr.indexOf(utmPm) === -1 ? 'zf_' + utmPm : utmPm
          const utmVal = window.zfutm_zfAdvLead.zfautm_gC_enc(window.ZFAdvLead.utmPNameArr[prmIdx])
          if (typeof utmVal !== 'undefined' && utmVal !== '') {
            ifrmSrc = ifrmSrc + (ifrmSrc.indexOf('?') > 0 ? '&' : '?') + utmPm + '=' + utmVal
          }
        }
      }
      if (typeof window !== 'undefined' && typeof window.ZFLead !== 'undefined' && typeof window.zfutm_zfLead !== 'undefined') {
        for (let prmIdx = 0; prmIdx < window.ZFLead.utmPNameArr.length; prmIdx++) {
          const utmPm = window.ZFLead.utmPNameArr[prmIdx]
          const utmVal = window.zfutm_zfLead.zfutm_gC_enc(window.ZFLead.utmPNameArr[prmIdx])
          if (typeof utmVal !== 'undefined' && utmVal !== '') {
            ifrmSrc = ifrmSrc + (ifrmSrc.indexOf('?') > 0 ? '&' : '?') + utmPm + '=' + utmVal
          }
        }
      }
    } catch (e) {}

    iframe.src = ifrmSrc
    iframe.style.border = 'none'
    iframe.style.height = '1160px'
    iframe.style.width = '100%'
    iframe.style.transition = 'all 0.5s ease'
    iframe.style.overflow = 'hidden'
    iframe.style.display = 'block'
    iframe.setAttribute('aria-label', 'Senior Accounting Advisor — Saturday Drive Application')

    container.appendChild(iframe)

    const messageHandler = (event) => {
      const evntData = event.data
      if (evntData && evntData.constructor === String) {
        const zf_ifrm_data = evntData.split('|')
        if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
          const zf_perma = zf_ifrm_data[0]
          const zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + 'px'
          const iframeEl = container.getElementsByTagName('iframe')[0]

          if (iframeEl && iframeEl.src.indexOf('formperma') > 0 && iframeEl.src.indexOf(zf_perma) > 0) {
            const prevIframeHeight = iframeEl.style.height
            let zf_tout = false

            if (zf_ifrm_data.length === 3) {
              iframeEl.scrollIntoView()
              zf_tout = true
            }

            if (prevIframeHeight !== zf_ifrm_ht_nw) {
              if (zf_tout) {
                setTimeout(() => {
                  iframeEl.style.height = zf_ifrm_ht_nw
                }, 500)
              } else {
                iframeEl.style.height = zf_ifrm_ht_nw
              }
            }
          }
        }
      }
    }

    window.addEventListener('message', messageHandler, false)
    return () => window.removeEventListener('message', messageHandler)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/50 to-white pt-24">
      {/* Hero */}
      <section className="px-6 sm:px-8 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div>
            <AnimatedSection animation="fade-down">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-semibold border border-amber-200 mb-4">
                <Sparkles size={16} />
                Saturday Recruitment Drive
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
                Senior Accounting Advisor — One-day hiring drive
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl font-medium">
                Saturday, 23 May 2026. We’re running a focused virtual drive to hire 5 Senior Accounting Advisors for our FinOps pods.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-amber-50 text-amber-800 text-sm font-semibold border border-amber-200">
                  <Calendar size={16} />
                  Sat, 23 May 2026
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold border border-indigo-100">
                  <Laptop2 size={16} />
                  100% virtual
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-100">
                  <Briefcase size={16} />
                  5 open positions
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold border border-slate-200">
                  <Globe2 size={16} />
                  UAE (Dubai) & Remote
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="mt-10 flex gap-4 flex-wrap items-center">
                <a href="#apply">
                  <Button
                    size="lg"
                    className="group h-14 px-8 text-base shadow-lg shadow-amber-500/20 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                  >
                    Reserve your slot
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </a>
                <a href="#role" className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-amber-700">
                  See the role details
                  <ArrowRight size={18} />
                </a>
              </div>
              <p className="text-sm text-slate-500 mt-3">Apply before Friday so we can confirm your virtual slot for Saturday.</p>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection animation="fade-left" delay={150}>
              <Card className="bg-white shadow-2xl border-0 p-6 sm:p-8">
                <div className="flex items-start gap-3 pb-6 border-b border-slate-200">
                  <ShieldCheck className="text-amber-600 flex-shrink-0" size={24} />
                  <div>
                    <div className="text-sm font-bold text-amber-700 uppercase tracking-wide">Drive details</div>
                    <p className="text-slate-700 font-semibold">One Saturday. 5 open positions. Confirmed virtual conversations with hiring managers.</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-6">
                  {DRIVE_HIGHLIGHTS.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} className={`p-4 rounded-xl bg-gradient-to-br ${item.accent} border`}>
                        <div className={`text-xs font-semibold uppercase mb-2 ${item.chipText}`}>{item.label}</div>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className={item.iconBg} size={18} />
                          <div className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight">{item.value}</div>
                        </div>
                        <div className="text-slate-600 text-sm">{item.note}</div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 sm:px-8 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">How the drive runs</h2>
            <p className="text-lg text-slate-600 max-w-3xl">Apply this week, get confirmed for Saturday, meet the hiring managers, and walk away with a clear next step.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {PROCESS_STEPS.map((step, idx) => (
              <AnimatedSection key={step.title} animation="fade-up" delay={idx * 80}>
                <Card className="h-full p-6 bg-white border-2 border-slate-100 hover:border-amber-200 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-extrabold">
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
              <Clock size={16} />
              Apply before Friday—slots are limited and confirmed in order received.
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Role details */}
      <section id="role" className="px-6 sm:px-8 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="text-amber-600" size={18} />
              <span className="text-sm font-bold text-amber-700 uppercase tracking-wide">FinOps • UAE (Dubai) & Remote</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Senior Accounting Advisor</h2>
            <p className="text-lg text-slate-600 max-w-3xl">
              You’ll play a crucial role in keeping our clients’ books accurate and decision-ready. You bring deep accounting expertise and a calm, client-friendly approach to every close.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-6 mt-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="h-full">
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Target className="text-amber-600 flex-shrink-0" size={22} />
                    Responsibilities
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {RESPONSIBILITIES.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="h-full">
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Award className="text-amber-600 flex-shrink-0" size={22} />
                    Requirements
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {REQUIREMENTS.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Apply form */}
      <section id="apply" className="px-6 sm:px-8 lg:px-12 pb-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-2 mb-3">
              <Users className="text-amber-600" size={18} />
              <span className="text-sm font-bold text-amber-700 uppercase tracking-wide">Application form</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Reserve your slot for Saturday, 23 May 2026</h2>
            <p className="text-lg text-slate-600 mb-8">
              Drop your details below. We’ll confirm your virtual slot over email before Saturday.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="shadow-xl bg-white overflow-hidden">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4 sm:p-6 text-white">
                <Briefcase className="mb-2" size={24} />
                <h3 className="text-xl sm:text-2xl font-bold mb-1">Apply for Senior Accounting Advisor</h3>
                <p className="text-amber-50 text-xs sm:text-sm">One quick form — we’ll line up your Saturday slot.</p>
              </div>
              <div className="p-4 sm:p-6">
                <div id={FORM_CONTAINER_ID} className="w-full" />
                <p className="text-xs text-slate-500 mt-3">
                  Having trouble with the form? Email careers@finanshels.com with your CV and we’ll reach out.
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
