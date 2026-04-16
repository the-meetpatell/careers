import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Briefcase, Users, Calendar, Target, CheckCircle, TrendingUp, PhoneCall } from 'lucide-react'
import AnimatedSection from '../../components/AnimatedSection'
import { Card } from '../../components/ui/Card'

export default function OutboundSalesIndia() {
  useEffect(() => {
    const containerId = 'zf_div_IDaJzBwWkZz6lqq56UKsSNreqeVH9o5IND2G1EsAErc'
    const container = document.getElementById(containerId)

    if (!container || container.querySelector('iframe')) return

    try {
      const iframe = document.createElement('iframe')
      let ifrmSrc = 'https://forms.zohopublic.com/finanshelsllc/form/OutboundSalesSpecialist/formperma/IDaJzBwWkZz6lqq56UKsSNreqeVH9o5IND2G1EsAErc?zf_rszfm=1'

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
      iframe.style.height = '1278px'
      iframe.style.width = '90%'
      iframe.style.transition = 'all 0.5s ease'
      iframe.setAttribute('aria-label', 'Outbound Sales Specialist')

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
              const zf_tout = zf_ifrm_data.length === 3
              if (prevIframeHeight !== zf_ifrm_ht_nw) {
                if (zf_tout) {
                  setTimeout(() => { iframeEl.style.height = zf_ifrm_ht_nw }, 500)
                } else {
                  iframeEl.style.height = zf_ifrm_ht_nw
                }
              }
            }
          }
        }
      }

      window.addEventListener('message', messageHandler, false)
      return () => { window.removeEventListener('message', messageHandler) }
    } catch (e) {}
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pt-20">
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-up">
                <Link to="/virtual-drive" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold mb-6 sm:mb-8 group text-sm sm:text-base">
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Career Opportunities
                </Link>

                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                    📈 Revenue • India
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Outbound Sales – India / Business Development
                  </h1>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-600 font-medium text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-amber-600 flex-shrink-0" />
                      India (Remote, virtual interview process)
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-amber-600 flex-shrink-0" />
                      Full-Time
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-amber-600 flex-shrink-0" />
                      Hiring top talent
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="mb-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <Calendar className="text-amber-600 flex-shrink-0" size={24} />
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Interview process</h3>
                    </div>
                    <div className="space-y-2 text-slate-700 font-medium text-sm sm:text-base">
                      <p><strong>Apply:</strong> Rolling applications; we prioritise top profiles weekly.</p>
                      <p><strong>Screening & HR:</strong> Quick expectation alignment with our people team (virtual).</p>
                      <p><strong>Skills interview:</strong> Role-specific working session with the hiring manager.</p>
                      <p><strong>Final Round:</strong> Leadership conversation + offer.</p>
                      <p className="text-amber-600 font-bold mt-3 sm:mt-4">We move fast—top profiles are scheduled immediately.</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">About the Role</h2>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
                      We're expanding into India and looking for a sharp, driven Outbound Sales / Business Development professional to own the India pipeline. You'll prospect, qualify, and close SMB customers, building Finanshels' presence in one of the world's fastest-growing fintech markets.
                    </p>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      This is a ground-floor opportunity for high-impact individuals who want to own a market, not just work a territory. You'll report directly to leadership and have the autonomy to shape the India go-to-market.
                    </p>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <Target className="text-amber-600 flex-shrink-0" size={24} />
                      Key Responsibilities
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Own the end-to-end outbound sales cycle: prospecting, qualification, demos, proposals, and closings.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Build and manage a pipeline of SMB prospects across key sectors in India.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Execute cold outreach via LinkedIn, email, and calls — with a high conversion rate focus.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Identify and develop local partnership and referral channels to accelerate pipeline.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Maintain accurate CRM records and provide regular pipeline forecasts to leadership.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Provide market feedback to shape product positioning and India-specific GTM messaging.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <TrendingUp className="text-amber-600 flex-shrink-0" size={24} />
                      Required Qualifications
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">2–5 years in outbound B2B sales or business development — SaaS, fintech, or accounting software preferred.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Strong cold outreach skills — you know how to write compelling sequences and book meetings.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Comfortable selling remotely and managing a pipeline in a CRM (HubSpot, Salesforce, or similar).</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Self-motivated and able to thrive in a fast-paced, low-overhead environment.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Excellent verbal and written communication in English; Hindi proficiency a strong plus.</span>
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
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Competitive base salary + uncapped commission on closed revenue.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Remote-first role — work from anywhere in India.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Ground-floor opportunity to own and shape the India GTM strategy.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Direct exposure to leadership and clear path into a country/regional leadership role.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection>
                <div className="lg:sticky lg:top-24">
                  <Card className="shadow-xl bg-white overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 sm:p-6 text-white">
                      <PhoneCall className="mb-2" size={24} />
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">Apply Now</h3>
                      <p className="text-amber-50 text-xs sm:text-sm">Outbound Sales – India / Business Development</p>
                    </div>
                    <div className="p-4 sm:p-6 space-y-3">
                      <p className="text-sm text-slate-600">Submit your application to get scheduled quickly for virtual rounds.</p>
                      <div id="zf_div_IDaJzBwWkZz6lqq56UKsSNreqeVH9o5IND2G1EsAErc" className="w-full" />
                      <p className="text-xs text-slate-500 text-center">or email talents@finanshels.com</p>
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
