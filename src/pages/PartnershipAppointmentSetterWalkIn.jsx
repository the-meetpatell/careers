import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Users, Target, CheckCircle, Zap, MapPin, TrendingUp, Award } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCounter from '../components/AnimatedCounter'

export default function PartnershipAppointmentSetterWalkIn() {
  useEffect(() => {
    const container = document.getElementById("zf_div_partnership_setter_walkin");
    
    if (container && container.children.length === 0) {
      try {
        const iframe = document.createElement("iframe");
        let ifrmSrc = 'https://forms.zohopublic.com/finanshelsllc/form/AppointmentSetter/formperma/M9dFXcE-7EnFpKTSJ4GBnvzcSEVh3QjjGzsBud8nJBQ?zf_rszfm=1';
        
        try {
          if (typeof window.ZFAdvLead !== "undefined" && typeof window.zfutm_zfAdvLead !== "undefined") {
            for (let prmIdx = 0; prmIdx < window.ZFAdvLead.utmPNameArr.length; prmIdx++) {
              let utmPm = window.ZFAdvLead.utmPNameArr[prmIdx];
              utmPm = (window.ZFAdvLead.isSameDomian && (window.ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1)) ? "zf_" + utmPm : utmPm;
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
        iframe.style.height = "1250px";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/40 to-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-down">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border-2 border-emerald-200 text-sm font-bold text-emerald-700 mb-10 shadow-lg hover:shadow-xl transition-all">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                🚀 Virtual Walk-In This Saturday
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Partnership<br/>
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 blur-2xl opacity-30"></span>
                  <span className="relative bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    Appointment Setter
                  </span>
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl sm:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                Book high-quality meetings that unlock <span className="font-bold text-emerald-600">partner activation, revenue & growth</span>. 
                <br/>
                <span className="text-emerald-600 font-semibold">No experience required. Discipline, hunger & consistency required.</span>
              </p>
            </AnimatedSection>

            <AnimatedSection animation="scale" delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <Link to="#apply">
                  <Button size="lg" variant="primary" className="group text-lg h-14 px-10 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 w-full sm:w-auto">
                    Apply for Saturday Walk-In
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
                  </Button>
                </Link>
                <Link to="/virtual-drive/partnership-appointment-setter">
                  <Button size="lg" variant="outline" className="text-lg h-14 px-10 w-full sm:w-auto border-2 hover:bg-emerald-50">
                    View Full Details
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatedSection animation="fade-up">
              <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
                <div className="text-3xl font-bold text-emerald-600 mb-2">7</div>
                <p className="text-sm font-semibold text-slate-700">Meetings/Day Target</p>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200">
                <div className="text-3xl font-bold text-teal-600 mb-2">AED 2-3K</div>
                <p className="text-sm font-semibold text-slate-700">Base Salary + Bonus</p>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="p-6 bg-gradient-to-br from-cyan-50 to-sky-50 border-2 border-cyan-200">
                <div className="text-3xl font-bold text-cyan-600 mb-2">90 Days</div>
                <p className="text-sm font-semibold text-slate-700">Structured Onboarding</p>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="p-6 bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-200">
                <div className="text-3xl font-bold text-sky-600 mb-2">Dubai</div>
                <p className="text-sm font-semibold text-slate-700">Based (Junior Track)</p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Saturday Walk-In Details */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
                What's Happening This Saturday?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                Simple process, fast track. Apply → Get Shortlisted → Join GD Round (same day)
              </p>
            </AnimatedSection>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="p-8 bg-white border-2 border-emerald-200 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="text-emerald-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">1. Apply Online</h3>
                <p className="text-slate-600 font-medium mb-4">Fill out the application form (5 mins). Tell us about your background, energy level, and why you want this role.</p>
                <p className="text-sm text-emerald-600 font-semibold">Rolling: We review on the spot</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="p-8 bg-white border-2 border-teal-200 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-teal-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">2. Get Shortlisted</h3>
                <p className="text-slate-600 font-medium mb-4">If you pass initial filters (communication, energy, numbers-oriented), we'll invite you to the GD round—same day or next scheduled batch.</p>
                <p className="text-sm text-teal-600 font-semibold">Instant feedback</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="p-8 bg-white border-2 border-cyan-200 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-cyan-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">3. GD Round</h3>
                <p className="text-slate-600 font-medium mb-4">Group discussion with our partnerships team. We'll see how you think, pitch ideas, handle pressure, and collaborate.</p>
                <p className="text-sm text-cyan-600 font-semibold">Virtual & interactive</p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why This Role */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection animation="fade-up">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-8">
                  Why This Role Exists
                </h2>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
                  We need high-velocity, disciplined professionals to fill Partnership Manager calendars with <span className="font-bold text-emerald-600">high-quality, ICP-matched meetings</span>.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">No meetings = No revenue</p>
                      <p className="text-slate-600 text-sm">You're the first lever in our growth engine.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">High-volume, high-quality</p>
                      <p className="text-slate-600 text-sm">7 meetings/day with ≥80% ICP match & ≥75% show-up rate.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Junior talent + senior skills</p>
                      <p className="text-slate-600 text-sm">Fresh perspectives, proven work ethic, coachable mindset.</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-left" delay={150}>
              <Card className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">
                      <AnimatedCounter end={154} duration={2000} />+
                    </div>
                    <p className="text-slate-700 font-semibold">Meetings per month</p>
                  </div>
                  <div className="h-px bg-emerald-200"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-teal-600">≥80%</div>
                      <p className="text-sm text-slate-600 font-medium">ICP Match</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-600">≥75%</div>
                      <p className="text-sm text-slate-600 font-medium">Show-up Rate</p>
                    </div>
                  </div>
                  <div className="h-px bg-emerald-200"></div>
                  <p className="text-sm text-slate-700 text-center font-semibold">
                    🎯 Partner must have 5+ customer potential per month
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We'll Do During Interview */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 text-center">
              How We'll Screen You
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto font-medium">
              We're looking for communication, confidence, coachability, and resilience—not just experience.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-6">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="p-6 bg-white border-2 border-slate-200 hover:border-emerald-300 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-emerald-600" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Scoring Criteria</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold flex-shrink-0">30%</span>
                    <span className="text-slate-600 text-sm">Communication & confidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold flex-shrink-0">20%</span>
                    <span className="text-slate-600 text-sm">Ability to convert conversation → meeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold flex-shrink-0">10%</span>
                    <span className="text-slate-600 text-sm">Process discipline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold flex-shrink-0">30%</span>
                    <span className="text-slate-600 text-sm">Energy & resilience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold flex-shrink-0">10%</span>
                    <span className="text-slate-600 text-sm">Coachability</span>
                  </li>
                </ul>
                <p className="text-sm font-bold text-slate-700 mt-6 p-3 bg-emerald-50 rounded-lg">
                  ✓ Minimum pass score: 80%
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="p-6 bg-white border-2 border-slate-200 hover:border-emerald-300 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="text-teal-600" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Key GD Questions</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold text-lg flex-shrink-0">•</span>
                    <span className="text-slate-600 text-sm">"How would you convince a busy business owner to give you 20 mins?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold text-lg flex-shrink-0">•</span>
                    <span className="text-slate-600 text-sm">"What would you say if someone says 'not interested'?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold text-lg flex-shrink-0">•</span>
                    <span className="text-slate-600 text-sm">"How many calls/messages can you realistically do per day?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold text-lg flex-shrink-0">•</span>
                    <span className="text-slate-600 text-sm">"What motivates you more—salary or hitting targets?"</span>
                  </li>
                </ul>
                <p className="text-sm font-bold text-slate-700 mt-6 p-3 bg-amber-50 rounded-lg text-amber-800">
                  ⚠️ Anyone who avoids numbers gets rejected
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action + Application Form */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white via-emerald-50/40 to-white" id="apply">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* CTA Section */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
                  Ready to join the revenue engine?
                </h2>
                <p className="text-lg text-slate-600 font-medium mb-10">
                  Apply now for Saturday's virtual walk-in. High-energy, disciplined, resilient? We want you.
                </p>

                <div className="space-y-4">
                  <Link to="#apply">
                    <Button size="lg" variant="primary" className="group w-full text-lg h-14 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50">
                      Apply Now
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
                    </Button>
                  </Link>
                  <Link to="/virtual-drive/partnership-appointment-setter" className="block text-center">
                    <Button size="lg" variant="outline" className="w-full text-lg h-14">
                      View Full Details
                    </Button>
                  </Link>
                </div>

                <p className="text-sm text-slate-600 font-medium mt-8 text-center">
                  Questions? <Link to="/virtual-drive/partnership-appointment-setter" className="text-emerald-600 font-bold hover:text-emerald-700">View full job details →</Link>
                </p>
              </div>
            </AnimatedSection>

            {/* Application Form Section */}
            <AnimatedSection animation="fade-up">
              <div className="bg-white rounded-2xl border-2 border-emerald-100 p-8 shadow-lg overflow-hidden max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                  Apply for Saturday Walk-In
                </h3>
                <div id="zf_div_partnership_setter_walkin" style={{ width: '100%' }}></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-emerald-50 to-teal-50 border-t border-emerald-200">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Not ready yet? Explore other roles
            </h3>
            <Link to="/virtual-drive">
              <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                See All Opportunities
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
