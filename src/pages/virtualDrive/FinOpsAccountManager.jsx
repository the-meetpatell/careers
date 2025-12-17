import FinOpsRoleTemplate from './FinOpsRoleTemplate'

export default function FinOpsAccountManager() {
  return (
    <FinOpsRoleTemplate
      badgeText="FinOps • Delivery"
      title="Account Manager - FinOps"
      location="Remote / Dubai"
      team="Client Pods"
      level="Full-time"
      summary="Lead client pods, manage delivery SLAs, and be the single point of contact for founders on all things finance operations."
      about="You’ll orchestrate pod execution—aligning controllers and associates, sequencing work, and communicating proactively with clients. Expect a mix of delivery governance, issue resolution, and roadmap planning."
      responsibilities={[
        'Own client communications, weekly check-ins, and expectation management.',
        'Plan pod workload, set SLAs, and ensure deadlines are met without quality drops.',
        'Escalate and resolve delivery risks with controllers and leadership early.',
        'Translate client asks into clear tickets/checklists for the pod.',
        'Review outputs before they reach clients and ensure documentation is tidy.',
        'Surface insights and improvement ideas from recurring delivery patterns.',
      ]}
      requirements={[
        '5+ years in client-facing delivery, account management, or consulting.',
        'Experience coordinating finance, accounting, or ops workflows end-to-end.',
        'Strong communication—can simplify updates and handle escalations calmly.',
        'Comfort running pods across time zones and balancing multiple accounts.',
        'Process-first mindset with familiarity in ticketing/checklist-driven work.',
      ]}
      offer={[
        'Direct client ownership with autonomy to shape delivery cadence.',
        'Pathways into pod leadership and delivery ops.',
        'Access to tooling and enablement to keep SLAs predictable.',
        'Remote-first with optional Dubai collaboration weeks.',
      ]}
    />
  )
}
