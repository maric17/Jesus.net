"use client";

import React from "react";
import { 
  ExternalLink, 
  Search, 
  Info,
  ChevronRight,
  ClipboardCheck
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const LINKS = [
  { name: "Himala Every Day", url: "himala.everyday.ph.jesus.net", category: "Daily Content" },
  { name: "MyJourney with The Chosen", url: "myjourney.ph.jesus.net", category: "Discipleship" },
  { name: "The Life of Jesus Film", url: "lifeofjesus.ph.jesus.net", category: "Film/Media" },
  { name: "The Life of Jesus (Churches)", url: "ph.jesus.net/churches/screening", category: "Church Tools" },
  { name: "The Chosen Series", url: "thechosen.ph.jesus.net", category: "Media" },
  { name: "The Chosen (Workplace)", url: "thechosen.ph.jesus.net/workplace", category: "Corporate" },
  { name: "Test of Character", url: "testofcharacter.ph.jesus.net", category: "Engagement" },
  { name: "GenZ Sessions", url: "genz.ph.jesus.net", category: "Youth" },
  { name: "Digital Disciples PH (Facebook)", url: "facebook.com/groups/digitaldisciplesph", category: "Community" },
  { name: "Digital Disciples PH (Viber)", url: "viber.com/digitaldisciplesph", category: "Community" },
  { name: "E-Coach Application", url: "ph.jesus.net/volunteer/ecoach", category: "Volunteer" },
  { name: "Creative Volunteer Application", url: "ph.jesus.net/volunteer/creative", category: "Volunteer" },
  { name: "General Volunteer Form", url: "ph.jesus.net/volunteer", category: "Volunteer" },
  { name: "Give/Donate", url: "ph.jesus.net/give", category: "Partnership" },
  { name: "Prayer Corner", url: "ph.jesus.net/prayer", category: "Partnership" },
  { name: "Partnership Form", url: "ph.jesus.net/partner/collaborate", category: "Partnership" },
  { name: "Church Consultation Booking", url: "ph.jesus.net/churches/consult", category: "Church Tools" },
];

export default function LinksPage() {
  const [search, setSearch] = React.useState("");

  const filteredLinks = LINKS.filter(link => 
    link.name.toLowerCase().includes(search.toLowerCase()) || 
    link.url.toLowerCase().includes(search.toLowerCase())
  );

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    // You could add a toast notification here
  };

  return (
    <main className="bg-brand-black text-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <FadeIn direction="up">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-brand-yellow/10 text-brand-yellow rounded-full border border-brand-yellow/20">
              Dev Reference
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tool Links <span className="text-brand-yellow italic">Reference</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Master list of all tools and their destination URLs for development team reference. 
              Confirm all subdomain URLs with the technical team before implementation.
            </p>
          </FadeIn>
        </div>

        {/* Search & Stats */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="text" 
                placeholder="Search tools or URLs..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 focus:border-brand-yellow outline-none transition-all placeholder:text-gray-600"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-gray-400">
                Total Tools: <span className="text-white">{LINKS.length}</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Links Table */}
        <FadeIn direction="up" delay={0.2}>
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-brand-yellow/5">
                    <th className="px-8 py-6 text-xs uppercase tracking-[0.2em] font-bold text-gray-400 font-mono">Tool Name</th>
                    <th className="px-8 py-6 text-xs uppercase tracking-[0.2em] font-bold text-gray-400 font-mono">Destination URL</th>
                    <th className="px-8 py-6 text-xs uppercase tracking-[0.2em] font-bold text-gray-400 font-mono">Category</th>
                    <th className="px-8 py-6 text-xs uppercase tracking-[0.2em] font-bold text-gray-400 font-mono text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredLinks.map((link, idx) => (
                    <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-yellow/10 flex items-center justify-center group-hover:bg-brand-yellow transition-colors duration-300">
                            <ChevronRight size={14} className="text-brand-yellow group-hover:text-brand-black" />
                          </div>
                          <span className="font-bold text-lg">{link.name}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 font-mono text-sm">
                        <a 
                          href={link.url.startsWith('http') ? link.url : `https://${link.url}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-yellow hover:underline flex items-center gap-2 group/link"
                        >
                          {link.url}
                          <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400">
                          {link.category}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button 
                          onClick={() => copyToClipboard(link.url)}
                          className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-transparent hover:border-brand-yellow/50"
                          title="Copy URL"
                        >
                          <ClipboardCheck size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* Footer Note */}
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-12 p-8 bg-brand-yellow/5 border border-brand-yellow/10 rounded-[2rem] flex items-start gap-6">
            <div className="p-3 bg-brand-yellow/10 rounded-xl">
              <Info className="text-brand-yellow" size={24} />
            </div>
            <div>
              <p className="text-gray-400 leading-relaxed italic text-sm">
                Note: Confirm all subdomain URLs with the technical team before implementation. Some URLs may need to be adjusted based on existing infrastructure. This list serves as a master reference for internal routing and button destinations.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
