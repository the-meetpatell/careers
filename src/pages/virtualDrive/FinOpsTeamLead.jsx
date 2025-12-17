import FinOpsRoleTemplate from './FinOpsRoleTemplate'

export default function FinOpsTeamLead() {
  return (
    <FinOpsRoleTemplate
      badgeText="FinOps • Pod Leadership"
      title="Team Lead - FinOps"
      location="Remote / Dubai"
      team="Pods & Delivery"
      level="Full-time"
      summary="Run daily execution for FinOps pods—assign work, review outputs, and coach associates to deliver clean, on-time closes."
      about="You’ll be the glue between controllers, account managers, and associates. Expect to lead standups, unblock issues fast, and enforce checklists that keep quality high across multiple clients."
      responsibilities={[
        'Lead daily/weekly standups and keep pod priorities clear.',
        'Assign tasks, monitor progress, and remove blockers for associates.',
        'Review deliverables for accuracy before controller sign-off.',
        'Maintain pod playbooks, checklists, and documentation for repeatability.',
        'Coach team members on quality, pace, and stakeholder updates.',
        'Track SLA adherence and escalate risks early to controllers/AMs.',
      ]}
      requirements={[
        '3-5+ years in accounting/finance operations with team coordination experience.',
        'Hands-on understanding of reconciliations, closes, and reporting hygiene.',
        'Ability to run structured standups and issue resolution in fast-paced pods.',
        'Comfort with distributed teams and collaborating asynchronously.',
        'Clear written updates and willingness to coach junior talent.',
      ]}
      offer={[
        'Ownership of pod cadence with support from controllers and AMs.',
        'Coaching and leadership development for future pod leads.',
        'Tooling to track SLAs, tasks, and quality without micromanaging.',
        'Remote-first with timezone-friendly collaboration windows.',
      ]}
    />
  )
}
