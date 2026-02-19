import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services/Services";
import WebDevelopment from "./Pages/Services/WebDevelopment";
import MobileDevelopment from "./Pages/Services/MobileDevelopment";
import UiUxDesign from "./Pages/Services/UiUxDesign";
import CloudSolutions from "./Pages/Services/CloudSolutions";
import CyberSecurity from "./Pages/Services/CyberSecurity";
import DatabaseManagement from "./Pages/Services/DatabaseManagement";
import Projects from "./Pages/Projects";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* SERVICES */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-apps" element={<MobileDevelopment />} />
          <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/cyber-security" element={<CyberSecurity />} />
          <Route path="/services/database-management" element={<DatabaseManagement />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
