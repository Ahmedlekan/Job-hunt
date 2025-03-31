import {BrowserRouter as Router,  Routes, Route} from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutUsPage from "./pages/AboutUsPage"
import Technology from "./pages/Technology"
import Transformation from "./pages/Transformation"
import Quantitative from "./pages/Quantitative"
import Finance from "./pages/Finance"
import Information from "./pages/Information"
import Risk from "./pages/Risk"
import Sales from "./pages/Sales"
import Operations from "./pages/Operations"
import ContactUs from "./pages/ContactUs"
import Careers from "./pages/Careers"
import Clients from "./pages/Clients"
import SubmitCv from "./pages/SubmitCv"
import JobSearchPage from "./pages/JobSearchPage"
import Layout from "./components/layout/Layout"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="technology" element={<Technology />} />
          <Route path="change-and-transformation" element={<Transformation />} />
          <Route path="quantitative-trading-and-research" element={<Quantitative />} />
          <Route path="finance" element={<Finance />} />
          <Route path="risk-governance" element={<Risk />} />
          <Route path="sales/marketing/hr" element={<Sales />} />
          <Route path="operations" element={<Operations />} />
          <Route path="information-and-cyber-security" element={<Information />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="careers" element={<Careers />} />
          <Route path="clients" element={<Clients />} />
          <Route path="cv-drop" element={<SubmitCv />} />
          <Route path="jobs" element={<JobSearchPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
