import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Life from './pages/Life'
import VirtualDrive from './pages/NewHiring'
import FinOpsDrive from './pages/FinOpsDrive'
import FieldSalesExecutive from './pages/newHiring/FieldSalesExecutive'
import PartnershipsManager from './pages/newHiring/PartnershipsManager'
import AppointmentSetter from './pages/newHiring/AppointmentSetter'
import PartnershipAppointmentSetter from './pages/newHiring/PartnershipAppointmentSetter'
import SrFullStackDeveloper from './pages/newHiring/SrFullStackDeveloper'
import JrWebDeveloper from './pages/newHiring/JrWebDeveloper'
import ContentPRManager from './pages/newHiring/ContentPRManager'
import EventPRManager from './pages/newHiring/EventPRManager'
import ContentWriterArabic from './pages/newHiring/ContentWriterArabic'
import SDRManager from './pages/newHiring/SDRManager'
import GrowthUIUXDesigner from './pages/newHiring/GrowthUIUXDesigner'
import VideoProducerEditor from './pages/newHiring/VideoProducerEditor'
import FinancialController from './pages/newHiring/FinancialController'
import FinOpsAccountManager from './pages/newHiring/FinOpsAccountManager'
import FinOpsTeamLead from './pages/newHiring/FinOpsTeamLead'
import SeniorAccountingAssociate from './pages/newHiring/SeniorAccountingAssociate'
import AccountingFresher from './pages/newHiring/AccountingFresher'
import AuditAssuranceLead from './pages/newHiring/AuditAssuranceLead'
import VPOperations from './pages/newHiring/VPOperations'
import TaxAdvisor from './pages/newHiring/TaxAdvisor'
import FPAAnalyst from './pages/newHiring/FPAAnalyst'
import VasRevenueVendorPartnershipsExecutive from './pages/newHiring/VasRevenueVendorPartnershipsExecutive'
import OutboundSalesIndia from './pages/newHiring/OutboundSalesIndia'
import EngineeringLead from './pages/newHiring/EngineeringLead'
import DevOpsEngineer from './pages/newHiring/DevOpsEngineer'
import SeniorTalentAcquisition from './pages/newHiring/SeniorTalentAcquisition'
import TaxIntern from './pages/newHiring/TaxIntern'
import FinanceIntern from './pages/newHiring/FinanceIntern'
import Onboarding from './pages/Onboarding'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="*" element={
            <>
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/jobs" element={<Navigate replace to="/virtual-drive" />} />
                  <Route path="/life" element={<Life />} />
                  <Route path="/finops-drive" element={<FinOpsDrive />} />
                  <Route path="/virtual-drive" element={<VirtualDrive />} />
                  <Route path="/virtual-drive/field-sales-executive" element={<FieldSalesExecutive />} />
                  <Route path="/virtual-drive/partnerships-manager" element={<PartnershipsManager />} />
                  <Route path="/virtual-drive/appointment-setter" element={<AppointmentSetter />} />
                  <Route path="/virtual-drive/partnership-appointment-setter" element={<PartnershipAppointmentSetter />} />
                  <Route path="/virtual-drive/sr-software-engineer" element={<SrFullStackDeveloper />} />
                  <Route path="/virtual-drive/sr-full-stack-developer" element={<SrFullStackDeveloper />} />
                  <Route path="/virtual-drive/jr-web-developer" element={<JrWebDeveloper />} />
                  <Route path="/virtual-drive/content-pr-manager" element={<ContentPRManager />} />
                  <Route path="/virtual-drive/event-pr-manager" element={<EventPRManager />} />
                  <Route path="/virtual-drive/content-writer-arabic" element={<ContentWriterArabic />} />
                  <Route path="/virtual-drive/sdr-manager" element={<SDRManager />} />
                  <Route path="/virtual-drive/growth-ui-ux-designer" element={<GrowthUIUXDesigner />} />
                  <Route path="/virtual-drive/video-producer-editor" element={<VideoProducerEditor />} />
                  <Route path="/finops-drive/financial-controller" element={<FinancialController />} />
                  <Route path="/finops-drive/finops-account-manager" element={<FinOpsAccountManager />} />
                  <Route path="/finops-drive/finops-team-lead" element={<FinOpsTeamLead />} />
                  <Route path="/finops-drive/senior-accounting-associate" element={<SeniorAccountingAssociate />} />
                  <Route path="/finops-drive/accounting-fresher" element={<AccountingFresher />} />
                  <Route path="/finops-drive/audit-assurance-lead" element={<AuditAssuranceLead />} />
                  <Route path="/finops-drive/vp-operations" element={<VPOperations />} />
                  <Route path="/finops-drive/tax-advisor" element={<TaxAdvisor />} />
                  <Route path="/finops-drive/fpa-analyst" element={<FPAAnalyst />} />
                  <Route path="/finops-drive/tax-intern" element={<TaxIntern />} />
                  <Route path="/finops-drive/finance-intern" element={<FinanceIntern />} />
                  <Route path="/virtual-drive/vas-revenue-vendor-partnerships-executive" element={<VasRevenueVendorPartnershipsExecutive />} />
                  <Route path="/virtual-drive/outbound-sales-india-business-development" element={<OutboundSalesIndia />} />
                  <Route path="/virtual-drive/engineering-lead" element={<EngineeringLead />} />
                  <Route path="/virtual-drive/devops-engineer-part-time" element={<DevOpsEngineer />} />
                  <Route path="/virtual-drive/senior-talent-acquisition" element={<SeniorTalentAcquisition />} />
                  <Route path="/new-hiring" element={<VirtualDrive />} />
                  <Route path="/new-hiring/vas-revenue-vendor-partnerships-executive" element={<VasRevenueVendorPartnershipsExecutive />} />
                  <Route path="/new-hiring/outbound-sales-india-business-development" element={<OutboundSalesIndia />} />
                  <Route path="/new-hiring/engineering-lead" element={<EngineeringLead />} />
                  <Route path="/new-hiring/devops-engineer-part-time" element={<DevOpsEngineer />} />
                  <Route path="/new-hiring/senior-talent-acquisition" element={<SeniorTalentAcquisition />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
