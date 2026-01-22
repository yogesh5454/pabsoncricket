"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

export const PointsTable = () => {
  const tableData = [
    { pos: 1, team: "Kathmandu Lions", p: 5, w: 4, l: 1, pts: 8, nrr: "+1.250" },
    { pos: 2, team: "Lalitpur Warriors", p: 5, w: 3, l: 2, pts: 6, nrr: "+0.850" },
    { pos: 3, team: "Bhaktapur Riders", p: 5, w: 3, l: 2, pts: 6, nrr: "+0.450" },
    { pos: 4, team: "Himalayan Titans", p: 5, w: 2, l: 3, pts: 4, nrr: "-0.120" },
    { pos: 5, team: "Valley Thunder", p: 5, w: 2, l: 3, pts: 4, nrr: "-0.550" },
    { pos: 6, team: "Peak Panthers", p: 5, w: 1, l: 4, pts: 2, nrr: "-1.100" },
  ];

  return (
    <section id="points-table" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-2 text-sm">
            Standings
          </h2>
          <h3 className="text-4xl font-black text-slate-900">
            Points Table
          </h3>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="text-center w-[80px]">Pos</TableHead>
                <TableHead>Team</TableHead>
                <TableHead className="text-center">P</TableHead>
                <TableHead className="text-center">W</TableHead>
                <TableHead className="text-center">L</TableHead>
                <TableHead className="text-center">Pts</TableHead>
                <TableHead className="text-center">NRR</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.team}>
                  <TableCell className="text-center font-bold text-slate-500">
                    {row.pos}
                  </TableCell>
                  <TableCell className="font-bold text-slate-900">
                    {row.team}
                  </TableCell>
                  <TableCell className="text-center">{row.p}</TableCell>
                  <TableCell className="text-center font-bold text-green-600">
                    {row.w}
                  </TableCell>
                  <TableCell className="text-center font-bold text-red-500">
                    {row.l}
                  </TableCell>
                  <TableCell className="text-center font-black text-blue-900 text-lg">
                    {row.pts}
                  </TableCell>
                  <TableCell className="text-center text-slate-500">
                    {row.nrr}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};
