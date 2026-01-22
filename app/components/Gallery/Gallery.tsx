import React from "react";
import { Button } from "@/app/components/ui/button";
import { ArrowUpRight, Instagram } from "lucide-react";

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-2 text-sm">
              Media
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">
              HIGHLIGHTS
            </h3>
          </div>
          <Button className="bg-white text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-full shadow-sm">
            <Instagram className="mr-2 h-4 w-4" /> Follow on Instagram
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          {/* Featured */}
          <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-lg bg-slate-200 flex items-center justify-center">
            <span className="text-slate-400 font-bold text-lg">
              Featured Highlight
            </span>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
              <div>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                  FEATURED
                </span>
                <p className="text-white font-bold text-2xl">
                  Opening Ceremony
                </p>
              </div>
            </div>
          </div>

          {/* Small cards */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className="col-span-1 row-span-1 rounded-3xl bg-slate-200 shadow-md flex items-center justify-center"
            >
              <span className="text-slate-400 font-semibold text-sm">
                Highlight
              </span>
            </div>
          ))}

          {/* Wide card */}
          <div className="col-span-2 row-span-1 relative rounded-3xl bg-slate-200 shadow-md flex items-center justify-center">
            <span className="text-slate-400 font-semibold text-sm">
              Match Moments
            </span>

            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-slate-900 font-bold text-sm flex items-center gap-2">
                View Gallery <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
