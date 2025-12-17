import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Briefcase, Users, Target, CheckCircle, Award, ArrowLeft, ShieldCheck } from 'lucide-react'
import AnimatedSection from '../../components/AnimatedSection'
import { Card } from '../../components/ui/Card'

export default function FinOpsRoleTemplate({
  badgeText = 'FinOps',
  title,
  location = 'Remote / Dubai',
  team = 'FinOps',
  level = 'Full-time',
  summary,
  about,
  responsibilities = [],
  requirements = [],
  offer = [],
}) {
  useEffect(() => {
    const containerId = 'zf_div_eJHiYL5szMR2i0ahFh4Awh3AeLaAlbtX3PiC2UjpGWU'
    const container = document.getElementById(containerId)

    if (container && container.children.length === 0) {
      try {
        const iframe = document.createElement('iframe')
        let ifrmSrc = 'https://forms.zohopublic.com/finanshelsllc/form/AccountingRoles/formperma/eJHiYL5szMR2i0ahFh4Awh3AeLaAlbtX3PiC2UjpGWU?zf_rszfm=1'

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
        iframe.style.height = '1260px'
        iframe.style.width = '100%'
        iframe.style.transition = 'all 0.5s ease'
        iframe.style.overflow = 'hidden'
        iframe.style.display = 'block'
        iframe.setAttribute('aria-label', 'Accounting Roles')

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
                <Link to="/finops-drive" className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-800 font-semibold mb-8 group text-sm sm:text-base">
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  Back to FinOps Hiring Hub
                </Link>

                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-sm font-bold mb-4">
                    {badgeText}
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    {title}
                  </h1>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-600 font-medium text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-sky-600 flex-shrink-0" />
                      {location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-sky-600 flex-shrink-0" />
                      {level}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-sky-600 flex-shrink-0" />
                      {team}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">About the Role</h2>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">{summary}</p>
                    {about && <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{about}</p>}
                  </div>
                </Card>
              </AnimatedSection>

              {responsibilities.length > 0 && (
                <AnimatedSection animation="fade-up" delay={200}>
                  <Card className="mb-6">
                    <div className="p-4 sm:p-6 md:p-8">
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                        <Target className="text-sky-600 flex-shrink-0" size={24} />
                        Key Responsibilities
                      </h2>
                      <ul className="space-y-3 sm:space-y-4">
                        {responsibilities.map((item) => (
                          <li key={item} className="flex items-start gap-2 sm:gap-3">
                            <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                            <span className="text-sm sm:text-base text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </AnimatedSection>
              )}

              {requirements.length > 0 && (
                <AnimatedSection animation="fade-up" delay={300}>
                  <Card className="mb-6">
                    <div className="p-4 sm:p-6 md:p-8">
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                        <Award className="text-sky-600 flex-shrink-0" size={24} />
                        What You’ll Need
                      </h2>
                      <ul className="space-y-3 sm:space-y-4">
                        {requirements.map((item) => (
                          <li key={item} className="flex items-start gap-2 sm:gap-3">
                            <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                            <span className="text-sm sm:text-base text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </AnimatedSection>
              )}

              {offer.length > 0 && (
                <AnimatedSection animation="fade-up" delay={400}>
                  <Card className="mb-6 sm:mb-8">
                    <div className="p-4 sm:p-6 md:p-8">
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                        <ShieldCheck className="text-emerald-600 flex-shrink-0" size={24} />
                        What We Offer
                      </h2>
                      <ul className="space-y-3 sm:space-y-4">
                        {offer.map((item) => (
                          <li key={item} className="flex items-start gap-2 sm:gap-3">
                            <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                            <span className="text-sm sm:text-base text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </AnimatedSection>
              )}
            </div>

            <div className="lg:col-span-1">
              <AnimatedSection>
                <div className="sticky top-24">
                  <Card className="shadow-xl bg-white overflow-hidden">
                    <div className="bg-gradient-to-r from-sky-600 to-indigo-600 p-4 sm:p-6 text-white">
                      <Users className="mb-2" size={24} />
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">Apply once for FinOps</h3>
                      <p className="text-sky-50 text-xs sm:text-sm">One form for controllers, AMs, pod leads, and associates.</p>
                    </div>

                    <div className="p-4 sm:p-6">
                      <div id="zf_div_eJHiYL5szMR2i0ahFh4Awh3AeLaAlbtX3PiC2UjpGWU" className="w-full" />
                      <p className="text-xs text-slate-500 mt-3">Apply once—we’ll slot you into the best-fitting pod and level.</p>
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
