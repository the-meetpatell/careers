import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Briefcase, Users, Calendar, Target, CheckCircle, UserPlus, Search } from 'lucide-react'
import AnimatedSection from '../../components/AnimatedSection'
import { Card } from '../../components/ui/Card'

export default function SeniorTalentAcquisition() {
  useEffect(() => {
    const containerId = 'zf_div_wZkv_SVIPnsI8bOv-4UraZFj509lzc8cCMwWcXUqfUI'
    const container = document.getElementById(containerId)

    if (!container || container.querySelector('iframe')) return

    try {
      const iframe = document.createElement('iframe')
      let ifrmSrc = 'https://forms.zohopublic.com/finanshelsllc/form/SrTalentAcquisitionSpecialist/formperma/wZkv_SVIPnsI8bOv-4UraZFj509lzc8cCMwWcXUqfUI?zf_rszfm=1'

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
      iframe.setAttribute('aria-label', 'Sr Talent Acquisition Specialist')

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
                <Link to="/new-hiring" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold mb-6 sm:mb-8 group text-sm sm:text-base">
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Career Opportunities
                </Link>

                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                    👥 HR & Talent Acquisition
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Senior Talent Acquisition Specialist
                  </h1>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-600 font-medium text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-indigo-600 flex-shrink-0" />
                      Remote / Hybrid (virtual interview process)
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-indigo-600 flex-shrink-0" />
                      Full-Time
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-indigo-600 flex-shrink-0" />
                      Hiring top talent
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="mb-6 bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200">
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <Calendar className="text-indigo-600 flex-shrink-0" size={24} />
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Interview process</h3>
                    </div>
                    <div className="space-y-2 text-slate-700 font-medium text-sm sm:text-base">
                      <p><strong>Apply:</strong> Rolling applications; we prioritise top profiles weekly.</p>
                      <p><strong>Screening & HR:</strong> Quick expectation alignment with our people team (virtual).</p>
                      <p><strong>Skills interview:</strong> Practical hiring scenario and sourcing strategy discussion.</p>
                      <p><strong>Final Round:</strong> Leadership conversation + offer.</p>
                      <p className="text-indigo-600 font-bold mt-3 sm:mt-4">We move fast—top profiles are scheduled immediately.</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">About the Role</h2>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
                      Finanshels is scaling fast and we need a Senior Talent Acquisition Specialist who can own the full hiring lifecycle — from sourcing and screening to offer acceptance. You'll partner closely with hiring managers across engineering, sales, finance, and operations to attract and close top-tier talent.
                    </p>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      This role is ideal for a resourceful recruiter with a builder's mentality — someone who can create scalable processes, maintain an exceptional candidate experience, and consistently deliver quality hires in a fast-moving startup environment.
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
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Own the full-cycle recruitment process across all functions — from job briefing to signed offer.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Source exceptional candidates through LinkedIn, referrals, job boards, and creative channels.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Partner with hiring managers to define role requirements, ideal profiles, and interview frameworks.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Maintain an excellent candidate experience — timely communication, structured interviews, clear feedback.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Build and maintain a strong talent pipeline for current and future hiring needs.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Track hiring metrics (time-to-fill, offer acceptance rates, source quality) and report to leadership.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Support employer branding initiatives to position Finanshels as a destination for top talent.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <Search className="text-indigo-600 flex-shrink-0" size={24} />
                      Required Qualifications
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">4+ years of talent acquisition experience, ideally in a startup, fintech, or technology company.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Proven track record closing senior and specialised hires across multiple functions.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Strong sourcing skills — expert use of LinkedIn Recruiter, Boolean search, and referral networks.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Experience managing an ATS and running structured interview processes.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Excellent interpersonal skills — you can build trust with candidates and stakeholders alike.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">High ownership mindset — you treat open roles like revenue targets and close them with the same urgency.</span>
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
                        <span className="text-sm sm:text-base text-slate-700">Competitive salary with performance bonuses tied to hiring outcomes.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">High-impact role — you'll directly shape the team that builds Finanshels' future.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Remote-first culture with flexibility and strong async collaboration.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Clear path to Head of People / HR Leadership as the company scales.</span>
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
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 sm:p-6 text-white">
                      <UserPlus className="mb-2" size={24} />
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">Apply Now</h3>
                      <p className="text-indigo-50 text-xs sm:text-sm">Senior Talent Acquisition Executive</p>
                    </div>
                    <div className="p-4 sm:p-6 space-y-3">
                      <p className="text-sm text-slate-600">Submit your application to get scheduled quickly for virtual rounds.</p>
                      <div id="zf_div_wZkv_SVIPnsI8bOv-4UraZFj509lzc8cCMwWcXUqfUI" className="w-full" />
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
