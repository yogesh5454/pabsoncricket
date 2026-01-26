import React from 'react';
import { Shield, Star, Award, Zap } from 'lucide-react';

export const Sponsors = () => {
  const sponsors = [
    {
      name: 'Global IME Bank',
      role: 'Banking Partner',
      color: 'bg-red-600',
      icon: Shield,
    },
    {
      name: 'Goldstar',
      role: 'Footwear Partner',
      color: 'bg-slate-900',
      icon: Zap,
    },
    {
      name: 'DishHome',
      role: 'Broadcast Partner',
      color: 'bg-yellow-500',
      icon: Star,
    },
    {
      name: 'CG Foods',
      role: 'Nutrition Partner',
      color: 'bg-orange-500',
      icon: Award,
    },
  ];

  return (
    <section id="sponsors" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-2 text-sm">
            Our Partners
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900">
            OFFICIAL SPONSORS
          </h3>
        </div>

        {/* Title Sponsor */}
        <div className="mb-20">
          <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-xs mb-6">
            Title Sponsor
          </p>

          <div className="max-w-4xl mx-auto bg-white border-2 border-slate-100 p-16 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center justify-center gap-8 hover:scale-105 transition-transform duration-500 cursor-pointer group">
            {/* Placeholder Logo */}
            <div className="flex items-center justify-center w-24 h-24 bg-blue-900 rounded-2xl group-hover:rotate-12 transition-transform duration-500">
              <Shield className="h-12 w-12 text-white" />
            </div>

            <div className="text-center md:text-left">
              <span className="block text-5xl md:text-6xl font-black tracking-tighter text-slate-900 leading-none">
                MAIN <span className="text-blue-900">BRAND</span>
              </span>
              <span className="text-slate-400 font-medium tracking-widest uppercase text-sm mt-2 block">
                The Future of Cricket
              </span>
            </div>
          </div>
        </div>

        {/* Other Sponsors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, i) => {
            const Icon = sponsor.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all cursor-pointer group"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white shadow-lg ${sponsor.color} group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <span className="font-black text-lg text-slate-900 mb-1">
                  {sponsor.name}
                </span>
                <p className="text-slate-400 text-[10px] uppercase font-bold">
                  {sponsor.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
