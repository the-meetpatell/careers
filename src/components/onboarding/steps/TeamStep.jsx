import { useOnboarding } from '../../../contexts/OnboardingContext'
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card'
import { ArrowRight, ArrowLeft, Users, Linkedin } from 'lucide-react'
import AnimatedSection from '../../AnimatedSection'

export default function TeamStep() {
  const { nextStep, previousStep, userData } = useOnboarding()

  const orgStructure = [
    {
      name: 'MOHAMMED SHAFEEKH',
      title: 'CEO & Founder',
      focus: 'Vision & Growth',
      gradient: 'from-indigo-500 to-purple-600',
      linkedin: 'https://www.linkedin.com/in/shafeeqmohd/',
      teams: [
        {
          name: 'Marketing',
          leaders: [
            { name: 'Rahul Kohli', title: 'Head of Marketing', linkedin: 'https://www.linkedin.com/in/kohlirahul/' }
          ]
        },
        {
          name: 'Sales',
          leaders: [
            { name: 'Aditya Jha', title: 'Head of Sales', linkedin: 'https://www.linkedin.com/in/adityajha11/' }
          ]
        },
        {
          name: 'Partnership',
          leaders: [
            { name: 'Aditi Gupta', title: 'Partnership Lead', linkedin: 'https://www.linkedin.com/in/aditi-gupta1583/' }
          ]
        },
        {
          name: 'Customer Success',
          leaders: [
            { name: 'Emil Rizwan', title: 'Customer Success Manager', linkedin: 'https://www.linkedin.com/in/emilrizwan16/' }
          ]
        },
        {
          name: 'Legal',
          leaders: [
            { name: 'Seba Nageeb', title: 'Legal & Compliance Manager', linkedin: 'https://www.linkedin.com/in/seba-nageeb-645a251b8/' }
          ]
        },
        {
          name: 'Center of Excellence',
          leaders: [
            { name: 'Meet Patel', title: 'Head of Business Excellence', linkedin: 'https://www.linkedin.com/in/themeetpatel/' }
          ]
        },
        {
          name: 'Advisors',
          leaders: [
            { name: 'Vito Strokov', title: 'Advisor (Ex Snap & Meta)' },
            { name: 'Abhinav Gupta', title: 'Advisor (Cars24)' },
            { name: 'Etienne', title: 'Advisor (Handles AE)' }
          ]
        }
      ]
    },
    {
      name: 'MUHAMMED MUSTHAFA',
      title: 'COO & Co-Founder',
      focus: 'Operations & Delivery',
      gradient: 'from-orange-500 to-amber-500',
      linkedin: 'https://www.linkedin.com/in/muhammed-musthafa-vk/',
      teams: [
        {
          name: 'FinOps Team',
          leaders: [
            { name: 'Jasmeet Monga', title: 'Account Manager', linkedin: 'https://www.linkedin.com/in/jasmeet-monga-acca-98a39254/' },
            { name: 'Jaydeep Khamkhar', title: 'Account Manager', linkedin: 'https://www.linkedin.com/in/jaydeep-khamkar-538ab415/' }
          ]
        },
        {
          name: 'HR Team',
          leaders: [
            { name: 'George Mathew', title: 'Fractional CHRO', linkedin: 'https://www.linkedin.com/in/georgeathumlog/' },
            { name: 'Shabana', title: 'HR Business Partner', linkedin: 'https://www.linkedin.com/in/shabana-nazeer-36a74a70/'  },
            { name: 'Brijen', title: 'Talent Acquisition Lead', linkedin: 'https://www.linkedin.com/in/brijenbrahmbhatt/'  }
          ]
        },
        {
          name: 'Tech & Product',
          leaders: [
            { name: 'Harris Solangi', title: 'VP of Engineering', linkedin: 'https://www.linkedin.com/in/harrissolangi/' }
          ]
        },
        {
          name: 'Tax Team',
          leaders: [
            { name: 'Suhail KY', title: 'Account Manager', linkedin: 'https://www.linkedin.com/in/suhail-k-y-cma%C2%AE-011264181/' }
          ]
        },
        {
          name: 'Internal Finance',
          leaders: [
            { name: 'Shahul Mohammed', title: 'Finance Manager', linkedin: 'https://www.linkedin.com/in/shahul-mohammed-41733623b/' }
          ]
        },
        {
          name: 'AML',
          leaders: [
            { name: 'Krishna Nair', title: 'Account Manager', linkedin: 'https://www.linkedin.com/in/krishna-subash-nair-9153671b/' }
          ]
        },
        {
          name: 'ALC',
          leaders: [
            { name: 'Akshay Kadam', title: 'Account Manager', linkedin: 'https://www.linkedin.com/in/akshay-kadam-21604159/' }
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white px-6 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-down">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-sm font-bold text-blue-700 mb-6">
              <Users size={16} />
              OUR CREW
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tighter">
              Meet Your <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-slate-600">
              Welcome to the {userData.department} department, {userData.name}!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <Card className="border-2 border-blue-200 shadow-2xl mb-12 overflow-hidden relative">
            <div className="p-10 bg-gradient-to-b from-blue-50 via-purple-50/30 to-white">
              <div className="flex flex-col items-center mb-10 text-center">
                <div className="px-6 py-2 rounded-full bg-white/80 border border-blue-100 text-xs font-semibold tracking-widest text-slate-600 uppercase shadow-sm">
                  Org Structure
                </div>
                <div className="w-px h-10 bg-gradient-to-b from-blue-200 to-orange-200 mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-orange-100"></div>
                {orgStructure.map((leader) => (
                  <div key={leader.name} className="relative z-10 rounded-3xl bg-white/80 border border-slate-100 shadow-xl p-6 flex flex-col">
                    <div className={`rounded-2xl bg-gradient-to-r ${leader.gradient} text-white px-6 py-5 shadow-2xl text-center`}>
                      <div className="text-xs uppercase tracking-wide opacity-90 font-semibold">{leader.title}</div>
                      <div className="text-2xl font-extrabold mt-1">{leader.name}</div>
                      <p className="text-white/80 text-sm mt-2">{leader.focus}</p>
                      {leader.linkedin && (
                        <div className="flex justify-center mt-4">
                          <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 text-sm font-semibold hover:bg-white/25 transition"
                          >
                            <Linkedin size={16} />
                            Connect
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-center my-4">
                      <div className="w-px h-6 bg-orange-200"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {leader.teams.map((team) => (
                        <div key={team.name} className="rounded-2xl bg-orange-50/70 border border-orange-100 px-4 py-4 shadow-sm">
                          <div className="text-xs font-extrabold uppercase tracking-wide text-orange-500 mb-3">{team.name}</div>
                          <div className="space-y-3">
                            {team.leaders.map((person) => (
                              <div key={person.name} className="flex items-center justify-between gap-3">
                                <div>
                                  <div className="text-sm font-semibold text-slate-900">{person.name}</div>
                                  <div className="text-xs text-slate-600">{person.title}</div>
                                </div>
                                {person.linkedin && (
                                  <a
                                    href={person.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-indigo-600 border border-indigo-100 shadow hover:bg-indigo-50 transition"
                                    aria-label={`${person.name} on LinkedIn`}
                                  >
                                    <Linkedin size={16} />
                                  </a>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={600}>
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
