import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import PersonalLoan from "./pages/PersonalLoan";
import PersonalLoanAdvisory from "./pages/PersonalLoanAdvisory";
import Services from "./pages/Services";
import LoanDetails from "./pages/LoanDetails";
import Apply from "./pages/Apply";
import Dashboard from "./pages/Dashboard";
import Success from "./pages/Success";
import EligibilityModal from "./components/personal-loan/EligibilityModal";

function App() {
  const [globalModalOpen, setGlobalModalOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setGlobalModalOpen(true)} />

      <main>
        <Routes>
          <Route path="/" element={<PersonalLoan />} />
          <Route path="/home" element={<Home />} />
          <Route path="/personal-loan" element={<PersonalLoan />} />
          <Route path="/personal-loan-advisory" element={<PersonalLoanAdvisory />} />
          <Route path="/services" element={<Services />} />
          <Route path="/loan-details" element={<LoanDetails />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>

      <Footer />

      <EligibilityModal
        isOpen={globalModalOpen}
        onClose={() => setGlobalModalOpen(false)}
      />
    </>
  );
}

export default App;