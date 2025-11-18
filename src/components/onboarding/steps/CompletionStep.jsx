import { useEffect } from 'react'
import { useOnboarding } from '../../../contexts/OnboardingContext'
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card'
import { Trophy, Download, Award, CheckCircle2, Clock, Target } from 'lucide-react'
import AnimatedSection from '../../AnimatedSection'

export default function CompletionStep() {
  const { userData, badges, progress, timeSpent, quizScore } = useOnboarding()
  const feedbackContainerId = 'zf_div_ls3pO0u6VPKjNDFxkv69RdRXZ49fBMuoRbfdf-Svqqg'

  useEffect(() => {
    const container = document.getElementById(feedbackContainerId)
    if (!container) return
    container.innerHTML = ''

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function() {
        try{
          var f = document.createElement("iframe");
          var ifrmSrc = 'https://forms.zohopublic.com/finanshelsllc/form/EmployeeOnboardingExperience/formperma/ls3pO0u6VPKjNDFxkv69RdRXZ49fBMuoRbfdf-Svqqg?zf_rszfm=1';
          try{
            if ( typeof ZFAdvLead != "undefined" && typeof zfutm_zfAdvLead != "undefined" ) {
              for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
                var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
                utmPm = ( ZFAdvLead.isSameDomian && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
                var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
                if ( typeof utmVal !== "undefined" ) {
                  if ( utmVal != "" ) {
                    if(ifrmSrc.indexOf('?') > 0){
                      ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                    }else{
                      ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                    }
                  }
                }
              }
            }
            if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
              for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
                var utmPm = ZFLead.utmPNameArr[ prmIdx ];
                var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
                if ( typeof utmVal !== "undefined" ) {
                  if ( utmVal != "" ){
                    if(ifrmSrc.indexOf('?') > 0){
                      ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                    }else{
                      ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                    }
                  }
                }
              }
            }
          }catch(e){}
          f.src = ifrmSrc;
          f.style.border="none";
          f.style.height="611px";
          f.style.width="90%";
          f.style.transition="all 0.5s ease";
          f.setAttribute("aria-label", 'Employee Onboarding Experience');
          var d = document.getElementById("${feedbackContainerId}");
          d.appendChild(f);
          window.addEventListener('message', function (event){
            var evntData = event.data;
            if( evntData && evntData.constructor == String ){
              var zf_ifrm_data = evntData.split("|");
              if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
                var zf_perma = zf_ifrm_data[0];
                var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
                var iframe = document.getElementById("${feedbackContainerId}").getElementsByTagName("iframe")[0];
                if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
                  var prevIframeHeight = iframe.style.height;
                  var zf_tout = false;
                  if( zf_ifrm_data.length == 3 ) {
                    iframe.scrollIntoView();
                    zf_tout = true;
                  }
                  if ( prevIframeHeight != zf_ifrm_ht_nw ) {
                    if( zf_tout ) {
                      setTimeout(function(){
                        iframe.style.height = zf_ifrm_ht_nw;
                      },500);
                    } else {
                      iframe.style.height = zf_ifrm_ht_nw;
                    }
                  }
                }
              }
            }
          }, false);
        }catch(e){}
      })();
    `

    container.appendChild(script)

    return () => {
      container.innerHTML = ''
    }
  }, [feedbackContainerId])

  const handleDownloadCertificate = () => {
    const width = 2000
    const height = 1400
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')

    const backgroundGradient = ctx.createLinearGradient(0, 0, width, height)
    backgroundGradient.addColorStop(0, '#fff7ed')
    backgroundGradient.addColorStop(1, '#fef3c7')
    ctx.fillStyle = backgroundGradient
    ctx.fillRect(0, 0, width, height)

    const drawRoundedRect = (x, y, w, h, r) => {
      ctx.beginPath()
      ctx.moveTo(x + r, y)
      ctx.lineTo(x + w - r, y)
      ctx.quadraticCurveTo(x + w, y, x + w, y + r)
      ctx.lineTo(x + w, y + h - r)
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
      ctx.lineTo(x + r, y + h)
      ctx.quadraticCurveTo(x, y + h, x, y + h - r)
      ctx.lineTo(x, y + r)
      ctx.quadraticCurveTo(x, y, x + r, y)
      ctx.closePath()
    }

    ctx.fillStyle = 'rgba(255,255,255,0.92)'
    drawRoundedRect(160, 240, width - 320, height - 480, 60)
    ctx.fill()
    ctx.lineWidth = 10
    ctx.strokeStyle = '#f97316'
    ctx.stroke()

    ctx.textAlign = 'center'
    ctx.fillStyle = '#f97316'
    ctx.font = 'bold 80px "Inter", sans-serif'
    ctx.fillText('Finanshels Onboarding Certificate', width / 2, 380)

    ctx.fillStyle = '#0f172a'
    ctx.font = 'italic 44px "Inter", sans-serif'
    ctx.fillText('This certifies that', width / 2, 520)

    ctx.font = 'bold 100px "Inter", sans-serif'
    ctx.fillText(userData.name || 'Finanshels Team Member', width / 2, 640)

    ctx.font = '36px "Inter", sans-serif'
    ctx.fillText('has successfully completed the Finanshels Onboarding Program', width / 2, 720)

    ctx.font = '32px "Inter", sans-serif'
    ctx.fillText(`${userData.role || 'Role'}  |  ${userData.department || 'Department'}`, width / 2, 800)
    ctx.fillText(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), width / 2, 860)

    ctx.font = '28px "Inter", sans-serif'
    ctx.fillText('Signed by: Finanshels Leadership Team', width / 2, 960)

    const link = document.createElement('a')
    const safeName = (userData.name || 'finanshels-teammate').toLowerCase().replace(/\s+/g, '-')
    link.download = `finanshels-onboarding-certificate-${safeName}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }
  const ratingOptions = Array.from({ length: 10 }, (_, idx) => idx + 1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf2408_1px,transparent_1px),linear-gradient(to_bottom,#fbbf2408_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-amber-200/30 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/30 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection animation="fade-down">
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-8 shadow-2xl animate-bounce">
              <Trophy className="text-white" size={64} />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tighter">
              🎉 Congratulations, <br />
              <span className="bg-gradient-to-r from-amber-500 to-pink-600 bg-clip-text text-transparent">
                {userData.name}!
              </span>
            </h1>
            <p className="text-2xl text-slate-700 font-semibold">
              You've completed the Finanshels onboarding!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="border-2 border-amber-200 shadow-xl">
              <div className="p-6 text-center bg-gradient-to-br from-amber-50 to-orange-50">
                <Target className="text-amber-600 mx-auto mb-3" size={32} />
                <div className="text-4xl font-extrabold text-slate-900 mb-2">{progress}%</div>
                <div className="text-sm text-slate-600 font-semibold">Completion Rate</div>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="border-2 border-blue-200 shadow-xl">
              <div className="p-6 text-center bg-gradient-to-br from-blue-50 to-cyan-50">
                <Clock className="text-blue-600 mx-auto mb-3" size={32} />
                <div className="text-4xl font-extrabold text-slate-900 mb-2">{timeSpent}</div>
                <div className="text-sm text-slate-600 font-semibold">Minutes Spent</div>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <Card className="border-2 border-emerald-200 shadow-xl">
              <div className="p-6 text-center bg-gradient-to-br from-emerald-50 to-teal-50">
                <CheckCircle2 className="text-emerald-600 mx-auto mb-3" size={32} />
                <div className="text-4xl font-extrabold text-slate-900 mb-2">{quizScore}%</div>
                <div className="text-sm text-slate-600 font-semibold">Quiz Score</div>
              </div>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={400}>
          <Card className="border-2 border-purple-200 shadow-2xl mb-12">
            <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-purple-600" size={32} />
                <h2 className="text-3xl font-extrabold text-slate-900">Your Badges</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {badges.map((badge, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-2 shadow-xl text-3xl">
                      {badge.icon}
                    </div>
                    <div className="text-xs font-bold text-slate-900">{badge.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={600}>
          <Card className="border-2 border-blue-200 shadow-2xl">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4 text-center">What's Next?</h3>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="text-emerald-500" size={24} />
                  <span className="text-slate-700 font-semibold">Join our Slack workspace and introduce yourself in #general channel</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="text-emerald-500" size={24} />
                  <span className="text-slate-700 font-semibold">Schedule your first 1:1 with your manager</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="text-emerald-500" size={24} />
                  <span className="text-slate-700 font-semibold">Start exploring your assigned projects</span>
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xl">
                <div className="flex items-start gap-3 mb-4">
                  <Target className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900">Share Your Onboarding Feedback</h4>
                    <p className="text-sm text-slate-600">
                      Tell us how we did so we can keep improving the experience. This form is embedded directly inside Finanshels.
                    </p>
                  </div>
                </div>
                <div
                  id={feedbackContainerId}
                  className="rounded-2xl border border-slate-200 overflow-hidden shadow-inner bg-white"
                ></div>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
