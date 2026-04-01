import { useOnboarding } from '../../contexts/OnboardingContext'
import { Check } from 'lucide-react'

export default function ProgressBar() {
  const { ONBOARDING_STEPS, currentStep, completedSteps, progress } = useOnboarding()
  
  const currentIndex = ONBOARDING_STEPS.findIndex(s => s.id === currentStep)
  const currentStepInfo = ONBOARDING_STEPS[currentIndex]
  const nextStepInfo = ONBOARDING_STEPS[currentIndex + 1]
  const progressValue = Number.isFinite(progress) ? progress : 0
  
  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="min-w-0">
            <div className="text-xs sm:text-sm uppercase tracking-wider font-bold text-blue-600">Current Step</div>
            <div className="mt-1 flex items-center gap-2 min-w-0">
              <span className="text-lg sm:text-xl">{currentStepInfo?.icon}</span>
              <h2 className="text-base sm:text-xl font-extrabold text-slate-900 truncate">{currentStepInfo?.title}</h2>
            </div>
          </div>

          <div className="text-right shrink-0">
            <div className="text-xs sm:text-sm text-slate-500 font-semibold">Step {currentIndex + 1} of {ONBOARDING_STEPS.length}</div>
            <div className="text-lg sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {progressValue}%
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full transition-all duration-700 ease-out shadow-lg"
              style={{ width: `${progressValue}%` }}
            >
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>

          <div className="flex justify-between mt-2 px-1">
            {ONBOARDING_STEPS.filter((_, i) => i % 3 === 0).map((step) => {
              const isCompleted = completedSteps.includes(step.id)
              const isCurrent = step.id === currentStep
              
              return (
                <div key={step.id} className="flex flex-col items-center">
                  <div 
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      isCompleted 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg scale-105 ring-2 ring-green-300' 
                        : isCurrent
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-xl scale-110 animate-pulse ring-2 ring-blue-300'
                        : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    {isCompleted ? <Check size={12} /> : step.icon}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {nextStepInfo && (
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Up next: <span className="font-semibold text-slate-700">{nextStepInfo.title}</span>
          </p>
        )}
      </div>
    </div>
  )
}

