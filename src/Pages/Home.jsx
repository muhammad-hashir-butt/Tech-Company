import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section 
      className="relative min-h-screen text-white overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.9) 100%),
          url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto w-full">
          {/* Badge */}
          <div className="animate-float inline-block mb-8 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/40 rounded-full backdrop-blur-sm">
            <span className="text-blue-300 text-sm font-semibold">
              🚀 Innovative Tech Solutions
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
            Building{" "}
            <span className="gradient-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:200%_auto] bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
            We transform ideas into powerful digital experiences. From startups to enterprises, 
            we deliver cutting-edge web, mobile, and cloud solutions that drive business growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up animation-delay-400">
            <Link
              to="/contact"
              className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-white font-bold text-base sm:text-lg shadow-xl shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              Start Your Project
              <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300 inline-block">→</span>
            </Link>
            
            <Link
              to="/projects"
              className="group border-2 border-white/20 hover:border-white/40 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Our Work
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 inline-block">↗</span>
              </span>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
            {[
              { 
                value: "150+", 
                label: "Projects Completed",
                icon: "📊",
                color: "text-blue-400"
              },
              { 
                value: "98%", 
                label: "Client Satisfaction",
                icon: "⭐",
                color: "text-green-400"
              },
              { 
                value: "50+", 
                label: "Expert Team",
                icon: "👨‍💻",
                color: "text-purple-400"
              },
              { 
                value: "7+", 
                label: "Years Experience",
                icon: "🎯",
                color: "text-orange-400"
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 sm:p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`text-3xl mb-2 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 sm:mt-16 animate-fade-in-up animation-delay-800">
            <div className="inline-flex flex-col items-center gap-2">
              <span className="text-gray-400 text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .gradient-text {
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;