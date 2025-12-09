import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, CheckCircle, Laptop2, MapPin, Users, Briefcase, ClipboardList, Target } from 'lucide-react'
import AnimatedSection from '../../components/AnimatedSection'
import { Card } from '../../components/ui/Card'

export default function FinOpsAccountManager() {
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
                <Link to="/finops-career-drive" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-6 sm:mb-8 group text-sm sm:text-base">
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  Back to FinOps Career Drive
                </Link>

                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                    📊 FinOps
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Account Manager - FinOps
                  </h1>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-600 font-medium text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-emerald-600 flex-shrink-0" />
                      UAE (Dubai) / Remote
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-emerald-600 flex-shrink-0" />
                      Full-Time
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-emerald-600 flex-shrink-0" />
                      Client pod owner
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="mb-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <Calendar className="text-emerald-600 flex-shrink-0" size={24} />
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">FinOps Career Drive Schedule</h3>
                    </div>
                    <div className="space-y-2 text-slate-700 font-medium text-sm sm:text-base">
                      <p><strong>Saturday, 13th:</strong> 1-hour group discussion (virtual) — 12:00 PM (Dubai) / 1:30 PM (IST)</p>
                      <p><strong>Saturday 13th & Sunday:</strong> Technical round (virtual) for shortlisted candidates right after the GD and on Sunday.</p>
                      <p><strong>Final Round:</strong> Early next week with leadership</p>
                      <p className="text-emerald-700 font-bold mt-3 sm:mt-4">Submit now to get scheduled for the 13th GD and weekend technical rounds.</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">About the Role</h2>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
                      Lead client pods across deliverables, SLAs, and stakeholder communication. You’ll be the point for founders/finance leaders while partnering with controllers on quality.
                    </p>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
                      You balance relationship management with operational rigor, ensuring timely closes, clean books, and proactive insight-sharing.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Note: For remote roles, we use FocusRO for work monitoring as a standard term.</p>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <ClipboardList className="text-emerald-600 flex-shrink-0" size={24} />
                      Key Responsibilities
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Own client communication, cadence, and SLA adherence across pods.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Coordinate controllers and team leads to deliver accurate closes and reporting.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Track risks, escalations, and process gaps; drive fixes before they impact clients.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Share insights and monthly reviews with founders/finance leaders.</span>
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
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">5+ years in accounting/finops/client delivery; strong client-facing chops.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Proven ownership of 15+ team members or $50k+ monthly revenue across pods.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Experience coordinating multi-stakeholder pods (controllers, TLs, associates).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Comfort presenting to founders/CFOs with crisp, data-backed updates.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Strong command of reconciliations, closes, and reporting fundamentals.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={450}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <Target className="text-emerald-600 flex-shrink-0" size={22} />
                      Preferred Skills
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Worked with SaaS/fintech/startup clients; MENA experience a plus.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Hands-on with tools like Xero, QuickBooks, Zoho Books, or Netsuite.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Process-orientation with an eye for automation and playbooks.</span>
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
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 sm:p-6 text-white">
                      <Laptop2 className="mb-2" size={24} />
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">Apply Now</h3>
                      <p className="text-emerald-50 text-xs sm:text-sm">Account Manager - FinOps</p>
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
