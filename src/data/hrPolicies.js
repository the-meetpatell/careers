// HR Policies presentation content.
// Single source of truth for the post-onboarding "Human Resource Policies" deck.
// Content is verbatim from the official Finanshels HR Policies deck; only the
// presentation/layout is improved. Keep this data immutable — never mutate in place.

export const HR_POLICIES_HERO = Object.freeze({
  eyebrow: 'Finance. Simplified.',
  title: 'Human Resource Policies',
  tagline: 'Think Beyond Finance',
  intro:
    'Everything you need to know about working at Finanshels — work hours, leaves, appraisals, payroll, conduct, and how we grow together.',
})

// Section 1 — Workplace Expectations & Guidelines (overview list)
export const WORKPLACE_EXPECTATIONS = Object.freeze([
  'Work Hours',
  'Leave Policy & Public Holidays',
  'Internet Usage',
  'Communication',
  'Training',
  'Events: Month End event, Annual Day, Festival Celebration',
  'Dress Code: Company T-Shirt mandatory on Fridays',
  'Same email signature for all staff (setup steps sent via email)',
  'Company device policy: Employees are solely responsible for any damage to company assets',
])

// Section 2 — Work Hours & Leaves
export const WORK_HOURS_CARDS = Object.freeze([
  { label: 'Working Hours', value: '11:00 AM – 8:00 PM', note: '(1 hr break included)' },
  { label: 'Flexible Working', value: 'Start at 11:00 AM', note: 'End by 8:00 PM' },
  { label: 'Working Days', value: 'Monday to Friday', note: '' },
])

export const ATTENDANCE_POLICY = Object.freeze([
  'If an employee plans to come at any time outside official hours, they must inform their Manager in advance.',
  'Employees working remotely must log in and log out on FocusRO every working day.',
])

export const PROBATION_LEAVE_POLICY = Object.freeze([
  'Probation period: 3 months — eligible for 1 Sick Leave per month during this period.',
  'After probation: eligible for both Casual and Sick Leaves — 12 leaves per year combined.',
  'Unused leaves lapse at year-end and do not carry forward.',
  'After completing 1 year: eligible for Earned Leaves.',
])

// Section 3 — Leave Application Process
export const LEAVE_APPLICATION_STEPS = Object.freeze([
  'An employee must request leave via KEKA; leave needs to be approved by the Reporting Manager.',
  'Apply for post-dated leave on the next working day via KEKA.',
  'In case of emergency, drop a message or email to your Manager about your absence.',
])

export const LEAVE_PORTAL_LABEL = 'KEKA HRMS — Leave Portal'

// Section 4 — Appraisal Policy
export const APPRAISAL_BANNER = Object.freeze({
  title: 'Appraisal / Increment / Rating are strictly confidential.',
  body: 'Discussing these with anyone is a policy violation and may lead to strict action or termination.',
})

export const APPRAISAL_CYCLE = Object.freeze({
  label: 'Appraisal Cycle',
  value: 'January (Annual Cycle)',
})

export const APPRAISAL_NOTES = Object.freeze([
  'Your performance will be reviewed after six months.',
  'A formal appraisal will be conducted in January each year.',
  'Ratings and increment details must not be disclosed to colleagues.',
  'Any violation may result in disciplinary action up to and including termination.',
])

// Section 5 — Notice Period
export const NOTICE_PERIOD_CARDS = Object.freeze([
  {
    title: 'Senior / Permanent Employees',
    body: 'Required to serve 3 months notice after submitting resignation.',
    emphasis: true,
  },
  {
    title: 'Probationary Employees',
    body: 'Required to provide a notice period of 15 days prior to resignation.',
    emphasis: false,
  },
])

export const NOTICE_PERIOD_WARNING =
  'During the notice period, only Sick Leaves are permitted — and only upon submission of a valid Medical document.'

export const NOTICE_PERIOD_NOTE =
  'Once resignation is submitted, an employee is not eligible for any paid leaves other than approved sick leave with medical proof.'

// Section 6 — Payroll
export const PAYROLL_ITEMS = Object.freeze([
  {
    title: 'Payroll Date',
    body: 'Payroll is executed by the 5th of every month. In case of any delay, employees will be notified.',
    icon: 'wallet',
  },
  {
    title: 'Salary Slips',
    body: 'Salary slips will be available in KEKA within 1–2 days of payroll execution.',
    icon: 'file',
  },
  {
    title: 'Bank Account',
    body: 'Salary is deposited into your designated Salary Account. The HR Team will assist with account setup if needed.',
    icon: 'bank',
  },
])

