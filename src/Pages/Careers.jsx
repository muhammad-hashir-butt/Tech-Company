import React from "react";
import { Briefcase, DollarSign, Users, Globe, Clock, Award } from "lucide-react";

const Careers = () => {
  const openings = [
    { title: "Senior React Developer", type: "Full-time", location: "Remote", department: "Engineering" },
    { title: "UI/UX Designer", type: "Full-time", location: "Karachi, PK", department: "Design" },
    { title: "DevOps Engineer", type: "Contract", location: "Remote", department: "Operations" },
    { title: "Project Manager", type: "Full-time", location: "Lahore, PK", department: "Management" },
    { title: "QA Engineer", type: "Full-time", location: "Islamabad, PK", department: "Engineering" },
    { title: "Marketing Specialist", type: "Part-time", location: "Remote", department: "Marketing" }
  ];

  const benefits = [
    { icon: <DollarSign />, title: "Competitive Salary", desc: "Industry-leading compensation packages" },
    { icon: <Clock />, title: "Flexible Hours", desc: "Work when you're most productive" },
    { icon: <Globe />, title: "Remote Work", desc: "Work from anywhere in the world" },
    { icon: <Award />, title: "Career Growth", desc: "Regular promotions and skill development" },
    { icon: <Users />, title: "Great Team", desc: "Collaborative and supportive environment" },
    { icon: <Briefcase />, title: "Latest Tech", desc: "Work with cutting-edge technologies" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Join Our <span className="text-blue-600">Team</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build the future with us. We're looking for passionate individuals who want to make an impact.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition"
              >
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <span className="flex items-center gap-2 text-gray-600">
                        <Briefcase size={16} />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-2 text-gray-600">
                        <Globe size={16} />
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture */}
        <div className="mt-20 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At HashirSoft, we believe in creating an environment where creativity flourishes 
                and innovation thrives. We value transparency, collaboration, and continuous learning.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Join a team that celebrates diversity, encourages new ideas, and supports 
                your professional growth every step of the way.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "4.8/5", label: "Employee Satisfaction" },
                { value: "100+", label: "Team Members" },
                { value: "30%", label: "Women in Tech" },
                { value: "10+", label: "Nationalities" }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;