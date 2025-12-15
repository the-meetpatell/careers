import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, CheckCircle, Laptop2, MapPin, Users, Briefcase, ClipboardList, Target } from 'lucide-react'
import AnimatedSection from '../../components/AnimatedSection'
import { Card } from '../../components/ui/Card'

export default function SeniorAccountingAssociate() {
  useEffect(() => {
    const containerId = 'zf_div_eJHiYL5szMR2i0ahFh4Awh3AeLaAlbtX3PiC2UjpGWU'
    const container = document.getElementById(containerId)
    if (!container || container.querySelector('iframe')) return

    const iframe = document.createElement('iframe')
    let ifrmSrc = 'https://forms.zohopublic.com/finanshelsllc/form/AccountingRoles/formperma/eJHiYL5szMR2i0ahFh4Awh3AeLaAlbtX3PiC2UjpGWU?zf_rszfm=1'

    iframe.src = ifrmSrc
    iframe.style.border = 'none'
    iframe.style.height = '980px'
    iframe.style.width = '99%'
    iframe.style.transition = 'all 0.5s ease'
    iframe.setAttribute('aria-label', 'Accounting Roles')

    container.appendChild(iframe)

    const handleMessage = (event) => {
      const evntData = event.data
      if (evntData && evntData.constructor === String) {
        const zf_ifrm_data = evntData.split('|')
        if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
          const zf_perma = zf_ifrm_data[0]
          const zf_ifrm_ht_nw = `${parseInt(zf_ifrm_data[1], 10) + 15}px`
          const frame = document.getElementById(containerId)?.getElementsByTagName('iframe')[0]
          if (frame && frame.src.indexOf('formperma') > 0 && frame.src.indexOf(zf_perma) > 0) {
            const prevIframeHeight = frame.style.height
            const zf_tout = zf_ifrm_data.length === 3
            if (prevIframeHeight !== zf_ifrm_ht_nw) {
              if (zf_tout) {
                setTimeout(() => {
                  frame.style.height = zf_ifrm_ht_nw
                }, 500)
              } else {
                frame.style.height = zf_ifrm_ht_nw
              }
            }
          }
        }
      }
    }

    window.addEventListener('message', handleMessage, false)
    return () => window.removeEventListener('message', handleMessage, false)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pt-20">
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-up">
                <Link to="/virtual-drive" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold mb-6 sm:mb-8 group text-sm sm:text-base">
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Endgame Hiring 2025
                </Link>

                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                    📊 FinOps
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Senior Accounting Associate
                  </h1>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-600 font-medium text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-purple-600 flex-shrink-0" />
                      Remote
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-purple-600 flex-shrink-0" />
                      Full-Time
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-purple-600 flex-shrink-0" />
                      FinOps delivery
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="mb-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <Calendar className="text-purple-600 flex-shrink-0" size={24} />
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Virtual interview process</h3>
                    </div>
                    <div className="space-y-2 text-slate-700 font-medium text-sm sm:text-base">
                      <p><strong>Step 1:</strong> Screening + pod-fit conversation (virtual).</p>
                      <p><strong>Step 2:</strong> Technical round with FinOps leads (virtual).</p>
                      <p><strong>Final Round:</strong> Leadership discussion before offer.</p>
                      <p className="text-purple-700 font-bold mt-3 sm:mt-4">All interviews are scheduled—no walk-ins.</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">About the Role</h2>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
                      Handle complex reconciliations, prepare reporting packs, and keep month-end closes tight. You’ll partner with team leads and controllers to maintain quality.
                    </p>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
                      You are hands-on, detail-obsessed, and comfortable working across multiple clients in fast-moving pods.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Note: For remote roles, we use FocusRO for work monitoring as a standard term.</p>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <ClipboardList className="text-purple-600 flex-shrink-0" size={24} />
                      Key Responsibilities
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Execute reconciliations across bank, AP/AR, payroll, and intercompany.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Prepare monthly reporting packs and support management dashboards.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Partner with controllers and AMs on clean closes and audit readiness.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Suggest process improvements to speed up accuracy and turnaround.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Required Qualifications</h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">3–5 years in accounting/finops with strong reconciliation and close experience.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Solid understanding of IFRS/GAAP basics and reporting best practices.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Comfort working across multiple clients and deadlines remotely.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Strong spreadsheet and accounting system skills.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={450}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <Target className="text-purple-600 flex-shrink-0" size={22} />
                      Preferred Skills
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Experience with startup/VC-backed clients; MENA exposure helpful.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Hands-on with Xero, QuickBooks, Zoho Books, or Netsuite.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Comfort collaborating with controllers and AMs on escalations.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-1">
              <AnimatedSection>
                <div className="lg:sticky lg:top-24">
                  <Card className="shadow-xl bg-white overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 sm:p-6 text-white">
                      <Laptop2 className="mb-2" size={24} />
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">Apply Now</h3>
                      <p className="text-purple-50 text-xs sm:text-sm">Senior Accounting Associate</p>
                    </div>
                    <div className="p-4 sm:p-6 space-y-3">
                      <p className="text-sm text-slate-600">Submit your application to get scheduled for the 13th GD and weekend technical rounds.</p>
                      <div
                        id="zf_div_eJHiYL5szMR2i0ahFh4Awh3AeLaAlbtX3PiC2UjpGWU"
                        className="w-full"
                      />
                    </div>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