// Section 7 — Employee Benefits & Opportunities
export const BENEFITS_INTRO = 'For employees who join Finanshels directly:'

export const BENEFITS = Object.freeze([
  'Employee of the Quarter Awards based on performance.',
  'Spot Award facilitated by the respective Reporting Manager based on performance.',
  'Employees can self-nominate themselves for quarterly awards.',
  'Client appreciation / benefits go directly to the concerned team members.',
  'Weekend support: Half-day or Full-day leave credited based on hours worked (Manager approval required; raise via KEKA).',
  'Flexible timing when required.',
])

// Section 8 — Awards & Recognition
export const AWARDS = Object.freeze([
  { title: 'Employees of the Quarter', cadence: 'Every Quarter' },
  { title: 'Project Team Award', cadence: 'Quarterly' },
  { title: 'On the Spot Awards', cadence: 'Instant awards by email' },
])

export const AWARDS_NOTE = 'Note: Award amount is paid separately after payroll is processed.'

// Section 9 — Do's and Don'ts (Remote Work)
export const REMOTE_DOS = Object.freeze([
  'Log in and log out on FocusRO every working day',
  'Keep camera on during team calls and meetings',
  'Respond to messages within reasonable time during work hours',
  'Keep mobile on vibration or silent mode during calls',
  'Maintain a professional background on video calls',
  'Keep your workspace neat and distraction-free',
  'Smile, be collaborative, and have fun!',
])

export const REMOTE_DONTS = Object.freeze([
  'Do not skip FocusRO log-in/log-out — it is mandatory',
  'Do not attend calls from noisy or inappropriate environments',
  'Do not discuss salary or appraisal with others — strictly against policy',
  'Do not share confidential company data or screen outside secure channels',
  'Do not be unavailable without prior notice during work hours',
  'Theft of data or company assets is strictly prohibited',
  'No gossips — maintain professionalism in all digital channels',
])

// Section 10 — Office Dress Code
export const DRESS_CODE_INTRO =
  'At Finanshels, we believe in maintaining a professional yet comfortable workplace environment. We encourage employees to maintain this standard through wearing formal or semi-formal attire.'

export const DRESS_CODE_ROWS = Object.freeze([
  { when: 'Monday – Thursday', rule: 'Formal or smart-casual attire (collared shirts, trousers, formal shoes)' },
  { when: 'Friday', rule: 'Company-branded T-Shirt is mandatory for all employees' },
  { when: 'Client Meetings', rule: 'Formal business attire required at all times' },
  { when: 'Events / Offsites', rule: 'Dress code communicated in advance by HR' },
])

// Section 11 — Violation of Company Policy
export const VIOLATION_BANNER =
  'Disregarding or failing to comply with the standard of business ethics and conduct could lead to disciplinary action, up to and including possible termination of employment.'

export const VIOLATIONS = Object.freeze([
  'Engaging in fraud, theft or other dishonest practices',
  'Records falsification',
  'Violation of company policies and laws',
  'Threatening, intimidating or insubordinate behaviour or physical violence / abusive language',
  'Removing or destroying company records or property, or releasing confidential / proprietary information without approval',
  'Discrimination and sexual harassment',
  'Improper use of company equipment and systems',
  'Breach of Customer and/or Company confidentiality or rules',
])

// Section 12 — Let's Promote Finanshels Together!
export const PROMOTE_INTRO = "Your voice helps us grow — here's how you can contribute:"

export const PROMOTE_STEPS = Object.freeze([
  'New joiners must update their LinkedIn status, follow and like Finanshels on LinkedIn, Facebook, and Instagram, and subscribe on YouTube.',
  'After completing your probation period, we would love you to share your experience on Glassdoor and Google Reviews.',
  'Try to promote and share blogs published on the company website.',
])

// Section 13 — Thank You finale
export const HR_POLICIES_OUTRO = Object.freeze({
  brand: 'FINANSHELS',
  title: 'Thank you!',
  subtitle: "We're excited to have you on the team.",
})

export const BRAND_URL = 'www.finanshels.com'
