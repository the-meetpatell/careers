import FinOpsRoleTemplate from './FinOpsRoleTemplate'

export default function FinanceIntern() {
  return (
    <FinOpsRoleTemplate
      badgeText="FinOps • Remote"
      title="Finance Intern"
      location="Remote"
      team="FinOps Pods"
      level="Internship / Full-time"
      summary="Get real-world experience in financial operations—supporting pod teams with data, reconciliations, and client reporting for high-growth startups."
      about="You'll be embedded in a FinOps pod working alongside account managers, team leads, and controllers on live client engagements. This is an ideal launchpad for finance graduates who want structured exposure to accounting operations, tools, and client delivery in a high-velocity fintech environment."
      responsibilities={[
        'Support pod teams with month-end close tasks including data entry and reconciliations.',
        'Assist in preparing client reporting packs and variance commentary.',
        'Maintain trackers, filing systems, and task checklists across client accounts.',
        'Help with accounts payable/receivable matching and bank statement analysis.',
        'Flag discrepancies to team leads and document resolutions clearly.',
        'Participate in internal training sessions and pod review calls.',
      ]}
      requirements={[
        'Pursuing or recently completed a degree in Finance, Accounting, or Economics.',
        'Basic understanding of financial statements, debits/credits, and reconciliations.',
        'Strong attention to detail and comfort working with spreadsheets.',
        'Reliable, communicative, and able to meet deadlines consistently.',
        'Enthusiasm to learn accounting tools (QuickBooks, Xero, Zoho Books preferred).',
      ]}
      offer={[
        'Live pod experience from day one—real clients, real work.',
        'Coaching and feedback from controllers, leads, and account managers.',
        'Remote-first with structured onboarding and playbooks.',
        'Performance-based path to a full-time Jr Associate - Accounting role.',
        'Exposure to one of the fastest-growing fintech brands in MENA.',
      ]}
    />
  )
}
