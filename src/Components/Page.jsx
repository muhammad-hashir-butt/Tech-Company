import React, { useState } from "react";
import Navbar from "./Navbar";

import WebDevelopment from "./WebDevelopment";
import MobileApps from "./MobileApps";
import UIDesign from "./UIDesign";
import CloudSolutions from "./CloudSolutions";
import DatabaseManagement from "./DatabaseManagement";
import CyberSecurity from "./CyberSecurity";

const Page = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      <Navbar setActiveService={setActiveService} />

      <div className="p-10 max-w-4xl mx-auto">
        {!activeService && (
          <p className="text-gray-500 text-center text-lg">
            Kisi service pe click karo 👆
          </p>
        )}

        {activeService === "web" && <WebDevelopment />}
        {activeService === "mobile" && <MobileApps />}
        {activeService === "design" && <UIDesign />}
        {activeService === "cloud" && <CloudSolutions />}
        {activeService === "database" && <DatabaseManagement />}
        {activeService === "security" && <CyberSecurity />}
      </div>
    </>
  );
};

export default Page;
