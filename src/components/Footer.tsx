"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white/50 py-16 md:py-24 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-16 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-12">
            <Link href="/" className="mb-8 block group">
              <span className="font-bold text-2xl tracking-tight text-white transition-colors duration-300">
                Jesus<span className="text-brand-yellow font-light group-hover:text-white transition-colors">.Net</span>
              </span>
            </Link>
            <p className="text-white/40 mb-10 text-sm md:text-base leading-relaxed max-w-sm">
              Helping people encounter Jesus online. Because everyone deserves the chance to experience His hope.
            </p>
            <div className="flex gap-4">
              <Link href="https://web.facebook.com/Jesus.netPH" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/jesus.net_ph/" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.tiktok.com/@jesus.net_ph" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all">
                <Music2 className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2 uppercase tracking-wider text-xs">Resources</h4>
            <Link href="https://himalaeveryday.ph/" className="hover:text-brand-yellow transition-colors text-sm">Himala Every day</Link>
            <Link href="https://ph.jesus.net/the-chosen#courses" className="hover:text-brand-yellow transition-colors text-sm">MyJourney with The Chosen</Link>
            <Link href="https://ph.jesus.net/films-and-series" className="hover:text-brand-yellow transition-colors text-sm">Films and Series</Link>
            <Link href="https://ph.jesus.net/films-and-series/the-chosen" className="hover:text-brand-yellow transition-colors text-sm">The Chosen Series</Link>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2 uppercase tracking-wider text-xs">Pathways</h4>
            <Link href="/individuals" className="hover:text-brand-yellow transition-colors text-sm">For Individuals</Link>
            <Link href="/churches" className="hover:text-brand-yellow transition-colors text-sm">For Churches</Link>
            <Link href="/individuals#bible-study" className="hover:text-brand-yellow transition-colors text-sm">For Bible Study Leaders</Link>
            <Link href="/individuals#business" className="hover:text-brand-yellow transition-colors text-sm">For Business Leaders</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/30 text-center md:text-left">
            © {new Date().getFullYear()} Jesus.Net Philippines. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

