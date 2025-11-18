import { useEffect } from 'react'
import { useOnboarding } from '../../../contexts/OnboardingContext'
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card'
import { ArrowRight, ArrowLeft, Info } from 'lucide-react'
import AnimatedSection from '../../AnimatedSection'

export default function PersonalizeStep() {
  const { nextStep, previousStep } = useOnboarding()
  const formContainerId = 'zf_div__zvGqqY95wJdw2PJYPnCYgAfb_VJl3jeOIZor19ATm0'

  useEffect(() => {
    const container = document.getElementById(formContainerId)
    if (!container) return
    container.innerHTML = ''
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function() {
        try {
          var f = document.createElement("iframe");
          var ifrmSrc = 'https://forms.zohopublic.com/finanshelsllc/form/EmployeeOnboarding/formperma/_zvGqqY95wJdw2PJYPnCYgAfb_VJl3jeOIZor19ATm0?zf_rszfm=1';
          f.src = ifrmSrc;
          f.style.border="none";
          f.style.height="650px";
          f.style.width="100%";
          f.style.transition="all 0.5s ease";
          f.setAttribute("aria-label", 'Employee Onboarding');
          var d = document.getElementById("${formContainerId}");
          d.appendChild(f);
          window.addEventListener('message', function (event){
            var evntData = event.data;
            if( evntData && evntData.constructor == String ){
              var zf_ifrm_data = evntData.split("|");
              if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
                var zf_perma = zf_ifrm_data[0];
                var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
                var iframe = document.getElementById("${formContainerId}").getElementsByTagName("iframe")[0];
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
        } catch(e) {}
      })();
    `
    container.appendChild(script)
    return () => {
      container.innerHTML = ''
    }
  }, [formContainerId])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 px-6 py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <AnimatedSection animation="fade-down">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tighter">
              Tell Us About <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">You</span>
            </h2>
            <p className="text-lg text-slate-600">
              This helps us customize your onboarding journey
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <Card className="border-2 border-slate-200 shadow-2xl">
            <div className="p-8 sm:p-12 space-y-6">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <Info size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-sm text-slate-600">
                  Please fill in our secure onboarding intake form below. Once you submit the information, click Continue to move to the next step.
                </p>
              </div>
              <div id={formContainerId} className="rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-inner"></div>
              <div className="pt-6 flex gap-4">
                <Button
                  type="button"
                  size="lg"
                  onClick={previousStep}
                  className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white hover:opacity-95 font-bold text-lg shadow-xl"
                >
                  <ArrowLeft className="mr-2" size={20} />
                  Back
                </Button>
                <Button
                  type="button"
                  size="lg"
                  onClick={nextStep}
                  className="flex-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:opacity-95 text-white font-bold text-lg shadow-xl"
                >
                  Continue
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
