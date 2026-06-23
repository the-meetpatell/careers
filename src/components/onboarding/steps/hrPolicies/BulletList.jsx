import AnimatedSection from '../../../AnimatedSection'
import { Card } from '../../../ui/Card'

// A staggered list of bullet items rendered as a single card.
// `tone` controls the bullet dot color so sections can carry their own accent.
const DOT_TONES = {
  blue: 'bg-blue-500',
  cyan: 'bg-cyan-500',
  amber: 'bg-amber-500',
  emerald: 'bg-emerald-500',
  purple: 'bg-purple-500',
  red: 'bg-red-500',
}

export default function BulletList({ items, tone = 'blue', columns = 1 }) {
  const dotClass = DOT_TONES[tone] || DOT_TONES.blue
  const gridClass = columns === 2 ? 'sm:grid-cols-2' : 'grid-cols-1'

  return (
    <Card className="border-2 border-slate-100 shadow-lg p-6 sm:p-8">
      <ul className={`grid ${gridClass} gap-x-8 gap-y-4`}>
        {items.map((item, idx) => (
          <AnimatedSection key={idx} animation="fade-up" delay={idx * 50}>
            <li className="flex items-start gap-3">
              <span className={`mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full ${dotClass}`} />
              <span className="text-slate-700 leading-relaxed">{item}</span>
            </li>
          </AnimatedSection>
        ))}
      </ul>
    </Card>
  )
}
