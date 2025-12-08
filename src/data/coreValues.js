export const coreValues = [
  {
    id: 'integrity',
    letter: 'I',
    title: 'Integrity',
    tagline: 'We do the right thing even when no one is watching.',
    meaning: 'We do the right thing even when no one is watching.',
    behaviors: [
      'Tell the truth, even if it is hard',
      'Say early if you will miss a deadline',
      'Respect privacy and company information',
      'Keep your promises'
    ],
    examples: {
      good: [
        '"I made a mistake, fixing it now."',
        'Documenting decisions so the team has a clear record',
        'Flagging a conflict of interest before proceeding'
      ],
      bad: [
        '"Everything is fine" even when you know there is a problem',
        'Hiding issues until they are discovered by someone else',
        'Sharing sensitive info casually without approval'
      ]
    },
    scorecard: [
      { measure: 'Honesty & Transparency', scores: { 1: 'Withholds', 3: 'Selective', 5: 'Fully transparent' } },
      { measure: 'Reliability', scores: { 1: 'Breaks commitments', 3: 'Mostly consistent', 5: 'Always reliable' } },
      { measure: 'Ethics', scores: { 1: 'Needs reminders', 3: 'Generally ethical', 5: 'Sets ethical standards' } }
    ],
    colors: { gradient: 'from-amber-500 to-orange-600', soft: 'from-amber-50 to-orange-50' }
  },
  {
    id: 'never-stop-learning',
    letter: 'N',
    title: 'Never Stop Learning',
    tagline: 'Learning is continuous. We learn fast and execute fast.',
    meaning: 'Learning is continuous. We learn fast and execute fast.',
    behaviors: ['Learn new tools/skills', 'Apply what you learn', 'Ask questions', 'Avoid repeating the same mistake'],
    examples: {
      good: [
        'Watching a quick tutorial to solve a problem',
        'Pairing with a teammate to learn a new tool',
        'Summarizing key lessons after a project'
      ],
      bad: [
        'Doing the same error again and again',
        'Avoiding feedback or code reviews',
        'Skipping retros because "we already know"'
      ]
    },
    scorecard: [
      { measure: 'Learning Frequency', scores: { 1: 'Rare', 3: 'Occasional', 5: 'Proactive' } },
      { measure: 'Execution Speed', scores: { 1: 'Slow', 3: 'Moderate', 5: 'Fast' } },
      { measure: 'Application', scores: { 1: 'No change', 3: 'Sometimes', 5: 'Consistent' } }
    ],
    colors: { gradient: 'from-blue-500 to-cyan-600', soft: 'from-blue-50 to-cyan-50' }
  },
  {
    id: 'striving-excellence',
    letter: 'S',
    title: 'Striving for Excellence',
    tagline: 'Aim for high-quality work - not just "okay".',
    meaning: 'Aim for high-quality work - not just "okay".',
    behaviors: ['Double-check your work', 'Improve small things every week', 'Ask: "Can this be better?"'],
    examples: {
      good: [
        'Sending a report that is formatted, clear, and easy to read',
        'Running a quick QA pass before sharing',
        'Adding acceptance criteria to stories before kickoff'
      ],
      bad: [
        'Sharing work that looks rushed or unpolished',
        'Letting known bugs ship because of time pressure'
      ]
    },
    scorecard: [
      { measure: 'Output Quality', scores: { 1: 'Frequent errors', 3: 'Acceptable', 5: 'Outstanding' } },
      { measure: 'Performance Tracking', scores: { 1: 'None', 3: 'Occasional', 5: 'Structured' } }
    ],
    colors: { gradient: 'from-indigo-500 to-purple-600', soft: 'from-indigo-50 to-purple-50' }
  },
  {
    id: 'proactive-ownership',
    letter: 'P',
    title: 'Proactive Ownership',
    tagline: 'Treat the company like it is yours. Own your work end to end.',
    meaning: 'Treat the company like it is yours. Own your work from start to finish.',
    behaviors: [
      "Do not wait for reminders",
      'Share solutions, not problems',
      'Think ahead and prevent issues',
      'Take responsibility'
    ],
    examples: {
      good: [
        '"I fixed it, and here is how we will avoid it next time."',
        'Following up until an issue is truly resolved',
        'Proactively unblocking a dependency without being asked'
      ],
      bad: [
        '"It is not my problem anymore after I sent it."',
        'Waiting for reminders before starting important work'
      ]
    },
    scorecard: [
      { measure: 'Accountability', scores: { 1: 'Blames others', 3: 'Partial', 5: 'Full ownership' } },
      { measure: 'Initiative', scores: { 1: 'Needs instructions', 3: 'Independent', 5: 'Proactive' } }
    ],
    colors: { gradient: 'from-emerald-500 to-teal-600', soft: 'from-emerald-50 to-teal-50' }
  },
  {
    id: 'inventiveness',
    letter: 'I',
    title: 'Inventiveness',
    tagline: 'We do not freeze when stuck - we figure things out.',
    meaning: 'We do not freeze when stuck - we figure things out.',
    behaviors: ['Research before asking', 'Try 2-3 ideas before giving up', 'Break tasks into smaller steps'],
    examples: {
      good: [
        'Using a template or AI tool to structure a document before asking for help',
        'Testing 2-3 options before escalating',
        'Breaking a complex task into small experiments'
      ],
      bad: [
        'Saying "I do not know" instantly; waiting until someone tells you exactly what to do',
        'Giving up after one attempt'
      ]
    },
    scorecard: [
      { measure: 'Problem Solving', scores: { 1: 'Gets stuck', 3: 'Tries but stops', 5: 'Always finds a path' } },
      { measure: 'Independence', scores: { 1: 'Needs help', 3: 'Balanced', 5: 'Minimal direction' } }
    ],
    colors: { gradient: 'from-fuchsia-500 to-pink-600', soft: 'from-fuchsia-50 to-pink-50' }
  },
  {
    id: 'resilience',
    letter: 'R',
    title: 'Resilience',
    tagline: 'We push beyond the expected when it matters.',
    meaning: 'We push beyond the expected when it matters.',
    behaviors: ['Support teammates', 'Handle pressure calmly', 'Add value beyond the task'],
    examples: {
      good: [
        'Sharing insights, not just raw data',
        'Volunteering to support a teammate under pressure',
        'Keeping calm and prioritizing during crunch time'
      ],
      bad: [
        'Doing bare minimum just to finish',
        'Avoiding tough conversations when stakes are high'
      ]
    },
    scorecard: [
      { measure: 'Value Added', scores: { 1: 'Basic', 3: 'Occasional', 5: 'Frequently extra' } },
      { measure: 'Proactiveness', scores: { 1: 'Reactive', 3: 'Responsive', 5: 'Anticipatory' } },
      { measure: 'Pressure Handling', scores: { 1: 'Easily stressed', 3: 'Manages', 5: 'Strong & steady' } }
    ],
    colors: { gradient: 'from-orange-500 to-red-500', soft: 'from-orange-50 to-red-50' }
  },
  {
    id: 'expansion-mindset',
    letter: 'E',
    title: 'Expansion Mindset',
    tagline: 'We see challenges as opportunities. We embrace change and think big.',
    meaning: 'We see challenges as opportunities. We embrace change and think big.',
    behaviors: ['Accept feedback', 'Try new ways of doing things', 'Step outside comfort zones'],
    examples: {
      good: [
        'Learning a new software because it makes the task faster',
        'Suggesting a bold idea during roadmap planning',
        'Seeking feedback to grow into new responsibilities'
      ],
      bad: [
        'Saying "This is how I always do it"',
        'Resisting changes that improve the customer experience'
      ]
    },
    scorecard: [
      { measure: 'Feedback Response', scores: { 1: 'Defensive', 3: 'Neutral', 5: 'Applies quickly' } },
      { measure: 'Growth Initiative', scores: { 1: 'Avoids', 3: 'Small steps', 5: 'Proactive' } },
      { measure: 'Openness to Change', scores: { 1: 'Resistant', 3: 'Accepts', 5: 'Embraces' } }
    ],
    colors: { gradient: 'from-blue-600 to-indigo-700', soft: 'from-blue-50 to-indigo-50' }
  }
]
