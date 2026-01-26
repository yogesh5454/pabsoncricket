'use client';

import React from 'react';
import { Shield, User } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';

export const Teams = () => {
  const teams = [
    {
      id: 1,
      name: 'Kathmandu Lions',
      school: 'Apex Academy',
      color: 'bg-orange-50',
      accent: 'text-orange-600',
      logoColor: 'bg-orange-500',
      coach: 'Ramesh Bhatta',
      squad: [
        { name: 'Aarav Sharma (C)', role: 'Batsman' },
        { name: 'Bibek Thapa', role: 'Bowler' },
        { name: 'Rohit Paudel', role: 'All-Rounder' },
        { name: 'Kushal Bhurtel', role: 'WK' },
        { name: 'Dipendra Airee', role: 'Batsman' },
        { name: 'Sandeep Lamichhane', role: 'Bowler' },
        { name: 'Sompal Kami', role: 'All-Rounder' },
        { name: 'Karan KC', role: 'All-Rounder' },
        { name: 'Gyanendra Malla', role: 'Batsman' },
        { name: 'Paras Khadka', role: 'All-Rounder' },
        { name: 'Binod Das', role: 'Bowler' },
        { name: 'Sharad Vesawkar', role: 'Batsman' },
        { name: 'Basant Regmi', role: 'Bowler' },
        { name: 'Shakti Gauchan', role: 'Bowler' },
        { name: 'Subash Khakurel', role: 'WK' },
      ],
    },
    {
      id: 2,
      name: 'Lalitpur Warriors',
      school: "St. Xavier's",
      color: 'bg-blue-50',
      accent: 'text-blue-600',
      logoColor: 'bg-blue-600',
      coach: 'Sunil Shrestha',
      squad: [
        { name: 'Player One (C)', role: 'Batsman' },
        { name: 'Player Two', role: 'Bowler' },
        { name: 'Player Three', role: 'All-Rounder' },
      ],
    },
    {
      id: 3,
      name: 'Bhaktapur Riders',
      school: 'Little Angels',
      color: 'bg-red-50',
      accent: 'text-red-600',
      logoColor: 'bg-red-500',
      coach: 'Anil Gurung',
      squad: [
        { name: 'Player A (C)', role: 'Batsman' },
        { name: 'Player B', role: 'Bowler' },
      ],
    },
    {
      id: 4,
      name: 'Himalayan Titans',
      school: 'Galaxy Public',
      color: 'bg-slate-50',
      accent: 'text-slate-800',
      logoColor: 'bg-slate-800',
      coach: 'Binod Das',
      squad: [],
    },
    {
      id: 5,
      name: 'Valley Thunder',
      school: 'Siddhartha School',
      color: 'bg-yellow-50',
      accent: 'text-yellow-600',
      logoColor: 'bg-yellow-500',
      coach: 'Paras Khadka',
      squad: [],
    },
    {
      id: 6,
      name: 'Peak Panthers',
      school: 'Modern School',
      color: 'bg-purple-50',
      accent: 'text-purple-600',
      logoColor: 'bg-purple-600',
      coach: 'Gyanendra Malla',
      squad: [],
    },
  ];

  return (
    <section id="teams" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-2 text-sm">
            The Competitors
          </h2>
          <h3 className="text-4xl font-black text-slate-900">All Teams</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <Dialog key={team.id}>
              <DialogTrigger asChild>
                <div className="cursor-pointer rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl ${team.logoColor}`}
                    >
                      {team.name[0]}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900">
                        {team.name}
                      </h4>
                      <p className="text-sm font-bold text-slate-500 flex items-center gap-1">
                        <Shield className="h-3 w-3" /> {team.school}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
                {/* Header */}
                <div className={`${team.logoColor} p-8 text-white`}>
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-black">
                      {team.name}
                    </DialogTitle>
                    <DialogDescription className="text-white/80">
                      {team.school}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                    <User className="h-4 w-4" /> Coach: {team.coach}
                  </div>
                </div>

                {/* Squad */}
                <div className="p-6 max-h-[60vh] overflow-y-auto">
                  {team.squad.length ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {team.squad.map((player, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-slate-50 border"
                        >
                          <p className="font-bold text-slate-900 text-sm">
                            {player.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {player.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-slate-400 font-bold">
                      Squad to be announced
                    </p>
                  )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t bg-slate-50">
                  <Button className="w-full rounded-xl font-bold">Close</Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};
