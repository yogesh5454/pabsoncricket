'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Play,
  Trophy,
  Calendar,
  Clock,
  Award,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../ui/button';

type ResultItem = {
  id: number;
  date: string;
  time: string;
  team1: string;
  team2: string;
  score1?: string;
  score2?: string;
  winner?: string;
  manOfTheMatch?: string;
  venue: string;
  highlightLink?: string;
  summary?: string;
};

type ResultsProps = {
  showAll?: boolean;
};

export const Results = ({ showAll = false }: ResultsProps) => {
  const allResults: ResultItem[] = [
    {
      id: 1,
      date: 'Magh 24',
      time: '09:30 AM',
      team1: 'Lions',
      team2: 'Warriors',
      score1: '145/4',
      score2: '140/9',
      winner: 'Lions',
      manOfTheMatch: 'John Doe',
      venue: 'T.U. Ground',
      highlightLink: 'https://youtube.com/live/example1',
      summary: 'Lions won by 5 runs',
    },
    {
      id: 2,
      date: 'Magh 24',
      time: '01:30 PM',
      team1: 'Riders',
      team2: 'Titans',
      venue: 'T.U. Ground',
    },
    {
      id: 3,
      date: 'Magh 25',
      time: '09:30 AM',
      team1: 'Thunder',
      team2: 'Panthers',
      score1: '120/8',
      score2: '121/5',
      winner: 'Panthers',
      manOfTheMatch: 'Mike Ross',
      venue: 'Mulpani',
      summary: 'Panthers won by 5 wickets',
    },
    {
      id: 4,
      date: 'Magh 26',
      time: '01:30 PM',
      team1: 'Kings',
      team2: 'Royals',
      venue: 'Mulpani',
    },
    {
      id: 5,
      date: 'Magh 27',
      time: '09:30 AM',
      team1: 'Eagles',
      team2: 'Falcons',
      score1: '130/7',
      score2: '135/6',
      winner: 'Falcons',
      manOfTheMatch: 'Sara Khan',
      venue: 'T.U. Ground',
      summary: 'Falcons won by 4 wickets',
    },
  ];

  // ✅ SAME LOGIC AS GALLERY
  const results = showAll ? allResults : allResults.slice(0, 3);

  return (
    <section
      className={`py-12 ${
        showAll
          ? 'min-h-screen bg-gradient-to-b from-slate-50 to-white'
          : 'bg-gradient-to-b from-white via-slate-50 to-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-bold text-xs mb-2">
            <Trophy className="h-3 w-3" />
            <span>MATCH RESULTS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-1">
            {showAll ? 'All Results' : 'Recent Results'}
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Stay updated with the latest match outcomes and highlights
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {results.map((r) => (
            <div
              key={r.id}
              className={`relative rounded-lg p-3 border-2 shadow-sm ${
                r.winner
                  ? 'border-emerald-200 bg-emerald-50/50'
                  : 'border-slate-200 bg-slate-50'
              }`}
            >
              {r.winner && (
                <span className="absolute top-2 right-2 text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                  <Trophy className="h-3 w-3" /> COMPLETED
                </span>
              )}

              {/* Info */}
              <div className="flex justify-between text-xs text-slate-600 mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {r.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {r.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {r.venue}
                </span>
              </div>

              {/* Teams */}
              <div className="flex justify-between items-center text-sm font-bold mb-2">
                <span>
                  {r.team1} {r.score1 && `(${r.score1})`}
                </span>
                <span className="text-slate-400">VS</span>
                <span>
                  {r.team2} {r.score2 && `(${r.score2})`}
                </span>
              </div>

              {/* Summary */}
              {r.winner ? (
                <div className="text-xs flex justify-between items-center mb-2">
                  <span>{r.summary}</span>
                  {r.manOfTheMatch && (
                    <span className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      <Award className="h-3 w-3" /> {r.manOfTheMatch}
                    </span>
                  )}
                </div>
              ) : (
                <p className="text-xs text-slate-500 mb-2">
                  🏏 Match Coming Soon
                </p>
              )}

              {/* Action */}
              <button
                disabled={!r.highlightLink}
                onClick={() =>
                  r.highlightLink && window.open(r.highlightLink, '_blank')
                }
                className="
    w-full flex items-center justify-center gap-2
    px-3 py-1.5 rounded-md text-xs font-semibold
    bg-blue-600 text-white
    hover:bg-blue-700
    transition-colors duration-200
    disabled:bg-blue-100 disabled:text-blue-400
    disabled:cursor-not-allowed
  "
              >
                <Play className="h-3 w-3" />
                {r.highlightLink ? 'Watch Highlights' : 'Match Pending'}
              </button>
            </div>
          ))}
        </div>

        {/* Footer CTA — SAME AS GALLERY */}
        {!showAll && (
          <div className="mt-12 text-center">
            <Link href="/results">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 font-bold border-slate-300"
              >
                View Full Results <ArrowRight />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Results;
