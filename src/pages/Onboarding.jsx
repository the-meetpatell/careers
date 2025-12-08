import { OnboardingProvider, useOnboarding } from '../contexts/OnboardingContext'
import ProgressBar from '../components/onboarding/ProgressBar'
import ConfettiEffect from '../components/onboarding/ConfettiEffect'
import BadgeNotification from '../components/onboarding/BadgeNotification'
import Sidebar from '../components/onboarding/Sidebar'

import WelcomeStep from '../components/onboarding/steps/WelcomeStep'
import PersonalizeStep from '../components/onboarding/steps/PersonalizeStep'
import FounderMessageStep from '../components/onboarding/steps/FounderMessageStep'
import RoadmapStep from '../components/onboarding/steps/RoadmapStep'
import CompanyOverviewStep from '../components/onboarding/steps/CompanyOverviewStep'
import VisionMissionStep from '../components/onboarding/steps/VisionMissionStep'
import ValuesStep from '../components/onboarding/steps/ValuesStep'
import CoreValueDetailStep from '../components/onboarding/steps/CoreValueDetailStep'
import OKRSystemStep from '../components/onboarding/steps/OKRSystemStep'
import ServicesStep from '../components/onboarding/steps/ServicesStep'
import TeamStep from '../components/onboarding/steps/TeamStep'
import HRTeamStep from '../components/onboarding/steps/HRTeamStep'
import PoliciesStep from '../components/onboarding/steps/PoliciesStep'
import ToolsStep from '../components/onboarding/steps/ToolsStep'
import TestimonialsStep from '../components/onboarding/steps/TestimonialsStep'
import QuizStep from '../components/onboarding/steps/QuizStep'
import CompletionStep from '../components/onboarding/steps/CompletionStep'

function OnboardingContent() {
  const { currentStep, showConfetti } = useOnboarding()

  const renderStep = () => {
    switch (currentStep) {
      case 'welcome': return <WelcomeStep />
      case 'personalize': return <PersonalizeStep />
      case 'founder-message': return <FounderMessageStep />
      case 'roadmap': return <RoadmapStep />
      case 'company': return <CompanyOverviewStep />
      case 'vision-mission': return <VisionMissionStep />
      case 'values': return <ValuesStep />
      case 'integrity': return <CoreValueDetailStep valueKey="integrity" />
      case 'never-stop-learning': return <CoreValueDetailStep valueKey="never-stop-learning" />
      case 'striving-excellence': return <CoreValueDetailStep valueKey="striving-excellence" />
      case 'proactive-ownership': return <CoreValueDetailStep valueKey="proactive-ownership" />
      case 'inventiveness': return <CoreValueDetailStep valueKey="inventiveness" />
      case 'resilience': return <CoreValueDetailStep valueKey="resilience" />
      case 'expansion-mindset': return <CoreValueDetailStep valueKey="expansion-mindset" />
      case 'okr-system': return <OKRSystemStep />
      case 'services': return <ServicesStep />
      case 'team': return <TeamStep />
      case 'hr-team': return <HRTeamStep />
      case 'policies': return <PoliciesStep />
      case 'tools': return <ToolsStep />
      case 'testimonials': return <TestimonialsStep />
      case 'quiz': return <QuizStep />
      case 'completion': return <CompletionStep />
      default: return <WelcomeStep />
    }
  }

  const showProgressBar = currentStep !== 'welcome' && currentStep !== 'completion'
  const showSidebar = currentStep !== 'welcome' && currentStep !== 'completion'

  return (
    <div className="min-h-screen bg-slate-50">
      {showProgressBar && <ProgressBar />}
      <div className={`${showProgressBar ? 'pt-36 sm:pt-40' : ''}`}>
        {renderStep()}
      </div>
      <ConfettiEffect show={showConfetti} />
      <BadgeNotification />
    </div>
  )
}

export default function Onboarding() {
  return (
    <OnboardingProvider>
      <OnboardingContent />
    </OnboardingProvider>
  )
}
