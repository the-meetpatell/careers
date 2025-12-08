import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import Life from './pages/Life'
import VirtualDrive from './pages/VirtualDrive'
import FinOpsDrive from './pages/FinOpsDrive'
import FieldSalesExecutive from './pages/virtualDrive/FieldSalesExecutive'
import PartnershipsManager from './pages/virtualDrive/PartnershipsManager'
import AppointmentSetter from './pages/virtualDrive/AppointmentSetter'
import SrFullStackDeveloper from './pages/virtualDrive/SrFullStackDeveloper'
import JrWebDeveloper from './pages/virtualDrive/JrWebDeveloper'
import ContentPRManager from './pages/virtualDrive/ContentPRManager'
import EventPRManager from './pages/virtualDrive/EventPRManager'
import MarketingOpsCRMManager from './pages/virtualDrive/MarketingOpsCRMManager'
import ContentWriterEnglish from './pages/virtualDrive/ContentWriterEnglish'
import ContentWriterArabic from './pages/virtualDrive/ContentWriterArabic'
import FinancialController from './pages/virtualDrive/FinancialController'
import FinOpsAccountManager from './pages/virtualDrive/FinOpsAccountManager'
import FinOpsTeamLead from './pages/virtualDrive/FinOpsTeamLead'
import SeniorAccountingAssociate from './pages/virtualDrive/SeniorAccountingAssociate'
import JuniorAccountingAssociate from './pages/virtualDrive/JuniorAccountingAssociate'
import AccountingFresher from './pages/virtualDrive/AccountingFresher'
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
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/jobs/:id" element={<JobDetail />} />
                  <Route path="/life" element={<Life />} />
                  <Route path="/finops-career-drive" element={<FinOpsDrive />} />
                  <Route path="/virtual-drive" element={<VirtualDrive />} />
                  <Route path="/virtual-drive/field-sales-executive" element={<FieldSalesExecutive />} />
                  <Route path="/virtual-drive/partnerships-manager" element={<PartnershipsManager />} />
                  <Route path="/virtual-drive/appointment-setter" element={<AppointmentSetter />} />
                  <Route path="/virtual-drive/sr-software-engineer" element={<SrFullStackDeveloper />} />
                  <Route path="/virtual-drive/sr-full-stack-developer" element={<SrFullStackDeveloper />} />
                  <Route path="/virtual-drive/jr-web-developer" element={<JrWebDeveloper />} />
                  <Route path="/virtual-drive/content-pr-manager" element={<ContentPRManager />} />
                  <Route path="/virtual-drive/event-pr-manager" element={<EventPRManager />} />
                  <Route path="/virtual-drive/marketing-ops-crm-manager" element={<MarketingOpsCRMManager />} />
                  <Route path="/virtual-drive/content-writer-english" element={<ContentWriterEnglish />} />
                  <Route path="/virtual-drive/content-writer-arabic" element={<ContentWriterArabic />} />
                  <Route path="/virtual-drive/financial-controller" element={<FinancialController />} />
                  <Route path="/virtual-drive/finops-account-manager" element={<FinOpsAccountManager />} />
                  <Route path="/virtual-drive/finops-team-lead" element={<FinOpsTeamLead />} />
                  <Route path="/virtual-drive/senior-accounting-associate" element={<SeniorAccountingAssociate />} />
                  <Route path="/virtual-drive/junior-accounting-associate" element={<JuniorAccountingAssociate />} />
                  <Route path="/virtual-drive/accounting-fresher" element={<AccountingFresher />} />
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
