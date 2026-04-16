import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Briefcase, Users, Calendar, Target, CheckCircle, TrendingUp, Link2 } from 'lucide-react'
import AnimatedSection from '../../components/AnimatedSection'
import { Card } from '../../components/ui/Card'

export default function VasRevenueVendorPartnershipsExecutive() {
  useEffect(() => {
    const containerId = 'zf_div_GV7syY0p9azUUvYRwy3nty_3QquoUdVPJO85Z1v59NI'
    const container = document.getElementById(containerId)

    if (!container || container.querySelector('iframe')) return

    try {
      const iframe = document.createElement('iframe')
      let ifrmSrc = 'https://forms.zohopublic.com/finanshelsllc/form/VASRevenueVendorPartnershipExecutive/formperma/GV7syY0p9azUUvYRwy3nty_3QquoUdVPJO85Z1v59NI?zf_rszfm=1'

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
      iframe.style.height = '1240px'
      iframe.style.width = '90%'
      iframe.style.transition = 'all 0.5s ease'
      iframe.setAttribute('aria-label', 'Apply Now')

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
                <Link to="/virtual-drive" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-6 sm:mb-8 group text-sm sm:text-base">
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Career Opportunities
                </Link>

                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                    🤝 Revenue & Partnerships
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    VAS Revenue & Vendor Partnerships Executive
                  </h1>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-600 font-medium text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-blue-600 flex-shrink-0" />
                      Dubai, UAE (virtual interview process)
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-blue-600 flex-shrink-0" />
                      Full-Time
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-blue-600 flex-shrink-0" />
                      Hiring top talent
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="mb-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <Calendar className="text-blue-600 flex-shrink-0" size={24} />
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Interview process</h3>
                    </div>
                    <div className="space-y-2 text-slate-700 font-medium text-sm sm:text-base">
                      <p><strong>Apply:</strong> Rolling applications; we prioritise top profiles weekly.</p>
                      <p><strong>Screening & HR:</strong> Quick expectation alignment with our people team (virtual).</p>
                      <p><strong>Skills interview:</strong> Role-specific working session with the hiring manager.</p>
                      <p><strong>Final Round:</strong> Leadership conversation + offer.</p>
                      <p className="text-blue-600 font-bold mt-3 sm:mt-4">We move fast—top profiles are scheduled immediately.</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">About the Role</h2>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
                      We're looking for a driven VAS Revenue & Vendor Partnerships Executive to spearhead our value-added services revenue stream in the UAE market. You'll own vendor relationships, negotiate commercials, and create bundles that delight our SMB customers while growing top-line revenue.
                    </p>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      This role sits at the intersection of sales, partnerships, and product — ideal for someone who thrives building new revenue channels from scratch and can manage complex vendor ecosystems with ease.
                    </p>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <Target className="text-blue-600 flex-shrink-0" size={24} />
                      Key Responsibilities
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Identify, onboard, and manage value-added service vendors across insurance, compliance, payroll, and fintech adjacencies.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Negotiate commercial agreements and revenue-share structures with vendors.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Drive attaching VAS products to existing and new Finanshels customers, owning the full sales cycle for bundled offerings.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Work cross-functionally with customer success and account management to identify upsell opportunities.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Track VAS revenue KPIs, vendor SLAs, and report regularly to leadership.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Coordinate with product and marketing to position VAS offerings effectively in the UAE market.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Represent Finanshels at industry events, meetups, and partner briefings across Dubai.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <TrendingUp className="text-blue-600 flex-shrink-0" size={24} />
                      Required Qualifications
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">3–6 years in partnerships, vendor management, or B2B sales — preferably in fintech, SaaS, or financial services in the UAE.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Proven track record owning revenue targets and exceeding them.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Strong network in the UAE business/startup ecosystem — freezones, accelerators, or SMB communities a plus.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Excellent negotiation, communication, and relationship-building skills.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Self-starter who can manage multiple vendor relationships and pipelines simultaneously.</span>
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
                        <span className="text-sm sm:text-base text-slate-700">Competitive base salary + performance-based commissions on VAS revenue.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">High-impact role with direct ownership of a new revenue vertical.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Work with a fast-moving, mission-driven fintech team in Dubai.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Career growth into a Head of Partnerships or Revenue leadership path.</span>
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
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 sm:p-6 text-white">
                      <Link2 className="mb-2" size={24} />
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">Apply Now</h3>
                      <p className="text-blue-50 text-xs sm:text-sm">VAS Revenue & Vendor Partnerships Executive</p>
                    </div>
                    <div className="p-4 sm:p-6 space-y-3">
                      <p className="text-sm text-slate-600">Submit your application to get scheduled quickly for virtual rounds.</p>
                      <div id="zf_div_GV7syY0p9azUUvYRwy3nty_3QquoUdVPJO85Z1v59NI" className="w-full" />
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
