import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Clock, Briefcase, Users, Target, CheckCircle, Calendar, FileText, Phone, MessageCircle } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import AnimatedSection from '../../components/AnimatedSection'

export default function PartnershipAppointmentSetter() {
  useEffect(() => {
    const container = document.getElementById("zf_div_partnership_setter");
    
    if (container && container.children.length === 0) {
      try {
        const iframe = document.createElement("iframe");
        let ifrmSrc = 'https://forms.zohopublic.com/finanshelsllc/form/AppointmentSetter/formperma/M9dFXcE-7EnFpKTSJ4GBnvzcSEVh3QjjGzsBud8nJBQ?zf_rszfm=1';
        
        try {
          if (typeof window.ZFAdvLead !== "undefined" && typeof window.zfutm_zfAdvLead !== "undefined") {
            for (let prmIdx = 0; prmIdx < window.ZFAdvLead.utmPNameArr.length; prmIdx++) {
              let utmPm = window.ZFAdvLead.utmPNameArr[prmIdx];
              utmPm = (window.ZFAdvLead.isSameDomian && (window.ZFAdvLead.utmPNameArr.indexOf(utmPm) == -1)) ? "zf_" + utmPm : utmPm;
              const utmVal = window.zfutm_zfAdvLead.zfautm_gC_enc(window.ZFAdvLead.utmPNameArr[prmIdx]);
              if (typeof utmVal !== "undefined" && utmVal != "") {
                ifrmSrc = ifrmSrc + (ifrmSrc.indexOf('?') > 0 ? '&' : '?') + utmPm + '=' + utmVal;
              }
            }
          }
          if (typeof window.ZFLead !== "undefined" && typeof window.zfutm_zfLead !== "undefined") {
            for (let prmIdx = 0; prmIdx < window.ZFLead.utmPNameArr.length; prmIdx++) {
              const utmPm = window.ZFLead.utmPNameArr[prmIdx];
              const utmVal = window.zfutm_zfLead.zfutm_gC_enc(window.ZFLead.utmPNameArr[prmIdx]);
              if (typeof utmVal !== "undefined" && utmVal != "") {
                ifrmSrc = ifrmSrc + (ifrmSrc.indexOf('?') > 0 ? '&' : '?') + utmPm + '=' + utmVal;
              }
            }
          }
        } catch (e) {}
        
        iframe.src = ifrmSrc;
        iframe.style.border = "none";
        iframe.style.height = "900px";
        iframe.style.width = "100%";
        iframe.style.transition = "height 0.3s ease";
        iframe.style.overflow = "hidden";
        iframe.style.display = "block";
        iframe.setAttribute("aria-label", 'Appointment Setter');
        
        container.appendChild(iframe);
        
        const messageHandler = (event) => {
          const evntData = event.data;
          if (evntData && evntData.constructor == String) {
            const zf_ifrm_data = evntData.split("|");
            if (zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3) {
              const zf_perma = zf_ifrm_data[0];
              const zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
              const iframeEl = container.getElementsByTagName("iframe")[0];
              
              if (iframeEl && (iframeEl.src).indexOf('formperma') > 0 && (iframeEl.src).indexOf(zf_perma) > 0) {
                const prevIframeHeight = iframeEl.style.height;
                let zf_tout = false;
                
                if (zf_ifrm_data.length == 3) {
                  iframeEl.scrollIntoView();
                  zf_tout = true;
                }
                
                if (prevIframeHeight != zf_ifrm_ht_nw) {
                  if (zf_tout) {
                    setTimeout(() => {
                      iframeEl.style.height = zf_ifrm_ht_nw;
                    }, 500);
                  } else {
                    iframeEl.style.height = zf_ifrm_ht_nw;
                  }
                }
              }
            }
          }
        };
        
        window.addEventListener('message', messageHandler, false);
        
        return () => {
          window.removeEventListener('message', messageHandler);
        };
      } catch (e) {}
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pt-20">
      <div className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-2">
          <AnimatedSection animation="fade-up">
            <Link to="/partnership-appointment-setter-walkin" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-8 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Walk-In
            </Link>

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-bold mb-4">
                📞 Revenue Engine
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Partnership Appointment Setter
              </h1>
              <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-600 font-medium text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-emerald-600 flex-shrink-0" />
                  Dubai, UAE (Junior / Graduate Track)
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-emerald-600 flex-shrink-0" />
                  Full-Time
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-emerald-600 flex-shrink-0" />
                  High-Velocity Role
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="mb-6 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">⚡ Virtual Walk-in This Saturday</h3>
                <p className="text-sm sm:text-base text-slate-700 font-medium mb-3">Apply online → GD Round (same day after filtering)</p>
                <p className="text-sm text-slate-600">High-energy group discussions with our partnerships team. Come ready to pitch ideas and work through scenarios.</p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="mb-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Calendar className="text-emerald-600 flex-shrink-0" size={24} />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Interview Process</h3>
                </div>
                <div className="space-y-2 text-slate-700 font-medium text-sm sm:text-base">
                  <p><strong>Saturday:</strong> Apply online + GD Round (group discussion)</p>
                  <p><strong>Week 1:</strong> Initial screening & expectation setting with HR</p>
                  <p><strong>Week 2:</strong> Skills assessment + roleplay scenario</p>
                  <p><strong>Week 3:</strong> Final conversation with Team Lead (Partnerships)</p>
                  <p className="text-emerald-600 font-bold mt-3 sm:mt-4">Fast-track: Top performers move through rounds quickly</p>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="mb-6">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-4">
                  <Target className="text-emerald-600 flex-shrink-0" size={24} />
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Your Mission</h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 font-semibold">
                  Fill the calendars of Finanshels Partnership Managers with high-quality, ICP-matched meetings every single day.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  No meetings = no revenue. You are the first lever in the growth engine. Your job is simple and powerful: book high-quality meetings that unlock partner activation, revenue, and growth.
                </p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <Card className="mb-6">
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">90-Day Non-Negotiable Targets</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-emerald-50 p-3 sm:p-4 rounded-lg border border-emerald-200">
                    <p className="text-xs sm:text-sm font-bold text-emerald-600 uppercase">Meetings/Day</p>
                    <p className="text-xl sm:text-2xl font-bold text-slate-900">7</p>
                  </div>
                  <div className="bg-emerald-50 p-3 sm:p-4 rounded-lg border border-emerald-200">
                    <p className="text-xs sm:text-sm font-bold text-emerald-600 uppercase">Meetings/Month</p>
                    <p className="text-xl sm:text-2xl font-bold text-slate-900">154+</p>
                  </div>
                  <div className="bg-teal-50 p-3 sm:p-4 rounded-lg border border-teal-200">
                    <p className="text-xs sm:text-sm font-bold text-teal-600 uppercase">ICP Match Rate</p>
                    <p className="text-xl sm:text-2xl font-bold text-slate-900">≥ 80%</p>
                  </div>
                  <div className="bg-teal-50 p-3 sm:p-4 rounded-lg border border-teal-200">
                    <p className="text-xs sm:text-sm font-bold text-teal-600 uppercase">Show-up Rate</p>
                    <p className="text-xl sm:text-2xl font-bold text-slate-900">≥ 75%</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 font-medium">🎯 Partner must have 5+ customers potential per month</p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <Card className="mb-6">
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={24} />
                  What You Will Do
                </h2>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">Research UAE free zones, business setup firms, and advisors</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">Identify and qualify high-volume partners</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Phone className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">Run phone, WhatsApp, LinkedIn & email outreach campaigns</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <MessageCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">Pitch Finanshels clearly and confidently</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">Qualify interest quickly and book meetings directly into Partnership Manager calendars</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">Track every interaction in CRM</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">Improve scripts weekly using conversion data</span>
                  </li>
                </ul>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={500}>
            <Card className="mb-6 bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200">
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">❌ What You Will NOT Do</h2>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-red-600 font-bold text-lg mt-0.5">✗</span>
                    <span className="text-sm sm:text-base text-slate-700">Close deals</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-red-600 font-bold text-lg mt-0.5">✗</span>
                    <span className="text-sm sm:text-base text-slate-700">Manage partners</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-red-600 font-bold text-lg mt-0.5">✗</span>
                    <span className="text-sm sm:text-base text-slate-700">Negotiate commercials</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-red-600 font-bold text-lg mt-0.5">✗</span>
                    <span className="text-sm sm:text-base text-slate-700">Do admin or operations</span>
                  </li>
                </ul>
                <p className="text-sm font-bold text-slate-900 mt-4">Your job = book high-quality meetings. Period.</p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={600}>
            <Card className="mb-6">
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Who Should Apply</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 font-semibold">
                  This role is ideal for:
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">Fresh graduates</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">Junior sales / operations profiles</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">High-energy communicators</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">People who enjoy calling, convincing, and booking</span>
                  </li>
                </ul>
                <p className="text-sm text-slate-600 mt-4 font-semibold">✨ No experience required. Discipline, hunger, and consistency required.</p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={700}>
            <Card className="mb-6">
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Must-Have Capabilities</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 font-semibold">
                  You must be:
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">Comfortable talking to UAE business owners</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">Confident on phone & WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">Organized and process-driven</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">Able to learn scripts fast</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">Able to handle rejection and keep going</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm sm:text-base text-slate-700 font-semibold mb-2">🎯 Bonus if you've used:</p>
                  <p className="text-sm text-slate-600">Dripify, Loosha, dialers, CRMs, WhatsApp outreach tools</p>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={800}>
            <Card className="mb-6">
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Compensation Package</h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <span className="text-sm sm:text-base font-semibold text-slate-900">Base Salary</span>
                    <span className="text-lg sm:text-xl font-bold text-emerald-600">AED 2,000 – 3,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <span className="text-sm sm:text-base font-semibold text-slate-900">Performance Bonus</span>
                    <span className="text-lg sm:text-xl font-bold text-teal-600">Based on targets</span>
                  </div>
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-sky-50 rounded-lg border border-sky-200">
                    <span className="text-sm sm:text-base font-semibold text-slate-900">Tools Budget</span>
                    <span className="text-lg sm:text-xl font-bold text-sky-600">Up to AED 500</span>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={900}>
            <Card className="mb-6">
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Your Growth Path</h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg">
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">Days 1-14</p>
                    <p className="text-sm text-slate-700">Product & ICP training → Scripts & objection handling → CRM & dialer setup → Shadow live calls</p>
                  </div>
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-200 rounded-lg">
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">By Day 30</p>
                    <p className="text-sm text-slate-700">Running your own outreach → Using scripts independently → Tracking in CRM</p>
                  </div>
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg">
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">By Day 90</p>
                    <p className="text-sm text-slate-700">Fully independent → Hitting ICP quality → Optimizing scripts → No hand-holding</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-900 mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  📈 Growth potential: Team Lead / Partnership Ops / Revenue roles
                </p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={1000}>
            <Card className="mb-6 sm:mb-8">
              <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-50 to-slate-100">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Performance Standards</h2>
                <div className="space-y-3">
                  <p className="text-sm sm:text-base text-slate-700">
                    <strong>Weekly Targets:</strong> If minimum weekly targets are missed for 4 consecutive weeks, a performance review is triggered.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700">
                    <strong>This role is numbers-driven.</strong> We track metrics, celebrate wins, and coach through challenges.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700">
                    <strong>Reports to:</strong> Team Lead – Partnerships
                  </p>
                  <p className="text-sm sm:text-base text-slate-700">
                    <strong>Works with:</strong> Partnership Managers, Marketing, CRM Ops
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
            </div>

            {/* Sidebar - Right Side */}
            <div className="lg:col-span-1">
              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="sticky top-32" id="apply">
                  <div className="p-6 sm:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">Apply Now</h2>
                    <div id="zf_div_partnership_setter" style={{ width: '100%' }}></div>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
