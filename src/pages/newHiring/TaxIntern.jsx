import FinOpsRoleTemplate from './FinOpsRoleTemplate'

export default function TaxIntern() {
  return (
    <FinOpsRoleTemplate
      badgeText="FinOps • VAT & Corporate Tax"
      title="Tax Intern"
      location="Remote"
      team="Tax Advisory"
      level="Internship / Full-time"
      summary="Learn UAE tax compliance from the ground up—supporting VAT filings, corporate tax returns, and FTA-related work for real clients."
      about="You'll work directly with our tax advisors on live client files, gaining hands-on exposure to UAE VAT and Corporate Tax frameworks. This is a learning-intensive role designed for recent graduates or students who want to fast-track their tax career in a fast-growing fintech."
      responsibilities={[
        'Assist in preparing and filing UAE VAT returns and corporate tax submissions.',
        'Support tax reconciliations, input/output tax workings, and ledger tie-outs.',
        'Research FTA regulations and draft summaries for client-specific queries.',
        'Maintain filing calendars, deadlines, and compliance checklists.',
        'Help compile documentation for FTA audits and voluntary disclosure filings.',
        'Shadow senior tax advisors in client calls and advisory sessions.',
      ]}
      requirements={[
        'Pursuing or recently completed a degree in Accounting, Finance, or Taxation.',
        'Basic awareness of UAE VAT law and Corporate Tax framework.',
        'Strong attention to detail and ability to work with numbers accurately.',
        'Proficiency in Excel/Google Sheets.',
        'Eagerness to learn, take ownership, and ask the right questions.',
      ]}
      offer={[
        'Hands-on exposure to UAE VAT and Corporate Tax from day one.',
        'Structured mentorship from experienced tax advisors.',
        'Remote-first with flexible working hours.',
        'Clear path to a full-time Tax Associate role based on performance.',
        'Work with a rapidly growing fintech serving 6,000+ SMBs.',
      ]}
      iframeHeight="1260px"
    />
  )
}
