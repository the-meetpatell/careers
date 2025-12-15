import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Briefcase, Users, Calendar, Megaphone, CheckCircle, PenTool, BookOpen } from 'lucide-react'
import { Card } from '../../components/ui/Card'
import AnimatedSection from '../../components/AnimatedSection'

export default function ContentPRManager() {
  useEffect(() => {
    const containerId = 'zf_div_content_pr_manager'
    const container = document.getElementById(containerId)

    if (!container || container.querySelector('iframe')) return

    try {
      const iframe = document.createElement('iframe')
      let ifrmSrc =
        'https://forms.zohopublic.com/finanshelsllc/form/ContentWriterArabic/formperma/7BdPkF909rcxwWcOL3FW7OGfeVRYsBPEAySZyM7Mn7Y?zf_rszfm=1'

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
      iframe.setAttribute('aria-label', 'Content & PR Manager (Arabic)')

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
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pt-20">
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-up">
                <Link to="/virtual-drive" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold mb-6 sm:mb-8 group text-sm sm:text-base">
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Endgame Hiring 2025
                </Link>

                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-indigo-500 to-amber-500 text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                    📣 Marketing
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Content & PR Manager — Arabic
                  </h1>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-600 font-medium text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-indigo-600 flex-shrink-0" />
                      Dubai, UAE (virtual interview process)
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-indigo-600 flex-shrink-0" />
                      Full-Time
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-indigo-600 flex-shrink-0" />
                      Marketing & Brand
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="mb-6 bg-gradient-to-br from-indigo-50 to-amber-50 border-2 border-indigo-200">
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
                      <p className="text-indigo-600 font-bold mt-3 sm:mt-4">Only candidates who apply before Friday, 19th Dec 2025 will be scheduled.</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">About the Role</h2>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
                      Lead Arabic storytelling that blends content, PR, and founder narratives. You’ll shape Finanshels’ voice across media, social, and owned channels—keeping every asset sharp, credible, and conversion-focused.
                    </p>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      Arabic is non-negotiable: we need bilingual communicators who balance newsroom pace with brand consistency and turn complex financial topics into headlines founders care about.
                    </p>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <Megaphone className="text-indigo-600 flex-shrink-0" size={24} />
                      Key Responsibilities
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Own Arabic messaging across press releases, bylines, and founder stories.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Plan and publish content calendars for campaigns, launches, and ecosystem moments.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Partner with design, growth, and leadership to align narratives across channels.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Build journalist and KOL relationships; secure coverage that moves pipeline.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <PenTool className="text-indigo-600 flex-shrink-0" size={24} />
                      Required Qualifications
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Native/near-native Arabic with strong English writing and editing skills.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">4+ years in content, PR, or communications for tech/finance brands.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Portfolio of Arabic press releases, thought leadership, and campaign assets.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Comfort working with spokespeople and turning complex topics into simple angles.</span>
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
                        <span className="text-sm sm:text-base text-slate-700">Competitive compensation, incentives, and access to leadership.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Rapid-friendly culture with rapid feedback loops.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Health Insurancy and Visa Sponsorship.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Learning budget and opportunities to represent Finanshels externally.</span>
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
                    <div className="bg-gradient-to-r from-indigo-500 to-amber-500 p-4 sm:p-6 text-white">
                      <BookOpen className="mb-2" size={24} />
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">Apply Now</h3>
                      <p className="text-indigo-50 text-xs sm:text-sm">Join our Marketing & Brand team</p>
                    </div>
                    <div className="p-4 sm:p-6 space-y-3">
                      <p className="text-sm text-slate-600">Submit your application before Friday, 19th Dec 2025 to get scheduled for the virtual rounds.</p>
                      <div id="zf_div_content_pr_manager" className="w-full" />
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
