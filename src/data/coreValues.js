export const coreValues = [
  {
    id: 'relentless-customer-centricity',
    letter: 'RC',
    title: 'Relentless Customer Centricity',
    tagline: 'Every decision starts with the customer and works backward. We obsess over real outcomes and go the extra mile to create value customers genuinely feel.',
    meaning: 'Start with the customer, validate with evidence, and finish with a measurable outcome they can see and feel.',
    behaviors: [
      'Begin projects with the customer outcome, not the task list',
      'Validate assumptions with customer calls, data, or experiments',
      'Escalate and unblock anything that hurts the customer experience',
      'Close the loop with customers after shipping changes'
    ],
    examples: {
      good: [
        'Jumping on a quick call to confirm the problem before drafting a proposal',
        'Adding a success metric tied to customer impact in every brief',
        'Following up after an issue is fixed to ensure the customer feels the improvement'
      ],
      bad: [
        'Shipping a change without speaking to users or checking data',
        'Relying on internal opinions as "customer truth"',
        'Leaving negative feedback unanswered for days'
      ]
    },
    scorecard: [
      { measure: 'Customer Insight', scores: { 1: 'Assumptions only', 3: 'Some validation', 5: 'Evidence-led' } },
      { measure: 'Outcomes Delivered', scores: { 1: 'Unclear', 3: 'Occasional wins', 5: 'Consistent, felt impact' } },
      { measure: 'Responsiveness', scores: { 1: 'Slow / silent', 3: 'Timely', 5: 'Proactive follow-through' } }
    ],
    tags: ['Customer insight', 'Outcomes', 'Empathy'],
    colors: { gradient: 'from-emerald-500 to-teal-600', soft: 'from-emerald-50 to-teal-50' }
  },
  {
    id: 'togetherness',
    letter: 'T',
    title: 'Togetherness',
    tagline: 'We win as one team. We respect diverse perspectives, collaborate openly, and support each other to achieve outcomes bigger than any individual effort.',
    meaning: 'Default to "we". Seek perspectives, unblock teammates, and celebrate shared wins.',
    behaviors: [
      'Invite diverse viewpoints and listen actively',
      'Share context early so others can move faster',
      'Ask for help and offer help without being asked',
      'Celebrate team wins publicly and credit contributors'
    ],
    examples: {
      good: [
        'Pulling product, ops, and sales into a quick huddle to align on a customer issue',
        'Sharing draft work early to gather feedback',
        'Calling out teammates by name when celebrating results'
      ],
      bad: [
        "Guarding information to stay \"in control\"",
        "Letting a teammate stay blocked because \"it's not my lane\"",
        "Taking credit for shared work"
      ]
    },
    scorecard: [
      { measure: 'Collaboration', scores: { 1: 'Siloed', 3: 'Participates', 5: 'Orchestrates' } },
      { measure: 'Communication', scores: { 1: 'Sparse', 3: 'Informative', 5: 'Rich context, early' } },
      { measure: 'Team Support', scores: { 1: 'Rarely helps', 3: 'Helps when asked', 5: 'Proactively supports' } }
    ],
    tags: ['Trust', 'Collaboration', 'Support'],
    colors: { gradient: 'from-blue-500 to-indigo-600', soft: 'from-blue-50 to-indigo-50' }
  },
  {
    id: 'transparency-integrity',
    letter: 'T&',
    title: 'Transparency & Integrity',
    tagline: "We speak the truth early and act with integrity even when it's uncomfortable. We share context, not just conclusions, and keep our word to customers, teammates, and partners.",
    meaning: 'Be honest early, provide context, and honor commitments--especially when it is inconvenient.',
    behaviors: [
      'Surface risks, misses, and blockers early with options to fix',
      'Share the "why" behind decisions, not just the decision',
      'Give clear commitments and meet them; renegotiate early if needed',
      'Protect data, privacy, and trust'
    ],
    examples: {
      good: [
        'Flagging a likely delay with mitigation plans as soon as you see it',
        'Documenting decisions with rationale so others can challenge or learn',
        'Notifying customers before an issue affects them, with a timeline to resolve'
      ],
      bad: [
        'Hiding a risk until it becomes a fire',
        'Sharing conclusions without context so the team is left guessing',
        'Letting commitments slip without telling stakeholders'
      ]
    },
    scorecard: [
      { measure: 'Honesty', scores: { 1: 'Avoids hard truths', 3: 'Selective', 5: 'Direct & early' } },
      { measure: 'Context Sharing', scores: { 1: 'Minimal', 3: 'Basic', 5: 'Full story & rationale' } },
      { measure: 'Reliability', scores: { 1: 'Misses commitments', 3: 'Mostly reliable', 5: 'Rock solid' } }
    ],
    tags: ['Honesty', 'Context', 'Reliability'],
    colors: { gradient: 'from-amber-500 to-orange-600', soft: 'from-amber-50 to-orange-50' }
  },
  {
    id: 'unprompted-ownership',
    letter: 'UO',
    title: 'Unprompted Ownership',
    tagline: "We take responsibility without being asked. We own outcomes end-to-end, fix what's broken, and don't wait for permission to do what's right for the business.",
    meaning: 'See it, solve it, ship it--and make sure it sticks.',
    behaviors: [
      'Pick up problems and drive to resolution without waiting for direction',
      'Close loops: follow through until the outcome is real, not just shipped',
      'Document what changed and who needs to know',
      'Raise your hand when you need support instead of stalling'
    ],
    examples: {
      good: [
        'Spotting a broken workflow and fixing it, then informing stakeholders',
        'Proactively coordinating across teams to remove blockers',
        'Creating a short playbook after solving a recurring issue'
      ],
      bad: [
        'Saying "not my job" when a customer-impacting issue appears',
        'Dropping a fix without verifying impact or telling owners',
        'Waiting for reminders to finish critical actions'
      ]
    },
    scorecard: [
      { measure: 'Initiative', scores: { 1: 'Needs prompting', 3: 'Acts when asked', 5: 'Acts unprompted' } },
      { measure: 'Follow-through', scores: { 1: 'Leaves loose ends', 3: 'Mostly completes', 5: 'Closes loops' } },
      { measure: 'Documentation', scores: { 1: 'None', 3: 'Basic notes', 5: 'Clear updates & owners' } }
    ],
    tags: ['Initiative', 'Accountability', 'Bias to action'],
    colors: { gradient: 'from-teal-500 to-emerald-600', soft: 'from-teal-50 to-emerald-50' }
  },
  {
    id: 'scalable-innovation-excellence',
    letter: 'SI',
    title: 'Scalable Innovation & Excellence',
    tagline: 'We build with the future in mind. We innovate to simplify, raise quality standards, and design solutions that scale--without compromising on excellence.',
    meaning: 'Invent to simplify, raise the bar, and make it scalable from day one.',
    behaviors: [
      'Design for scale: reduce manual steps and single-threaded heroes',
      'Simplify processes and experiences while improving quality',
      'Test and measure experiments before rolling wide',
      'Continuously refactor and standardize to keep systems robust'
    ],
    examples: {
      good: [
        'Automating a repetitive task and writing a handoff guide',
        'Running an A/B test before adopting a new outreach script',
        'Refactoring a process to reduce steps and defects simultaneously'
      ],
      bad: [
        'Shipping clever but fragile hacks that break at scale',
        'Adding complexity to impress rather than to improve',
        'Rolling out changes without measuring impact'
      ]
    },
    scorecard: [
      { measure: 'Scalability', scores: { 1: 'Breaks under load', 3: 'Works for now', 5: 'Designed to scale' } },
      { measure: 'Quality Bar', scores: { 1: 'Inconsistent', 3: 'Meets basics', 5: 'Raises standards' } },
      { measure: 'Simplicity', scores: { 1: 'Adds clutter', 3: 'Neutral', 5: 'Simplifies meaningfully' } }
    ],
    tags: ['Scale', 'Quality', 'Simplicity'],
    colors: { gradient: 'from-purple-600 to-fuchsia-600', soft: 'from-purple-50 to-fuchsia-50' }
  }
]
