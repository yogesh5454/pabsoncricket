"use client";

import React from "react";
import { ArrowRight, MapPin, Play, Trophy, Tv } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

type ScheduleProps = {
  showAll?: boolean;
};

export const Schedule = ({ showAll = false }: ScheduleProps) => {
  const allMatches = [
    { id: 1, date: "Magh 24", time: "09:30 AM", t1: "Lions", t2: "Warriors", v: "T.U. Ground", liveLink: "https://youtube.com/live/example1", status: "Live" },
    { id: 2, date: "Magh 24", time: "01:30 PM", t1: "Riders", t2: "Titans", v: "T.U. Ground", liveLink: "", status: "Upcoming" },
    { id: 3, date: "Magh 25", time: "09:30 AM", t1: "Thunder", t2: "Panthers", v: "Mulpani", liveLink: "", status: "Upcoming" },
    { id: 4, date: "Magh 26", time: "01:30 PM", t1: "Kings", t2: "Royals", v: "Mulpani", liveLink: "", status: "Upcoming" },
    { id: 5, date: "Magh 27", time: "09:30 AM", t1: "Eagles", t2: "Falcons", v: "T.U. Ground", liveLink: "", status: "Upcoming" },
    { id: 6, date: "Magh 28", time: "01:30 PM", t1: "Sharks", t2: "Wolves", v: "Mulpani", liveLink: "", status: "Upcoming" },
    { id: 7, date: "Magh 29", time: "09:30 AM", t1: "Knights", t2: "Giants", v: "T.U. Ground", liveLink: "", status: "Upcoming" },
    { id: 8, date: "Falgun 1", time: "01:30 PM", t1: "Rangers", t2: "Pirates", v: "Mulpani", liveLink: "", status: "Upcoming" },
    { id: 9, date: "Falgun 2", time: "09:30 AM", t1: "Titans", t2: "Royals", v: "T.U. Ground", liveLink: "", status: "Upcoming" },
    { id: 10, date: "Falgun 3", time: "01:30 PM", t1: "Panthers", t2: "Lions", v: "Mulpani", liveLink: "", status: "Upcoming" },
  ];

  const matches = showAll ? allMatches : allMatches.slice(0, 3);

  const openLive = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={`py-24 ${showAll ? "min-h-screen py-32" : "bg-white border-y border-slate-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-bold text-xs mb-2">
                                <Trophy className="h-3 w-3" />
                                <span>MATCH RESULTS</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-1">
                                {showAll ? "All Results" : "Recent Results"}
                            </h2>
                            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
                                Stay updated with the latest match outcomes and highlights
                            </p>
                        </div>

         
        </div>

        {/* Matches */}
        <div className="grid gap-6 md:grid-cols-2">
          {matches.map((m) => (
            <div key={m.id} className="bg-white border border-slate-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

              {/* Top: Date and Status */}
              <div className="flex justify-between items-center bg-slate-50 px-6 py-3 border-b border-slate-100">
                <div className="text-center">
                  <p className="font-black text-xl">{m.date}</p>
                  <p className="text-sm text-slate-500">{m.time}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${m.status === "Live" ? "bg-red-100 text-red-700" : "bg-slate-100 text-slate-500"}`}>
                  {m.status}
                </span>
              </div>

              {/* Middle: Teams */}
              <div className="flex items-center justify-between px-6 py-8 border-b border-slate-100">
                <span className="font-bold text-lg md:text-xl uppercase">{m.t1}</span>
                <span className="text-slate-300 font-black">VS</span>
                <span className="font-bold text-lg md:text-xl uppercase">{m.t2}</span>
              </div>

              {/* Bottom: Venue + Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-3">
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <MapPin className="h-4 w-4" />
                  {m.v}
                </div>
                {m.liveLink ? (
                  <Button onClick={() => openLive(m.liveLink)} className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl w-full sm:w-auto flex items-center justify-center gap-2">
                    <Play className="h-4 w-4" /> Watch Live
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="bg-slate-100 text-slate-400 border-slate-200 font-bold w-full sm:w-auto cursor-not-allowed">
                    Upcoming
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        {!showAll && (
          <div className="mt-12 text-center">
            <Link href="/schedule">
              <Button variant="outline" className="rounded-full px-8 py-6 font-bold border-slate-300">
                View Full Schedule <ArrowRight />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
