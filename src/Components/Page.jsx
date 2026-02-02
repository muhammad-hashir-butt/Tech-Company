import React, { useState } from "react";
import Navbar from "./Navbar";

const Page = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      <Navbar setActiveService={setActiveService} />

      <div className="p-10">
        {!activeService && (
          <p className="text-gray-500">
            Kisi service pe click karo 👆
          </p>
        )}

        {activeService === "web" && (
          <div>
            <h2 className="text-2xl font-bold">Web Development</h2>
            <p>React, Next.js, Tailwind, APIs, etc</p>
          </div>
        )}

        {activeService === "mobile" && (
          <div>
            <h2 className="text-2xl font-bold">Mobile Apps</h2>
            <p>Android, iOS, Flutter, React Native</p>
          </div>
        )}

        {activeService === "design" && (
          <div>
            <h2 className="text-2xl font-bold">UI / UX Design</h2>
            <p>Figma, Prototypes, User Flow</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
