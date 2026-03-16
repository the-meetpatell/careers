import { useOnboarding } from '../../../contexts/OnboardingContext'
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card'
import { ArrowRight, ArrowLeft, Linkedin, Users } from 'lucide-react'
import AnimatedSection from '../../AnimatedSection'

const hrSquads = [
  {
    title: 'Talent Acquisition (TA)',
    description: 'Your first friends at Finanshels. They make sure you understand the role, feel confident through interviews, and sail smoothly towards Day 0.',
    gradient: 'from-pink-500 to-purple-600',
    help: [
      'Translate expectations, team culture, and growth stories so you know exactly what awaits you.',
      'Keep interviews, feedback, and follow-ups on track with proactive nudges and prep material.',
      'Guide you through offer letters, documentation, and relocation or remote-work logistics.'
    ],
    members: [
      {
        name: 'Brijen B',
        title: 'Manager - Talent Acquisition',
        linkedin: 'https://www.linkedin.com/in/brijenbrahmbhatt/',
        support: 'Owns your hiring journey and answers strategic questions about your fit at Finanshels.'
      },
      {
        name: 'Anusree P',
        title: 'Talent Acquisition',
        linkedin: 'https://www.linkedin.com/in/anusreepc90111998/',
        support: 'Ensures your offer, paperwork, and onboarding checklist are completed without friction.'
      }
    ]
  },
  {
    title: 'People Operations (OPS)',
    description: 'Once you join, our OPS partners stay with you across milestones—policies, pay, benefits, and growth conversations.',
    gradient: 'from-amber-500 to-orange-600',
    help: [
      'Clarify policies, benefits, and career pathways whenever you need a sounding board.',
      'Make sure HR systems, payroll, and compliance tasks are easy to navigate.',
      'Stay in touch beyond onboarding for pulse checks, recognition, and wellbeing support.'
    ],
    members: [
      {
        name: 'Divya Mangtani',
        title: 'HRBP - People Operations',
        linkedin: 'https://www.linkedin.com/in/divya-mangtani-1470271b5/',
        support: 'Handles HR - People Operations and ensures smooth processes for all employees.'
      },
      {
        name: 'Abhinand C',
        title: 'HR Operations',
        linkedin: 'https://www.linkedin.com/in/abhinand-c-p-1b19b6248/',
        support: 'Takes care of HR systems access, payroll inputs, documentation, and benefits queries.'
      }
    ]
  }
]

const journeySupport = [
  {
    title: 'Before Day 1',
    description: 'Interview prep, role clarity, offers, paperwork, relocation support, and culture previews.'
  },
  {
    title: 'During Onboarding',
    description: 'Buddy connects, policy walk-throughs, HRIS setup, systems access, and first-week check-ins.'
  },
  {
    title: 'Beyond 90 Days',
    description: 'Performance rituals, growth mapping, wellbeing chats, and celebrations of your wins.'
  }
]

export default function HRTeamStep() {
  const { nextStep, previousStep, userData } = useOnboarding()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-white px-6 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-down">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 text-sm font-bold text-pink-700 mb-6">
              <Users size={16} />
              YOUR HR CREW
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tighter">
              People Partners for <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">every step</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {userData?.name ? `${userData.name}, ` : ''}meet the HR partners who stay with you throughout your Finanshels journey—before you join, throughout onboarding, and long after you are up and running.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <Card className="border-2 border-pink-100 shadow-xl mb-12">
            <div className="p-8 bg-gradient-to-br from-white via-pink-50 to-orange-50 rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {journeySupport.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white border border-pink-100/70 p-6 shadow-sm">
                    <div className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-3">{item.title}</div>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {hrSquads.map((squad) => (
              <Card key={squad.title} className="border-2 border-slate-100 shadow-2xl overflow-hidden flex flex-col h-full">
                <div className={`p-6 text-white bg-gradient-to-r ${squad.gradient}`}>
                  <div className="text-xs uppercase tracking-widest font-semibold opacity-80 mb-2">{squad.title}</div>
                  <p className="text-base leading-relaxed">{squad.description}</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-3">How they help you</div>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {squad.help.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="inline-flex w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 mt-1.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    {squad.members.map((member) => (
                      <div key={member.name} className="rounded-2xl border border-slate-100 p-4 bg-slate-50/60">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-lg font-semibold text-slate-900">{member.name}</div>
                            <div className="text-sm text-slate-600">{member.title}</div>
                          </div>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-indigo-600 border border-indigo-100 shadow hover:bg-indigo-50 transition"
                            aria-label={`${member.name} on LinkedIn`}
                          >
                            <Linkedin size={18} />
                          </a>
                        </div>
                        <p className="text-sm text-slate-600 mt-3">{member.support}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              onClick={previousStep}
              className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white hover:opacity-95 font-bold px-12 text-lg shadow-xl"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back
            </Button>
            <Button
              size="lg"
              onClick={nextStep}
              className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:opacity-95 text-white font-bold px-12 text-lg shadow-xl"
            >
              Continue
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
