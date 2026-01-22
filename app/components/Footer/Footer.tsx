import React from "react";
import { Trophy, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200 text-slate-600 overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-900 p-2 rounded-lg">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                PCL <span className="text-red-600">U-15</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm">
              The premier U-15 cricket tournament in Kathmandu, fostering the next generation of national cricket stars through discipline, passion, and excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="bg-white border border-slate-200 hover:bg-blue-900 hover:text-white hover:border-blue-900 p-3 rounded-full transition-all duration-300 group shadow-sm">
                  <Icon className="h-5 w-5 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
               Quick Links
            </h4>
            <ul className="space-y-4">
              {['Home', 'Teams', 'Fixtures', 'Points Table', 'Gallery', 'News'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-500 hover:text-blue-900 hover:pl-2 transition-all duration-300 block font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
               Contact Us
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-blue-900 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Headquarters</p>
                  <p className="text-slate-500 text-sm">Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-blue-900 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Phone</p>
                  <p className="text-slate-500 text-sm">+977-1-4XXXXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-blue-900 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Email</p>
                  <p className="text-slate-500 text-sm">info@pcl-u15.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © 2082 PABSON Cricket League U-15. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500 text-sm font-medium">
            <Link href="/privacy" className="hover:text-blue-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};