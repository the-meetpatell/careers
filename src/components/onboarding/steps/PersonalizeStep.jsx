import { useState, useCallback } from 'react'
import { useOnboarding } from '../../../contexts/OnboardingContext'
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card'
import { ArrowRight, ArrowLeft, Info, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '../../AnimatedSection'

export default function PersonalizeStep() {
  const { nextStep, previousStep } = useOnboarding()
  const formActionUrl = 'https://forms.zohopublic.com/finanshelsllc/form/EmployeeOnboarding/formperma/Woot2Ll8DxPyJgzujhpCq92VB8sONE-HMNiKDZC0hyo/htmlRecords/submit'
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState(null)

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      if (formSubmitted || isSubmitting) return

      setSubmissionError(null)
      setIsSubmitting(true)
      try {
        const formData = new FormData(event.currentTarget)
        const response = await fetch(formActionUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: formData
        })

        if (!response.ok && response.type !== 'opaque') {
          throw new Error('Form submission failed')
        }

        setFormSubmitted(true)
      } catch (error) {
        console.error('Unable to submit onboarding form', error)
        setSubmissionError('Something went wrong while submitting the form. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    },
    [formActionUrl, formSubmitted, isSubmitting]
  )

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
              <div className={`${formSubmitted ? 'hidden' : 'block'}`}>
                <form
                  onSubmit={handleSubmit}
                  action={formActionUrl}
                  method="POST"
                  acceptCharset="UTF-8"
                  encType="multipart/form-data"
                  className="space-y-6 rounded-3xl bg-white border border-slate-100 shadow-inner p-8"
                >
                  <input type="hidden" name="zf_referrer_name" value="" />
                  <input type="hidden" name="zf_redirect_url" value="" />
                  <input type="hidden" name="zc_gad" value="" />
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Name <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="SingleLine"
                      placeholder="i.e. Meet Patel"
                      maxLength="255"
                      required
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      compname="PhoneNumber"
                      name="PhoneNumber_countrycode"
                      phoneFormat="1"
                      isCountryCodeEnabled="false"
                      maxLength="20"
                      fieldType="11"
                      id="international_PhoneNumber_countrycode"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="i.e. name@finanshels.com"
                      maxLength="255"
                      required
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Department <span className="text-pink-500">*</span>
                    </label>
                    <select
                      name="Dropdown"
                      required
                      defaultValue="-Select-"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white"
                    >
                      <option value="-Select-" disabled>
                        Select
                      </option>
                      <option value="Marketing">Marketing</option>
                      <option value="Sales">Sales</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Engineering">Engineering</option>
                      <option value="HR">HR</option>
                      <option value="Customer Success">Customer Success</option>
                      <option value="FinOps">FinOps</option>
                      <option value="AML">AML</option>
                      <option value="ALC">ALC</option>
                      <option value="Taxation">Taxation</option>
                      <option value="Legal">Legal</option>
                      <option value="Internal Finance">Internal Finance</option>
                      <option value="Center of Excellence">Center of Excellence</option>
                    </select>
                  </div>
                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-2xl"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                    {submissionError && <p className="mt-3 text-sm text-red-500 text-center">{submissionError}</p>}
                  </div>
                </form>
              </div>
              {formSubmitted && (
                <div className="rounded-3xl bg-white border border-slate-100 shadow-inner p-10 text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner">
                      <CheckCircle2 className="text-blue-600" size={56} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">Thank you!</h3>
                    <p className="text-slate-600 text-sm sm:text-base">Your response has been submitted successfully. Click Continue below.</p>
                  </div>
                </div>
              )}
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
                  disabled={!formSubmitted}
                  className="flex-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:opacity-95 text-white font-bold text-lg shadow-xl"
                >
                  Continue
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
              <p className="text-sm text-slate-500 text-center">
                {formSubmitted ? 'All set! Click Continue below to move ahead.' : 'Submit the form above to enable the Continue button.'}
              </p>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
