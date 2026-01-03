
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const WHATSAPP_LINK = "https://wa.me/6562227500";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For this build, we follow the instruction to link to WhatsApp.
    // We open WhatsApp in a new tab.
    window.open(WHATSAPP_LINK, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-blue-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 serif-font">Contact Us</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Our doors are open to those seeking professional and ethical legal representation in Singapore. 
            Reach out to schedule your initial consultation today.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-950 mb-6 serif-font">Get in Touch</h2>
                <p className="text-slate-600 mb-8 max-w-md">
                  Whether you're looking for guidance on a complex corporate matter or personal legal counsel, 
                  our team is here to provide clarity and expert advocacy.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-4 rounded-xl text-blue-900 mr-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Office Location</h4>
                    <p className="text-slate-600">150 Changi Road, #03-05 Guthrie Building, Singapore 419973</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-4 rounded-xl text-blue-900 mr-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone & WhatsApp</h4>
                    <p className="text-slate-600">Main: +65 6222 7500</p>
                    <a 
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4A90E2] font-bold flex items-center mt-1 hover:underline"
                    >
                      <MessageSquare className="w-4 h-4 text-green-600 mr-2" />
                      WhatsApp: +65 6222 7500
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-4 rounded-xl text-blue-900 mr-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                    <p className="text-slate-600">talktous@ccnalaw.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-10">
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-green-600 text-white px-8 py-5 rounded-lg font-bold shadow-xl hover:bg-green-700 transition-all uppercase tracking-widest text-sm"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>Message us on WhatsApp</span>
                </a>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-xs">Office Hours</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                  <div>Monday - Friday:</div>
                  <div className="font-bold text-slate-900">9:00 AM - 6:00 PM (SGT)</div>
                  <div>Saturday & Sunday:</div>
                  <div className="font-bold text-slate-900 text-red-600">Closed / By Appointment</div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="relative">
              {submitted ? (
                <div className="bg-green-50 p-12 rounded-2xl border border-green-200 text-center animate-in zoom-in duration-300">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full text-green-600 mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Redirecting to WhatsApp</h3>
                  <p className="text-green-800 mb-8">
                    We've opened a direct channel to our legal associates on WhatsApp. 
                    If it didn't open automatically, please click the button below.
                  </p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold inline-block hover:bg-green-700">
                    Open WhatsApp Manually
                  </a>
                </div>
              ) : (
                <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
                  <h3 className="text-2xl font-bold text-blue-950 mb-8 serif-font">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                        <input required type="text" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                        <input required type="email" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Subject / Practice Area</label>
                      <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                        <option>General Inquiry</option>
                        <option>Civil Litigation</option>
                        <option>Corporate Law</option>
                        <option>Real Estate</option>
                        <option>Family Law (LPA/Wills)</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Message</label>
                      <textarea required rows={5} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Briefly describe your situation..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-green-600 text-white py-4 rounded-lg font-bold flex items-center justify-center hover:bg-green-700 transition-all shadow-lg shadow-green-900/20 group">
                      Send WhatsApp Message <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <p className="text-[10px] text-slate-400 text-center italic mt-4">
                      Note: This will open WhatsApp on your device.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center space-x-4 border border-blue-100">
            <MapPin className="w-8 h-8 text-blue-900" />
            <div>
              <h4 className="font-bold text-blue-950">Chris Chua & Associates LLC</h4>
              <p className="text-sm text-slate-600">Guthrie Building, Singapore</p>
            </div>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1920&h=400&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60" alt="Singapore Changi Area" />
      </section>
    </div>
  );
};

export default Contact;
