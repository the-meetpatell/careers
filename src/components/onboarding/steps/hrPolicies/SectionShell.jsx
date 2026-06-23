import AnimatedSection from '../../../AnimatedSection'

// A reusable section wrapper for the HR Policies deck.
// Renders a pill chip (icon + uppercase label), a gradient headline, an
// optional intro line, and the section body. Keeps every section visually
// consistent with the onboarding design language.
export default function SectionShell({
  eyebrowIcon: Icon,
  eyebrow,
  title,
  titleAccent,
  intro,
  chipClassName = 'bg-blue-100 border-blue-200 text-blue-700',
  accentClassName = 'from-blue-500 to-purple-600',
  children,
}) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
      <AnimatedSection animation="fade-down">
        <div className="mb-8 sm:mb-10">
          {eyebrow && (
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider mb-4 ${chipClassName}`}
            >
              {Icon && <Icon size={14} />}
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter">
            {title}{' '}
            {titleAccent && (
              <span className={`bg-gradient-to-r ${accentClassName} bg-clip-text text-transparent`}>
                {titleAccent}
              </span>
            )}
          </h2>
          {intro && <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl">{intro}</p>}
        </div>
      </AnimatedSection>

      {children}
    </section>
  )
}
