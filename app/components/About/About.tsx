'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Shield, Star, Award, Target, Image } from 'lucide-react';

export const About = () => {
  const images = [
    { label: 'Training Session', height: 'h-40 md:h-48', src:'/three/three_1.jpeg' },
    { label: 'Match Crowd', height: 'h-40 md:h-48', src:'/home.png' },
    { label: 'Victory Moment', height: 'h-80 md:h-[26rem]', src:'/three/three_2.jpeg' },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-green-600 font-bold uppercase tracking-widest mb-4">
              The Tournament
            </h2>

            <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-none">
              FOR THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">
                LOVE OF THE GAME
              </span>
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              PABSON Cricket League U-15 isn't just about cricket; it's about
              character. Organized by Kathmandu PABSON in collaboration with the
              National Sports Council, this tournament provides a professional
              platform for student-athletes to shine.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Integrity',
                  desc: 'Fair play above all',
                },
                { icon: Star, title: 'Excellence', desc: 'Pushing limits' },
                {
                  icon: Award,
                  title: 'Recognition',
                  desc: 'National pathways',
                },
                { icon: Target, title: 'Focus', desc: 'Disciplined growth' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-blue-900" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Area (Placeholder Ready) */}
          <div className="flex-1 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4 items-center">
              <div className="space-y-4 transform translate-y-8 md:translate-y-12">
                {images.slice(0, 2).map((img, i) => (
                  <img
                    key={i}
                    className={`w-full ${img.height} object-cover  rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-slate-400`}
                    src={img.src}
                  />
                 
                ))}
              </div>

              <div>
                <img
                  className={`w-auto ${images[2].height} rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-slate-400`}
                  src={images[2].src}
                />
                  
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-500/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
