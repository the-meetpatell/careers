import FinOpsRoleTemplate from './FinOpsRoleTemplate'

export default function TaxAdvisor() {
  return (
    <FinOpsRoleTemplate
      badgeText="FinOps • Tax"
      title="Tax Advisor"
      location="Remote / Dubai"
      team="Tax & Compliance"
      level="Full-time"
      summary="Lead VAT and Corporate Tax for our clients—file accurately, reconcile tax positions, and navigate FTA queries end-to-end."
      about="You will own tax filings, reconciliations, and advisory touchpoints for startups. Expect hands-on work with returns, audits, and proactive guidance on structuring and compliance."
      formId="zf_div_6w9GXprEidEm_pGFq_CsC5MmUbDsyZX48JI19fTCyWo"
      formSrc="https://forms.zohopublic.com/finanshelsllc/form/TaxAdvisor/formperma/6w9GXprEidEm_pGFq_CsC5MmUbDsyZX48JI19fTCyWo?zf_rszfm=1"
      formAriaLabel="Tax Advisor"
      iframeHeight="1257px"
      responsibilities={[
        'Own monthly/quarterly VAT returns and Corporate Tax filings across assigned clients.',
        'Prepare and reconcile tax ledgers, ensure accuracy of input/output tax.',
        'Respond to FTA queries, audits, and clarifications with tight documentation.',
        'Advise clients on tax implications for transactions, pricing, and expansions.',
        'Partner with controllers to keep tax positions aligned with books and closes.',
        'Standardize tax checklists, evidence packs, and filing calendars.',
      ]}
      requirements={[
        '5+ years in UAE tax (VAT and Corporate Tax) with client-facing exposure.',
        'Strong knowledge of FTA processes, filings, and audit expectations.',
        'Hands-on with tax reconciliations, adjustments, and compliance controls.',
        'Clear communication with founders and auditors; ability to simplify guidance.',
        'Certifications (e.g., UAE Tax Agent) are a plus.',
      ]}
      offer={[
        'Autonomy to own tax across pods with standardized playbooks.',
        'Support from controllers and ops to keep filings predictable.',
        'Remote-first with Dubai collaboration options.',
        'Learning budget for certifications and tax updates.',
      ]}
    />
  )
}
