import FinOpsRoleTemplate from './FinOpsRoleTemplate'

export default function AccountingFresher() {
  return (
    <FinOpsRoleTemplate
      badgeText="FinOps • Remote"
      title="Jr Associate - Accounting"
      location="Remote"
      team="FinOps Pods"
      level="Full-time"
      summary="Start your accounting career in structured pods—supporting reconciliations, data prep, and reporting hygiene for global clients."
      about="You’ll work alongside controllers, team leads, and account managers while learning pod playbooks and close discipline. Expect fast learning cycles and plenty of coaching."
      responsibilities={[
        'Support data prep for reconciliations across banks, expenses, and payables.',
        'Maintain trackers, checklists, and documentation for recurring tasks.',
        'Assist with variance notes and tie-outs for monthly reporting packs.',
        'Flag data gaps or issues early to team leads and controllers.',
        'Continuously improve playbooks with clearer steps and examples.',
      ]}
      requirements={[
        '0-2 years of experience; accounting/finance degree or certification preferred.',
        'Basic understanding of debits/credits, reconciliations, and month-end hygiene.',
        'Proficiency with spreadsheets and eagerness to learn new tools.',
        'Strong attention to detail and ability to follow structured checklists.',
        'Clear communication and willingness to ask for help early.',
      ]}
      offer={[
        'Structured onboarding with checklists and playbooks.',
        'Coaching from controllers and team leads with regular feedback loops.',
        'Clear growth path into associate/lead roles based on performance.',
        'Remote-first flexibility with timezone-friendly collaboration.',
      ]}
    />
  )
}
