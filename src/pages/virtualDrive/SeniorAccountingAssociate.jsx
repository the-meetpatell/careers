import FinOpsRoleTemplate from './FinOpsRoleTemplate'

export default function SeniorAccountingAssociate() {
  return (
    <FinOpsRoleTemplate
      badgeText="FinOps • Accounting"
      title="Accounting Advisor"
      location="Remote"
      team="FinOps Pods"
      level="Full-time"
      summary="Handle complex reconciliations, reporting packs, and partner with controllers to keep closes clean and predictable."
      about="You’ll be the go-to for tricky reconciliations and data cleanup. Expect to work closely with controllers and account managers to keep books audit-ready and clients informed."
      responsibilities={[
        'Prepare and review reconciliations across banks, payroll, payables, and revenue.',
        'Own schedules and workpapers that tie to monthly closes and reporting packs.',
        'Spot data gaps and collaborate with clients to resolve quickly.',
        'Support controllers on variance analysis and ad-hoc investigations.',
        'Document repeatable steps for junior associates and keep checklists updated.',
      ]}
      requirements={[
        '2-4+ years in accounting/GL roles with hands-on reconciliation experience.',
        'Comfort with accruals, prepaids, and revenue/cost recognition basics.',
        'Ability to work across multiple clients and switch contexts smoothly.',
        'Experience in cloud accounting tools and spreadsheets for clean workpapers.',
        'Detail orientation with strong written updates for controllers and clients.',
      ]}
      offer={[
        'Exposure to diverse clients and complex close scenarios.',
        'Mentorship from controllers with a path to team lead/controllership.',
        'Tooling support for reconciliations and reporting hygiene.',
        'Remote-first flexibility with structured sprints.',
      ]}
    />
  )
}
