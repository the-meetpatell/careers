import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Briefcase, Users, Calendar, Target, CheckCircle, BarChart3 } from 'lucide-react'
import AnimatedSection from '../../components/AnimatedSection'
import { Card } from '../../components/ui/Card'

export default function SDRManager() {
  useEffect(() => {
    const containerId = 'zf_div__lO4Ei3j2A-VkAsd1naY27hH-3cAV0JTU7XnzPWnmzk'
    const container = document.getElementById(containerId)

    if (container && container.children.length === 0) {
      try {
        const iframe = document.createElement('iframe')
        let ifrmSrc = 'https://forms.zohopublic.com/finanshelsllc/form/SDRManager/formperma/_lO4Ei3j2A-VkAsd1naY27hH-3cAV0JTU7XnzPWnmzk?zf_rszfm=1'

        try {
          if (typeof window.ZFAdvLead !== 'undefined' && typeof window.zfutm_zfAdvLead !== 'undefined') {
            for (let prmIdx = 0; prmIdx < window.ZFAdvLead.utmPNameArr.length; prmIdx++) {
              let utmPm = window.ZFAdvLead.utmPNameArr[prmIdx]
              utmPm = window.ZFAdvLead.isSameDomian && window.ZFAdvLead.utmcustPNameArr.indexOf(utmPm) === -1 ? 'zf_' + utmPm : utmPm
              const utmVal = window.zfutm_zfAdvLead.zfautm_gC_enc(window.ZFAdvLead.utmPNameArr[prmIdx])
              if (typeof utmVal !== 'undefined' && utmVal !== '') {
                ifrmSrc = ifrmSrc + (ifrmSrc.indexOf('?') > 0 ? '&' : '?') + utmPm + '=' + utmVal
              }
            }
          }
          if (typeof window.ZFLead !== 'undefined' && typeof window.zfutm_zfLead !== 'undefined') {
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
        iframe.style.height = '1175px'
        iframe.style.width = '100%'
        iframe.style.transition = 'all 0.5s ease'
        iframe.style.overflow = 'hidden'
        iframe.style.display = 'block'
        iframe.setAttribute('aria-label', 'SDR Manager')

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

        return () => {
          window.removeEventListener('message', messageHandler)
        }
      } catch (e) {}
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pt-20">
      <div className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-up">
                <Link to="/virtual-drive" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold mb-8 group">
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Endgame Hiring 2025
                </Link>

                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-sm font-bold mb-4">
                    📞 Revenue
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    SDR Manager
                  </h1>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-600 font-medium text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-indigo-600 flex-shrink-0" />
                      Remote/Dubai (virtual interview process)
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-indigo-600 flex-shrink-0" />
                      Full-Time
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-indigo-600 flex-shrink-0" />
                      Revenue team
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="mb-6 bg-gradient-to-br from-indigo-50 to-sky-50 border-2 border-indigo-200">
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <Calendar className="text-indigo-600 flex-shrink-0" size={24} />
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Virtual Drive Schedule</h3>
                    </div>
                    <div className="space-y-2 text-slate-700 font-medium text-sm sm:text-base">
                      <p><strong>Apply by:</strong> Friday, 19th Dec 2025 (applications only)</p>
                      <p><strong>Screening & HR:</strong> Saturday, 20th Dec 2025 (virtual)</p>
                      <p><strong>Technical:</strong> Sunday, 21st Dec 2025 (virtual)</p>
                      <p><strong>Final Round:</strong> Early next week with leadership</p>
                      <p className="text-indigo-700 font-bold mt-3 sm:mt-4">Only candidates who apply before Friday, 19th Dec 2025 will be scheduled.</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">About the Role</h2>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
                      Build and lead our SDR function to create predictable outbound pipeline. You’ll set the playbook, coach a pod of SDRs, and partner closely with sales leadership on performance, hiring, and tooling.
                    </p>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      Ideal for a player-coach who thrives on data-driven execution, crisp messaging, and developing reps into top performers.
                    </p>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <Target className="text-indigo-600 flex-shrink-0" size={24} />
                      Key Responsibilities
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Own outbound strategy: ICP definition, messaging, cadences, and channel mix for SDR teams.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Hire, onboard, and coach SDRs; run daily standups, call reviews, and skill drills.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Monitor dashboards for activity, conversion, and pipeline coverage; adjust plays quickly.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Partner with marketing on lead routing, SLAs, and feedback on campaign quality.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Evaluate tools (sequencers, intent, data) and keep CRM hygiene airtight.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <BarChart3 className="text-indigo-600 flex-shrink-0" size={24} />
                      Required Qualifications
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">4+ years in outbound sales with 2+ years leading SDR/BDR teams.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Proven ability to build cadences, scripts, and objection handling that convert.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Strong CRM/sequence tooling knowledge (Zoho CRM, Outreach/HubSpot/Salesloft).</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Comfortable building dashboards and reading funnel data to coach performance.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Excellent written and verbal communication; experience with founder/exec outreach.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={500}>
                <Card className="mb-6 sm:mb-8">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">What We Offer</h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Competitive base with performance incentives tied to pipeline and bookings.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-slate-700">Health insurance and visa support where applicable.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Direct access to leadership to shape revenue strategy.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Tools budget and enablement support for your team.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-1">
              <AnimatedSection>
                <div className="sticky top-24">
                  <Card className="shadow-xl bg-white overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-600 to-sky-500 p-4 sm:p-6 text-white">
                      <Users className="mb-2" size={24} />
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">Apply Now</h3>
                      <p className="text-indigo-50 text-xs sm:text-sm">SDR Manager</p>
                    </div>

                    <div id="zf_div__lO4Ei3j2A-VkAsd1naY27hH-3cAV0JTU7XnzPWnmzk" className="w-full" />
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
