import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Briefcase, Calendar, CheckCircle, Laptop, MapPin, PenTool, Users, Sparkles } from 'lucide-react'
import AnimatedSection from '../../components/AnimatedSection'
import { Card } from '../../components/ui/Card'

export default function ContentWriterArabic() {
  useEffect(() => {
    const containerId = 'zf_div_ubY5LDz5Nic_aMgUNDCojQSfgyqLpTs-NC5PZXKwQjQ'
    const container = document.getElementById(containerId)
    if (!container || container.querySelector('iframe')) return

    const iframe = document.createElement('iframe')
    let ifrmSrc =
      'https://forms.zohopublic.com/finanshelsllc/form/ContentWriterArabic1/formperma/ubY5LDz5Nic_aMgUNDCojQSfgyqLpTs-NC5PZXKwQjQ?zf_rszfm=1'

    iframe.src = ifrmSrc
    iframe.style.border = 'none'
    iframe.style.height = '1175px'
    iframe.style.width = '99%'
    iframe.style.transition = 'all 0.5s ease'
    iframe.setAttribute('aria-label', 'Content Writer - Arabic')

    container.innerHTML = ''
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
                <Link to="/new-hiring" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold mb-6 sm:mb-8 group text-sm sm:text-base">
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Career Opportunities
                </Link>

                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                    ✍️ Marketing
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Content Writer (Arabic)
                  </h1>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-600 font-medium text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-amber-600 flex-shrink-0" />
                      Remote (virtual interview process)
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-amber-600 flex-shrink-0" />
                      Full-Time
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-amber-600 flex-shrink-0" />
                      Marketing Team
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="mb-6 bg-gradient-to-br from-amber-50 to-red-50 border-2 border-amber-200">
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
                      <p className="text-amber-700 font-bold mt-3 sm:mt-4">We move fast—top profiles are scheduled immediately.</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">About the Role</h2>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
                      Craft Arabic content that resonates with founders and partners across the region. You’ll localize messaging, write crisp narratives, and ensure every touchpoint feels native and trustworthy.
                    </p>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      Ideal for writers who think in Arabic first, can collaborate quickly with design/PR, and love translating complex fintech ideas into simple, confident stories.
                    </p>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <PenTool className="text-amber-600 flex-shrink-0" size={24} />
                      Key Responsibilities
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Write Arabic copy for web, product, lifecycle, and PR assets.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Localize English narratives to Arabic while preserving intent and clarity.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Collaborate with design and PR to ship on-brand experiences quickly.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Maintain voice/tone guidelines to keep every asset consistent.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Interview founders/customers to surface stories and quotes that build trust.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Ship fast drafts, iterate with editors, and hit weekly publishing cadences.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={350}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Required Qualifications</h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">2–4 years writing Arabic content for marketing/product/PR; portfolio of shipped work.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Native-level Arabic and strong English comprehension for accurate localization.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Ability to simplify complex/technical topics into clear, confident copy.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Comfort working with designers, PMs, and PR partners on fast timelines.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Experience maintaining tone/voice guidelines and QA-ing translated assets.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Preferred Skills</h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Fintech, B2B SaaS, or startup experience with founders as core audience.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">SEO fundamentals and ability to brief/coordinate with design and video.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Experience interviewing customers and turning insights into case studies.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm sm:text-base text-slate-700">Comfort juggling multiple briefs and deadlines in a fast-moving team.</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={450}>
                <Card className="mb-6">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                      <Sparkles className="text-amber-600 flex-shrink-0" size={22} />
                      What You Will Get
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Remote-first setup with flexible collaboration windows.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Fast feedback loops with design, product, and marketing leadership.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Visibility on flagship launches and founder-facing narratives.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm sm:text-base text-slate-700">Learning budget and clear growth paths in content and product storytelling.</span>
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
                    <div className="bg-gradient-to-r from-amber-500 to-red-500 p-4 sm:p-6 text-white">
                      <Laptop className="mb-2" size={24} />
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">Apply Now</h3>
                      <p className="text-amber-50 text-xs sm:text-sm">Content Writer (Arabic)</p>
                    </div>
                    <div className="p-4 sm:p-6 space-y-3">
                      <p className="text-sm text-slate-600">Submit your application to get scheduled quickly for virtual rounds.</p>
                      <div
                        id="zf_div_ubY5LDz5Nic_aMgUNDCojQSfgyqLpTs-NC5PZXKwQjQ"
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
