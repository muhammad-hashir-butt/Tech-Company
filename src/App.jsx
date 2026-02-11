import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services/Services";
import WebDevelopment from "./Pages/Services/WebDevelopment";
import MobileDevelopment from "./Pages/Services/MobileDevelopment";
import UiUxDesign from "./pages/Services/UiUxDesign";
import CloudSolutions from "./pages/Services/CloudSolutions";
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
          <Route path="/services/mobile-development" element={<MobileDevelopment />} />
          <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
