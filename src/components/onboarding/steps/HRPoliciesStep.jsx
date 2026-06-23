import { useOnboarding } from '../../../contexts/OnboardingContext'
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card'
import AnimatedSection from '../../AnimatedSection'
import SectionShell from './hrPolicies/SectionShell'
import BulletList from './hrPolicies/BulletList'
import NumberedSteps from './hrPolicies/NumberedSteps'
import DosDonts from './hrPolicies/DosDonts'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Clock,
  CalendarDays,
  ClipboardList,
  FileCheck,
  Wallet,
  FileText,
  Building2,
  Award,
  Trophy,
  Shirt,
  ShieldAlert,
  Megaphone,
  Sparkles,
  AlertTriangle,
  ListChecks,
} from 'lucide-react'
import {
  HR_POLICIES_HERO,
  WORKPLACE_EXPECTATIONS,
  WORK_HOURS_CARDS,
  ATTENDANCE_POLICY,
  PROBATION_LEAVE_POLICY,
  LEAVE_APPLICATION_STEPS,
  LEAVE_PORTAL_LABEL,
  APPRAISAL_BANNER,
  APPRAISAL_CYCLE,
  APPRAISAL_NOTES,
  NOTICE_PERIOD_CARDS,
  NOTICE_PERIOD_WARNING,
  NOTICE_PERIOD_NOTE,
  PAYROLL_ITEMS,
  BENEFITS_INTRO,
  BENEFITS,
  AWARDS,
  AWARDS_NOTE,
  REMOTE_DOS,
  REMOTE_DONTS,
  DRESS_CODE_INTRO,
  DRESS_CODE_ROWS,
  VIOLATION_BANNER,
  VIOLATIONS,
  PROMOTE_INTRO,
  PROMOTE_STEPS,
  HR_POLICIES_OUTRO,
  BRAND_URL,
} from '../../../data/hrPolicies'

const PAYROLL_ICONS = { wallet: Wallet, file: FileText, bank: Building2 }

// A small accented sub-heading used inside sections.
function SubHeading({ children, className = 'text-slate-900' }) {
  return <h3 className={`text-xl font-extrabold mb-4 ${className}`}>{children}</h3>
}

