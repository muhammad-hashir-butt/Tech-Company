import React from "react";
import { Code, Smartphone, Palette, Cloud, Database, Shield } from "lucide-react";

const Services = () => {
  const services = [
    { icon: <Code />, title: "Custom Web Development", desc: "Scalable web applications using React, Next.js, Node.js, and modern frameworks." },
    { icon: <Smartphone />, title: "Mobile App Development", desc: "iOS & Android apps with React Native and Flutter for cross-platform excellence." },
    { icon: <Palette />, title: "UI/UX Design", desc: "User-centered designs that combine aesthetics with exceptional functionality." },
    { icon: <Cloud />, title: "Cloud Solutions", desc: "AWS, Azure, and Google Cloud deployment, migration, and optimization." },
    { icon: <Database />, title: "Database Management", desc: "SQL/NoSQL database design, optimization, and maintenance." },
    { icon: <Shield />, title: "Cyber Security", desc: "Security audits, penetration testing, and secure development practices." }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Our <span className="text-blue-600">Services</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-20 pt-20 border-t">
          <h3 className="text-3xl font-bold text-center mb-12">Our Development Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Requirements analysis" },
              { step: "02", title: "Design", desc: "Wireframes & prototyping" },
              { step: "03", title: "Development", desc: "Agile implementation" },
              { step: "04", title: "Deployment", desc: "Testing & launch" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="font-bold text-lg mb-2">{process.title}</h4>
                <p className="text-gray-500">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;