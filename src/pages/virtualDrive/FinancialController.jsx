import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, CheckCircle, Laptop2, MapPin, Users, Briefcase, ClipboardCheck, Target } from 'lucide-react'
import AnimatedSection from '../../components/AnimatedSection'
import { Card } from '../../components/ui/Card'

export default function FinancialController() {
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
                <Link to="/finops-career-drive" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold mb-6 sm:mb-8 group text-sm sm:text-base">
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  Back to FinOps Career Drive
                </Link>

                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                    📊 FinOps
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Financial Controller
                  </h1>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-600 font-medium text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-indigo-600 flex-shrink-0" />
                      UAE (Dubai) / Remote
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-indigo-600 flex-shrink-0" />
                      Full-Time
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-indigo-600 flex-shrink-0" />
                      Pod leadership
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="mb-6 bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200">
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <Calendar className="text-indigo-600 flex-shrink-0" size={24} />
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">FinOps Career Drive Schedule</h3>
                    </div>
                    <div className="space-y-2 text-slate-700 font-medium text-sm sm:text-base">
                      <p><strong>Friday, 12th:</strong> 1-hour group discussion (virtual)</p>
                      <p><strong>Saturday, 13th:</strong> Technical round (virtual)</p>
                      <p><strong>Final Round:</strong> Early next week with leadership</p>
                      <p className="text-indigo-700 font-bold mt-3 sm:mt-4">Submit now to get scheduled for the 12th & 13th sessions.</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">About the Role</h2>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
                      Own controllership for a pod of startup clients. You will review deliverables, manage escalations, and ensure every output meets our quality bar.
                    </p>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
                      You will partner with account managers, team leads, and associates to keep books clean, closes on time, and leadership informed.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Note: For remote roles, we use FocusRO for work monitoring as a standard term.</p>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <ClipboardCheck className="text-indigo-600 flex-shrink-0" size={24} />
                      Key Responsibilities
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Review monthly closes, reconciliations, and reporting packs for accuracy.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Partner with account managers on client escalations and process improvements.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Guide team leads and associates on accounting policies and best practices.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Maintain compliance across VAT, payroll, and statutory filings as required.</span>
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
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">7+ years in accounting/controllership; experience with multi-entity books.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Proven ownership of pods with 15+ team members or $50k+ monthly revenue.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Strong grasp of IFRS/GAAP, reconciliations, and month-end controls.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Comfort managing pods and coaching teams in remote setups.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Experienced in cash flow management, budgeting, and forecasting.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Excellent stakeholder communication with founders and finance leaders.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={450}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <Target className="text-indigo-600 flex-shrink-0" size={22} />
                      Preferred Skills
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Startup/VC-backed client experience across MENA.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Hands-on with tools like Xero, QuickBooks, Zoho Books, Netsuite.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Exposure to VAT, payroll, and compliance in UAE/KSA/India.</span>
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
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 sm:p-6 text-white">
                      <Laptop2 className="mb-2" size={24} />
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">Apply Now</h3>
                      <p className="text-indigo-50 text-xs sm:text-sm">Financial Controller</p>
                    </div>
                    <div className="p-4 sm:p-6 space-y-3">
                      <p className="text-sm text-slate-600">Submit your application to get scheduled for the 12th & 13th virtual rounds.</p>
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
