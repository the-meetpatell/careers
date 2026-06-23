import AnimatedSection from '../../../AnimatedSection'

// A vertical list of numbered process steps (e.g. Leave Application, Promote).
// Each step gets a gradient number badge and a soft card body.
export default function NumberedSteps({ steps, accentClassName = 'from-blue-500 to-purple-600' }) {
  return (
    <div className="space-y-5">
      {steps.map((step, idx) => (
        <AnimatedSection key={idx} animation="fade-up" delay={idx * 80}>
          <div className="flex items-stretch gap-4">
            <div
              className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accentClassName} text-lg font-extrabold text-white shadow-lg`}
            >
              {idx + 1}
            </div>
            <div className="flex flex-1 items-center rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 shadow-sm">
              <p className="text-slate-700 leading-relaxed">{step}</p>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  )
}
