
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Lightbulb, Palette, X, Award, GraduationCap, BookOpen, Users } from 'lucide-react';
import { TEAM } from '../constants';
import { TeamMember } from '../types';

const About: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const WHATSAPP_LINK = "https://wa.me/6562227500";

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-950 mb-6 serif-font text-center">About Us</h1>
          <div className="w-24 h-1 bg-[#4A90E2] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6 uppercase tracking-widest text-sm">Who We Are</h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-8">
                Chris Chua & Associates LLC was established more than 10 years ago by accomplished down-to-earth lawyers because they believed in doing things differently. 
                We offer a sophisticated range of legal services, together with the skill and experience you would expect from a large, international law firm. 
                We think out of the box and provide our clients exceptional service combined with competitive fee rates.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6 uppercase tracking-widest text-sm">Our Mission</h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                Our mission is to be a key strategic partner. We believe that the law doesn’t operate in a vacuum. We understand the complexity and challenges – be it legal, business or personal. 
                With access to a global network of legal, accounting and financial professionals, we ensure that your interests are protected and continue to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-16 serif-font uppercase tracking-widest">Our Approach is Simple</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#4A90E2] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <Brain className="w-10 h-10" />
              </div>
              <p className="text-[#4A90E2] font-medium text-lg max-w-[200px]">Personal. Honest. Decisive</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#4A90E2] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <Lightbulb className="w-10 h-10" />
              </div>
              <p className="text-[#4A90E2] font-medium text-lg max-w-[200px]">Frank, insightful analysis & practical solutions</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#4A90E2] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <Palette className="w-10 h-10" />
              </div>
              <p className="text-[#4A90E2] font-medium text-lg max-w-[200px]">We don't believe in doing anything less</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 serif-font">Our Leadership</h2>
            <p className="text-slate-600">Dedicated professionals at your service.</p>
          </div>

          <div className="space-y-24">
            {TEAM.map((member, index) => (
              <div key={member.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-4 border-2 border-slate-200 rounded-lg -z-10 group-hover:border-[#4A90E2] transition-colors duration-500"></div>
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full max-w-md aspect-square object-cover shadow-2xl rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-8 bg-slate-50 lg:bg-transparent rounded-xl">
                  <h3 className="text-3xl font-bold text-slate-900 mb-2 serif-font">{member.name}</h3>
                  <p className="text-[#4A90E2] font-bold uppercase tracking-widest text-sm mb-6">{member.role}</p>
                  <p className="text-slate-700 text-lg leading-relaxed mb-8">
                    {member.bio}
                  </p>
                  <button 
                    onClick={() => openModal(member)}
                    className="inline-flex items-center px-8 py-3 bg-[#4A90E2] text-white font-bold rounded-sm hover:bg-blue-600 transition-all uppercase tracking-widest text-xs shadow-md active:scale-95"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Profile Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl bg-white rounded-lg shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-slate-100 flex items-center justify-between px-6 py-4 md:px-10">
              <div>
                <h2 className="text-2xl font-bold text-blue-950 serif-font">{selectedMember.name}</h2>
                <p className="text-[#4A90E2] font-bold uppercase tracking-widest text-[10px]">{selectedMember.role}</p>
              </div>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-blue-950 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-grow overflow-y-auto p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Side: Photo & Quick Lists */}
                <div className="lg:col-span-4 space-y-8">
                  <img 
                    src={selectedMember.imageUrl} 
                    alt={selectedMember.name} 
                    className="w-full aspect-[4/5] object-cover rounded-sm shadow-lg mb-8"
                  />

                  {selectedMember.qualifications && (
                    <div className="space-y-4">
                      <h4 className="flex items-center text-blue-900 font-bold uppercase tracking-wider text-xs">
                        <GraduationCap className="w-4 h-4 mr-2" /> Qualifications
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-600 border-l border-slate-200 pl-4">
                        {selectedMember.qualifications.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedMember.memberships && (
                    <div className="space-y-4">
                      <h4 className="flex items-center text-blue-900 font-bold uppercase tracking-wider text-xs">
                        <Users className="w-4 h-4 mr-2" /> Memberships
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-600 border-l border-slate-200 pl-4">
                        {selectedMember.memberships.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Side: Detailed Bio & Publications */}
                <div className="lg:col-span-8 space-y-10">
                  <div className="prose prose-blue max-w-none">
                    <h3 className="text-blue-950 text-xl font-bold serif-font mb-4">Biography</h3>
                    <div className="text-slate-700 leading-relaxed whitespace-pre-wrap text-base">
                      {selectedMember.fullBio || selectedMember.bio}
                    </div>
                  </div>

                  {selectedMember.publications && (
                    <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-100">
                      <h3 className="flex items-center text-blue-950 text-xl font-bold serif-font mb-6">
                        <BookOpen className="w-5 h-5 mr-3 text-[#4A90E2]" /> Publications
                      </h3>
                      <ul className="space-y-4">
                        {selectedMember.publications.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-slate-50 border-t border-slate-100 px-6 py-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-500 text-center sm:text-left">Interested in working with {selectedMember.name.split(' ')[0]}?</p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-950 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-all shadow-lg text-center w-full sm:w-auto"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Contact background"
          />
          <div className="absolute inset-0 bg-[#0a192f]/85"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 serif-font uppercase tracking-tight">Ready to take the next step?</h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl mb-12 leading-relaxed font-light">
            Whether you're starting a business, handling a commercial dispute, or need expert legal advice—our 
            experienced team is here to help. Get in touch with us today and let's discuss how we can support your business goals.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#4A90E2] text-white px-12 py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-sm hover:bg-blue-600 transition-all shadow-xl">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
