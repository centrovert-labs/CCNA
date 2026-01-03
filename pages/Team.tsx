
import React from 'react';
import { TEAM } from '../constants';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-950 mb-6 serif-font">Meet Our Attorneys</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our team brings together decades of specialized experience and a shared commitment 
            to legal excellence and client success.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TEAM.map((member) => (
              <div key={member.id} className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={member.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={member.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <div className="flex space-x-4">
                      <a href="#" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-900 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-900 transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1 serif-font">{member.name}</h3>
                  <span className="text-blue-700 font-bold text-sm uppercase tracking-widest mb-4 inline-block">{member.role}</span>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                    {member.bio} Recognized for their dedication to precision and results-driven advocacy.
                  </p>
                  <button className="flex items-center text-sm font-bold text-slate-900 hover:text-blue-900 transition-colors group/btn">
                    View Full Profile <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-6 serif-font">Join Our Team</h2>
          <p className="text-slate-600 mb-10">
            We are always looking for exceptional legal minds and support staff who are 
            passionate about making a difference.
          </p>
          <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors">
            View Current Openings
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team;
