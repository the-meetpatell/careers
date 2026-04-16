import FinOpsRoleTemplate from './FinOpsRoleTemplate'

export default function FinancialController() {
  return (
    <FinOpsRoleTemplate
      badgeText="FinOps • Controllership"
      title="Financial Controller"
      location="Remote / Dubai"
      team="Pods & Delivery"
      level="Full-time"
      summary="Own controllership for a pod of high-growth clients—closing books accurately, reviewing reconciliations, and shipping reporting packs that leadership can trust."
      about="You’ll lead pod-level controls, mentor associates, and keep quality airtight. This is a hands-on role for controllers who can spot gaps quickly, coach the team, and keep stakeholders confident every month-end."
      responsibilities={[
        'Run monthly/quarterly closes, reviews, and variance analysis for assigned pods.',
        'Review reconciliations, trial balances, and supporting schedules before client delivery.',
        'Stand up and refine close checklists, review protocols, and documentation standards.',
        'Partner with Account Managers on escalations, SLAs, and client communications.',
        'Coordinate with auditors/tax advisors to prep workpapers and responses.',
        'Coach associates on accounting quality, controls, and reporting rigor.',
      ]}
      requirements={[
        '7+ years in controllership or public accounting with pod/client ownership.',
        'Strong command of month-end close, reconciliations, and reporting packs.',
        'Comfort leading reviews and providing crisp feedback to junior team members.',
        'Ability to operate across tools (Zoho/QuickBooks/Netsuite) and structured checklists.',
        'Clear written and verbal communication with finance leadership and founders.',
      ]}
      offer={[
        'Pod ownership with room to shape controls and review standards.',
        'Structured growth paths into pod leadership and cross-pod QA.',
        'Tools budget plus automation support to keep closes predictable.',
        'Remote-first with Dubai options and timezone-friendly interview slots.',
      ]}
    />
  )
}