export default function HRPoliciesStep() {
  const { previousStep, nextStep } = useOnboarding()

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#6366f108_1px,transparent_1px),linear-gradient(to_bottom,#6366f108_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl animate-float" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Top bar */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-sm font-extrabold tracking-wide text-blue-600">FINANSHELS</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline truncate text-sm font-semibold text-slate-600">
              Human Resource Policies
            </span>
          </div>
          <Button variant="ghost" size="sm" onClick={previousStep}>
            <ArrowLeft className="mr-2" size={16} />
            Back
          </Button>
        </div>
      </div>

      <div className="relative z-10 pb-8">
        {/* ===== Hero ===== */}
        <AnimatedSection animation="fade">
          <header className="mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-24 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700">
              <Sparkles size={16} />
              {HR_POLICIES_HERO.eyebrow}
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tighter text-slate-900 sm:text-6xl md:text-7xl">
              Human{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Resource Policies
              </span>
            </h1>
            <p className="mt-4 text-lg font-semibold text-purple-600">{HR_POLICIES_HERO.tagline}</p>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
              {HR_POLICIES_HERO.intro}
            </p>
          </header>
        </AnimatedSection>

        {/* ===== 1. Workplace Expectations & Guidelines ===== */}
        <SectionShell
          eyebrowIcon={ListChecks}
          eyebrow="Overview"
          title="Workplace Expectations"
          titleAccent="& Guidelines"
          chipClassName="bg-indigo-100 border-indigo-200 text-indigo-700"
          accentClassName="from-indigo-500 to-blue-600"
        >
          <BulletList items={WORKPLACE_EXPECTATIONS} tone="blue" columns={2} />
        </SectionShell>

        {/* ===== 2. Work Hours & Leaves ===== */}
        <SectionShell
          eyebrowIcon={Clock}
          eyebrow="Work Hours & Leaves"
          title="When & How"
          titleAccent="We Work"
          chipClassName="bg-blue-100 border-blue-200 text-blue-700"
          accentClassName="from-blue-500 to-cyan-600"
        >
          <div className="mb-8 grid gap-5 sm:grid-cols-3">
            {WORK_HOURS_CARDS.map((card, idx) => {
              const Icon = idx === 2 ? CalendarDays : Clock
              return (
                <AnimatedSection key={card.label} animation="fade-up" delay={idx * 80}>
                  <Card className="h-full border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-lg">
                    <Icon className="mb-3 text-blue-600" size={24} />
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-600">{card.label}</div>
                    <div className="mt-1 text-xl font-extrabold text-slate-900">{card.value}</div>
                    {card.note && <div className="mt-1 text-sm text-slate-500">{card.note}</div>}
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <SubHeading className="text-blue-700">Attendance Policy</SubHeading>
              <BulletList items={ATTENDANCE_POLICY} tone="blue" />
            </div>
            <div>
              <SubHeading className="text-cyan-700">Probation & Leave Policy</SubHeading>
              <BulletList items={PROBATION_LEAVE_POLICY} tone="cyan" />
            </div>
          </div>
        </SectionShell>

        {/* ===== 3. Leave Application Process ===== */}
        <SectionShell
          eyebrowIcon={ClipboardList}
          eyebrow="Process"
          title="Leave Application"
          titleAccent="Process"
          chipClassName="bg-violet-100 border-violet-200 text-violet-700"
          accentClassName="from-violet-500 to-purple-600"
        >
          <NumberedSteps steps={LEAVE_APPLICATION_STEPS} accentClassName="from-violet-500 to-purple-600" />
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-700 px-6 py-5 text-white shadow-xl">
              <FileCheck size={22} />
              <span className="font-bold">{LEAVE_PORTAL_LABEL}</span>
            </div>
          </AnimatedSection>
        </SectionShell>

        {/* ===== 4. Appraisal Policy ===== */}
        <SectionShell
          eyebrowIcon={Award}
          eyebrow="Appraisal"
          title="Appraisal"
          titleAccent="Policy"
          chipClassName="bg-amber-100 border-amber-200 text-amber-700"
          accentClassName="from-amber-500 to-orange-600"
        >
          <AnimatedSection animation="fade-up">
            <div className="mb-6 rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 flex-shrink-0 text-amber-600" size={22} />
                <div>
                  <p className="text-lg font-extrabold text-amber-800">{APPRAISAL_BANNER.title}</p>
                  <p className="mt-1 text-slate-700">{APPRAISAL_BANNER.body}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-3">
            <AnimatedSection animation="fade-up" delay={100} className="lg:col-span-1">
              <Card className="h-full border-2 border-amber-200 bg-gradient-to-br from-amber-400 to-amber-500 p-6 shadow-lg">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-900/80">{APPRAISAL_CYCLE.label}</div>
                <div className="mt-2 text-2xl font-extrabold text-slate-900">{APPRAISAL_CYCLE.value}</div>
              </Card>
            </AnimatedSection>
            <div className="lg:col-span-2">
              <SubHeading className="text-amber-700">Appraisal Note</SubHeading>
              <BulletList items={APPRAISAL_NOTES} tone="amber" />
            </div>
          </div>
        </SectionShell>

        {/* ===== 5. Notice Period ===== */}
        <SectionShell
          eyebrowIcon={FileText}
          eyebrow="Exit"
          title="Notice"
          titleAccent="Period"
          chipClassName="bg-slate-200 border-slate-300 text-slate-700"
          accentClassName="from-slate-600 to-slate-800"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {NOTICE_PERIOD_CARDS.map((card, idx) => (
              <AnimatedSection key={card.title} animation="fade-up" delay={idx * 80}>
                <Card
                  className={`h-full border-2 p-6 shadow-lg ${
                    card.emphasis
                      ? 'border-slate-700 bg-gradient-to-br from-slate-700 to-slate-900 text-white'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <h3 className={`text-lg font-extrabold ${card.emphasis ? 'text-amber-300' : 'text-slate-900'}`}>
                    {card.title}
                  </h3>
                  <p className={`mt-3 leading-relaxed ${card.emphasis ? 'text-slate-100' : 'text-slate-700'}`}>
                    {card.body}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50 px-6 py-5 shadow-sm">
              <AlertTriangle className="mt-0.5 flex-shrink-0 text-amber-600" size={20} />
              <p className="font-semibold text-amber-900">{NOTICE_PERIOD_WARNING}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <p className="mt-5 text-slate-600">
              <span className="font-bold text-slate-800">Additional Note: </span>
              {NOTICE_PERIOD_NOTE}
            </p>
          </AnimatedSection>
        </SectionShell>

        {/* ===== 6. Payroll ===== */}
        <SectionShell
          eyebrowIcon={Wallet}
          eyebrow="Payroll"
          title="Getting"
          titleAccent="Paid"
          chipClassName="bg-emerald-100 border-emerald-200 text-emerald-700"
          accentClassName="from-emerald-500 to-teal-600"
        >
          <div className="space-y-4">
            {PAYROLL_ITEMS.map((item, idx) => {
              const Icon = PAYROLL_ICONS[item.icon] || Wallet
              return (
                <AnimatedSection key={item.title} animation="fade-up" delay={idx * 80}>
                  <Card className="flex items-start gap-4 border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-emerald-800">{item.title}</h3>
                      <p className="mt-1 text-slate-700 leading-relaxed">{item.body}</p>
                    </div>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </SectionShell>

        {/* ===== 7. Employee Benefits & Opportunities ===== */}
        <SectionShell
          eyebrowIcon={Sparkles}
          eyebrow="Benefits"
          title="Employee Benefits"
          titleAccent="& Opportunities"
          intro={BENEFITS_INTRO}
          chipClassName="bg-purple-100 border-purple-200 text-purple-700"
          accentClassName="from-purple-500 to-pink-600"
        >
          <BulletList items={BENEFITS} tone="purple" columns={2} />
        </SectionShell>

        {/* ===== 8. Awards & Recognition ===== */}
        <SectionShell
          eyebrowIcon={Trophy}
          eyebrow="Recognition"
          title="Awards"
          titleAccent="& Recognition"
          chipClassName="bg-amber-100 border-amber-200 text-amber-700"
          accentClassName="from-amber-500 to-yellow-500"
        >
          <div className="grid gap-5 sm:grid-cols-3">
            {AWARDS.map((award, idx) => (
              <AnimatedSection key={award.title} animation="fade-up" delay={idx * 90}>
                <Card className="h-full border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 text-center shadow-lg">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-white shadow-lg">
                    <Trophy size={26} />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900">{award.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-amber-700">{award.cadence}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="fade-up" delay={300}>
            <p className="mt-6 text-center text-sm italic text-slate-500">{AWARDS_NOTE}</p>
          </AnimatedSection>
        </SectionShell>

        {/* ===== 9. Do's and Don'ts — Remote Work ===== */}
        <SectionShell
          eyebrowIcon={ListChecks}
          eyebrow="Remote Work"
          title="Do's"
          titleAccent="and Don'ts"
          chipClassName="bg-emerald-100 border-emerald-200 text-emerald-700"
          accentClassName="from-emerald-500 to-red-500"
        >
          <DosDonts dos={REMOTE_DOS} donts={REMOTE_DONTS} />
        </SectionShell>

        {/* ===== 10. Office Dress Code ===== */}
        <SectionShell
          eyebrowIcon={Shirt}
          eyebrow="Dress Code"
          title="Office Dress Code"
          titleAccent="Guidelines"
          intro={DRESS_CODE_INTRO}
          chipClassName="bg-blue-100 border-blue-200 text-blue-700"
          accentClassName="from-blue-500 to-indigo-600"
        >
          <div className="space-y-3">
            {DRESS_CODE_ROWS.map((row, idx) => (
              <AnimatedSection key={row.when} animation="fade-up" delay={idx * 70}>
                <div className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm sm:flex-row sm:items-center sm:gap-6">
                  <div className="w-full font-extrabold text-blue-700 sm:w-56 sm:flex-shrink-0">{row.when}</div>
                  <div className="hidden text-slate-300 sm:block">—</div>
                  <div className="text-slate-700">{row.rule}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </SectionShell>

        {/* ===== 11. Violation of Company Policy ===== */}
        <SectionShell
          eyebrowIcon={ShieldAlert}
          eyebrow="Conduct"
          title="Violation of"
          titleAccent="Company Policy"
          chipClassName="bg-red-100 border-red-200 text-red-700"
          accentClassName="from-red-500 to-rose-600"
        >
          <AnimatedSection animation="fade-up">
            <div className="mb-6 flex items-start gap-3 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 px-6 py-5 text-white shadow-xl">
              <ShieldAlert className="mt-0.5 flex-shrink-0" size={22} />
              <p className="font-bold leading-relaxed">{VIOLATION_BANNER}</p>
            </div>
          </AnimatedSection>
          <BulletList items={VIOLATIONS} tone="red" columns={2} />
        </SectionShell>

        {/* ===== 12. Let's Promote Finanshels Together ===== */}
        <SectionShell
          eyebrowIcon={Megaphone}
          eyebrow="Grow With Us"
          title="Let's Promote"
          titleAccent="Finanshels Together!"
          intro={PROMOTE_INTRO}
          chipClassName="bg-cyan-100 border-cyan-200 text-cyan-700"
          accentClassName="from-blue-500 to-cyan-600"
        >
          <NumberedSteps steps={PROMOTE_STEPS} accentClassName="from-blue-500 to-cyan-600" />
        </SectionShell>

        {/* ===== 13. Thank You finale ===== */}
        <AnimatedSection animation="scale">
          <section className="mx-auto max-w-4xl px-6 py-16 text-center">
            <div className="rounded-3xl border border-slate-200 bg-white/70 px-8 py-14 shadow-2xl backdrop-blur-sm">
              <div className="text-sm font-extrabold tracking-[0.3em] text-emerald-600">
                {HR_POLICIES_OUTRO.brand}
              </div>
              <h2 className="mt-4 text-5xl font-extrabold tracking-tighter text-slate-900 sm:text-6xl">
                {HR_POLICIES_OUTRO.title}
              </h2>
              <p className="mt-4 text-lg italic text-slate-500">{HR_POLICIES_OUTRO.subtitle}</p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button variant="outline" size="lg" onClick={scrollToTop}>
                  <ArrowUp className="mr-2" size={18} />
                  Back to top
                </Button>
                <Button size="lg" onClick={nextStep}>
                  Continue
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>

              <div className="mt-8 text-sm font-semibold text-slate-400">{BRAND_URL}</div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  )
}
