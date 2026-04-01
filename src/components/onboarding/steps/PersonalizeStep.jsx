import { useEffect } from 'react'
import { useOnboarding } from '../../../contexts/OnboardingContext'
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card'
import { ArrowRight, ArrowLeft, Info, ShieldCheck } from 'lucide-react'
import AnimatedSection from '../../AnimatedSection'

const FORM_CONTAINER_ID = 'zf_div__zvGqqY95wJdw2PJYPnCYgAfb_VJl3jeOIZor19ATm0'
const FORM_PERMA_ID = '_zvGqqY95wJdw2PJYPnCYgAfb_VJl3jeOIZor19ATm0'
const FORM_SRC = `https://forms.zohopublic.com/finanshelsllc/form/EmployeeOnboarding/formperma/${FORM_PERMA_ID}?zf_rszfm=1`

export default function PersonalizeStep() {
  const { nextStep, previousStep, userData, updateUserData } = useOnboarding()
  const formAcknowledged = Boolean(userData.intakeFormAcknowledged)

  useEffect(() => {
    const container = document.getElementById(FORM_CONTAINER_ID)
    if (!container) return

    container.innerHTML = ''

    const iframe = document.createElement('iframe')
    let iframeSrc = FORM_SRC

    try {
      if (typeof window.ZFAdvLead !== 'undefined' && typeof window.zfutm_zfAdvLead !== 'undefined') {
        for (let prmIdx = 0; prmIdx < window.ZFAdvLead.utmPNameArr.length; prmIdx++) {
          let utmPm = window.ZFAdvLead.utmPNameArr[prmIdx]
          utmPm =
            window.ZFAdvLead.isSameDomian && window.ZFAdvLead.utmcustPNameArr.indexOf(utmPm) === -1
              ? `zf_${utmPm}`
              : utmPm
          const utmVal = window.zfutm_zfAdvLead.zfautm_gC_enc(window.ZFAdvLead.utmPNameArr[prmIdx])

          if (typeof utmVal !== 'undefined' && utmVal !== '') {
            iframeSrc = iframeSrc + (iframeSrc.includes('?') ? '&' : '?') + `${utmPm}=${utmVal}`
          }
        }
      }

      if (typeof window.ZFLead !== 'undefined' && typeof window.zfutm_zfLead !== 'undefined') {
        for (let prmIdx = 0; prmIdx < window.ZFLead.utmPNameArr.length; prmIdx++) {
          const utmPm = window.ZFLead.utmPNameArr[prmIdx]
          const utmVal = window.zfutm_zfLead.zfutm_gC_enc(window.ZFLead.utmPNameArr[prmIdx])

          if (typeof utmVal !== 'undefined' && utmVal !== '') {
            iframeSrc = iframeSrc + (iframeSrc.includes('?') ? '&' : '?') + `${utmPm}=${utmVal}`
          }
        }
      }
    } catch (error) {
      console.error('Unable to append Zoho tracking params', error)
    }

    iframe.src = iframeSrc
    iframe.style.border = 'none'
    iframe.style.height = '720px'
    iframe.style.width = '100%'
    iframe.style.transition = 'all 0.5s ease'
    iframe.style.display = 'block'
    iframe.setAttribute('aria-label', 'Employee Onboarding')
    container.appendChild(iframe)

    const messageHandler = (event) => {
      const eventData = event.data
      if (!eventData || eventData.constructor !== String) return

      const iframeData = eventData.split('|')
      if (iframeData.length !== 2 && iframeData.length !== 3) return

      const submittedFormId = iframeData[0]
      const nextIframeHeight = `${parseInt(iframeData[1], 10) + 15}px`
      const iframeElement = container.getElementsByTagName('iframe')[0]
      if (!iframeElement) return

      if (iframeElement.src.indexOf('formperma') <= 0 || iframeElement.src.indexOf(submittedFormId) <= 0) return

      const shouldDelayResize = iframeData.length === 3
      if (shouldDelayResize) {
        iframeElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        updateUserData({ intakeFormAcknowledged: true })
      }

      if (iframeElement.style.height !== nextIframeHeight) {
        if (shouldDelayResize) {
          setTimeout(() => {
            iframeElement.style.height = nextIframeHeight
          }, 500)
        } else {
          iframeElement.style.height = nextIframeHeight
        }
      }
    }

    window.addEventListener('message', messageHandler, false)

    return () => {
      window.removeEventListener('message', messageHandler, false)
      container.innerHTML = ''
    }
  }, [])

  const handleConfirmationChange = (event) => {
    updateUserData({ intakeFormAcknowledged: event.target.checked })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 px-6 py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection animation="fade-down">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tighter">
              Tell Us About <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">You</span>
            </h2>
            <p className="text-lg text-slate-600">
              Complete the secure onboarding intake to unlock the rest of your journey.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <Card className="border-2 border-slate-200 shadow-2xl">
            <div className="p-8 sm:p-12 space-y-6">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <Info size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-sm text-slate-600">
                  This step now uses the official Zoho onboarding form, so OTP verification and the
                  `@finanshels.com` email restriction are enforced by Zoho instead of being bypassed in the app.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <ShieldCheck size={20} className="text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-sm text-emerald-900">
                  After the iframe shows the form success state, the confirmation below may auto-enable. If it does not,
                  tick it manually once you have submitted the form successfully.
                </p>
              </div>

              <div className="rounded-3xl bg-white border border-slate-100 shadow-inner p-4 sm:p-6">
                <div id={FORM_CONTAINER_ID} className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl" />
              </div>

              <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={formAcknowledged}
                  onChange={handleConfirmationChange}
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-slate-700">
                  I have completed the secure onboarding intake form and passed the required validation checks.
                </span>
              </label>

              <div className="pt-2 flex gap-4">
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
                  disabled={!formAcknowledged}
                  className="flex-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:opacity-95 text-white font-bold text-lg shadow-xl"
                >
                  Continue
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>

              <p className="text-sm text-slate-500 text-center">
                {formAcknowledged
                  ? 'All set. Continue to move to the next step.'
                  : 'Submit the official onboarding form above to enable Continue.'}
              </p>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
