import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: <Mail />, title: "Email", detail: "info@hashirsoft.com", link: "mailto:info@hashirsoft.com" },
    { icon: <Phone />, title: "Phone", detail: "+92 300 1234567", link: "tel:+923001234567" },
    { icon: <MapPin />, title: "Location", detail: "Karachi, Pakistan", link: "https://maps.google.com" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Get In <span className="text-blue-600">Touch</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition"
                >
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                    <p className="text-gray-600 group-hover:text-blue-600 transition">{info.detail}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Office Hours */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
              <h3 className="font-bold text-xl mb-4">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Your Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="group w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-3"
                    >
                      <span>Send Message</span>
                      <Send className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Quick Response Note */}
            <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Phone className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Quick Response Guaranteed</h4>
                  <p className="text-gray-600 text-sm">
                    We typically respond to all inquiries within 2-4 hours during business days.
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;