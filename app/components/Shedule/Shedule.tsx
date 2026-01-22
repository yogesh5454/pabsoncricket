"use client";

import React from "react";
import { MapPin, Play, Tv } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export const Schedule = () => {
  const matches = [
    {
      id: 1,
      date: "Magh 24",
      time: "09:30 AM",
      t1: "Lions",
      t2: "Warriors",
      v: "T.U. Ground",
      liveLink: "https://youtube.com/live/example1",
      status: "Live",
    },
    {
      id: 2,
      date: "Magh 24",
      time: "01:30 PM",
      t1: "Riders",
      t2: "Titans",
      v: "T.U. Ground",
      liveLink: "",
      status: "Upcoming",
    },
    {
      id: 3,
      date: "Magh 25",
      time: "09:30 AM",
      t1: "Thunder",
      t2: "Panthers",
      v: "Mulpani",
      liveLink: "",
      status: "Upcoming",
    },
  ];

  const openLive = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="fixtures"
      className="py-24 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-2 text-sm">
              Matchday
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">
              Upcoming Fixtures
            </h3>
          </div>

          <Button className="hidden md:flex bg-red-600 hover:bg-red-700 text-white rounded-full px-6 gap-2">
            <Tv className="h-4 w-4" />
            Broadcast Schedule
          </Button>
        </div>

        {/* Matches */}
        <div className="space-y-4">
          {matches.map((m) => (
            <div
              key={m.id}
              className="group bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Date / Time */}
                <div className="flex lg:flex-col items-center gap-2 min-w-[120px] text-center">
                  <span className="font-black text-2xl text-slate-900">
                    {m.date}
                  </span>
                  <span className="text-sm font-bold text-slate-400">
                    {m.time}
                  </span>
                </div>

                {/* Match */}
                <div className="flex-1 w-full">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 text-right">
                      <span className="block font-black text-xl md:text-3xl text-slate-900 uppercase">
                        {m.t1}
                      </span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
                        <span className="font-black text-slate-300 text-sm">
                          VS
                        </span>
                      </div>

                      {m.status === "Live" && (
                        <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">
                          LIVE
                        </span>
                      )}
                    </div>

                    <div className="flex-1 text-left">
                      <span className="block font-black text-xl md:text-3xl text-slate-900 uppercase">
                        {m.t2}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Venue / Action */}
                <div className="flex flex-col sm:flex-row items-center gap-4 lg:min-w-[260px] justify-end">
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <MapPin className="h-4 w-4" />
                    {m.v}
                  </div>

                  {m.liveLink ? (
                    <Button
                      onClick={() => openLive(m.liveLink)}
                      className="bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg shadow-red-600/20 font-bold w-full sm:w-auto"
                    >
                      <Play className="h-4 w-4 mr-2 fill-current" />
                      Watch Live
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      disabled
                      className="bg-slate-100 text-slate-400 border-slate-200 font-bold w-full sm:w-auto cursor-not-allowed"
                    >
                      Upcoming
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="rounded-full px-8 py-6 font-bold border-slate-300  "
          >
            View Full Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};
