import AnimatedSection from '../../../AnimatedSection'
import { Card } from '../../../ui/Card'
import { Check, X } from 'lucide-react'

// Two-column Do's / Don'ts layout for the Remote Work section.
function Column({ title, items, variant }) {
  const isDo = variant === 'do'
  const cardClass = isDo
    ? 'border-emerald-200 bg-emerald-50/60'
    : 'border-red-200 bg-red-50/60'
  const headingClass = isDo ? 'text-emerald-700' : 'text-red-700'
  const badgeClass = isDo
    ? 'bg-emerald-500'
    : 'bg-red-500'
  const Icon = isDo ? Check : X

  return (
    <Card className={`border-2 ${cardClass} shadow-lg p-6 sm:p-8 h-full`}>
      <h3 className={`flex items-center gap-2 text-2xl font-extrabold mb-6 ${headingClass}`}>
        <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-white ${badgeClass}`}>
          <Icon size={18} />
        </span>
        {title}
      </h3>
      <ul className="space-y-3.5">
        {items.map((item, idx) => (
          <AnimatedSection key={idx} animation="fade-up" delay={idx * 40}>
            <li className="flex items-start gap-3">
              <span className={`mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white ${badgeClass}`}>
                <Icon size={12} />
              </span>
              <span className="text-slate-700 leading-relaxed">{item}</span>
            </li>
          </AnimatedSection>
        ))}
      </ul>
    </Card>
  )
}

export default function DosDonts({ dos, donts }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Column title="Do's" items={dos} variant="do" />
      <Column title="Don'ts" items={donts} variant="dont" />
    </div>
  )
}
