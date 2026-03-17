"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Heart, 
  ArrowRight, 
  X, 
  Upload, 
  CheckCircle2, 
  Users, 
  TrendingUp,
  Globe,
  Sparkles,
  Search,
  ExternalLink,
  ChevronRight,
  ClipboardCheck,
  Info
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { motion, AnimatePresence, useInView, useSpring, useTransform } from "framer-motion";

// --- Animated Counter Component ---
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });
  
  const displayValue = useTransform(spring, (current) => 
    Math.round(current).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

const LINKS = [
  { name: "Himala Everyday", url: "himala.everyday.ph.jesus.net", category: "Daily Content" },
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

// --- Partner Data ---
const IMPACT_STATS = [
  { label: "Total Engagements", value: 1250000, suffix: "+", icon: TrendingUp },
  { label: "Decisions for Christ", value: 58400, suffix: "+", icon: Heart },
  { label: "Digital Disciples Trained", value: 12400, suffix: "+", icon: Users },
  { label: "Provinces Reached", value: 82, suffix: "/82", icon: Globe },
];

export default function PartnerPage() {
  const [activeModal, setActiveModal] = useState<"give" | "pray" | "collaborate" | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [search, setSearch] = useState("");

  const filteredLinks = LINKS.filter(link => 
    link.name.toLowerCase().includes(search.toLowerCase()) || 
    link.url.toLowerCase().includes(search.toLowerCase())
  );

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
  };

  // Body scroll lock
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setActiveModal(null);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <main className="bg-brand-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-yellow rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-yellow/30 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn direction="up">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-brand-yellow/10 text-brand-yellow rounded-full border border-brand-yellow/20">
              Partner With Us
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Together, We Can <br />
              <span className="text-brand-yellow">Reach More</span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Every partnership—whether through giving, prayer, or collaboration—helps us bring Jesus to more Filipinos through digital platforms.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-white text-brand-black overflow-hidden relative">
        <div className="container mx-auto px-6">
          <FadeIn direction="up" className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-brand-black">
              Our <span className="font-light italic text-brand-yellow">Impact</span>
            </h2>
            <div className="h-1.5 w-24 bg-brand-yellow rounded-full mb-8"></div>
            <p className="text-xl text-gray-500 max-w-2xl font-light">
              See what God has been doing through our collective efforts across the Philippines.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {IMPACT_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                  <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-brand-yellow/30 transition-all duration-500 hover:shadow-xl group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:bg-brand-yellow transition-colors duration-500">
                      <Icon size={28} className="text-brand-black" />
                    </div>
                    <div className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tighter">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">{stat.label}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ways to Partner Section */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ways to <span className="text-brand-yellow">Partner</span></h2>
            <p className="text-xl text-gray-400 font-light">Choose how you want to make an impact today.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* GIVE Card */}
            <FadeIn direction="up" delay={0.1}>
              <div 
                onClick={() => setActiveModal("give")}
                className="h-full p-10 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 hover:border-brand-yellow/30 transition-all duration-500 group flex flex-col items-center text-center cursor-pointer hover:bg-white/[0.08]"
              >
                <div className="w-20 h-20 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-8 border border-brand-yellow/20 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl">💝</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Give</h3>
                <p className="text-gray-400 mb-8 flex-grow leading-relaxed font-light">
                  Support our mission financially. Every peso helps reach another soul.
                </p>
                <div className="inline-flex items-center gap-2 text-brand-yellow font-bold group-hover:gap-4 transition-all">
                  Give Now <ArrowRight size={20} />
                </div>
              </div>
            </FadeIn>

            {/* PRAY Card */}
            <FadeIn direction="up" delay={0.2}>
              <div 
                onClick={() => setActiveModal("pray")}
                className="h-full p-10 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 hover:border-brand-yellow/30 transition-all duration-500 group flex flex-col items-center text-center cursor-pointer hover:bg-white/[0.08]"
              >
                <div className="w-20 h-20 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-8 border border-brand-yellow/20 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl">🙏</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Pray</h3>
                <p className="text-gray-400 mb-8 flex-grow leading-relaxed font-light">
                  Join our prayer community. See current requests and share yours.
                </p>
                <div className="inline-flex items-center gap-2 text-brand-yellow font-bold group-hover:gap-4 transition-all">
                  Prayer Corner <ArrowRight size={20} />
                </div>
              </div>
            </FadeIn>

            {/* COLLABORATE Card */}
            <FadeIn direction="up" delay={0.3}>
              <div 
                onClick={() => setActiveModal("collaborate")}
                className="h-full p-10 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 hover:border-brand-yellow/30 transition-all duration-500 group flex flex-col items-center text-center cursor-pointer hover:bg-white/[0.08]"
              >
                <div className="w-20 h-20 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-8 border border-brand-yellow/20 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Collaborate</h3>
                <p className="text-gray-400 mb-8 flex-grow leading-relaxed font-light">
                  Churches, organizations, and businesses—let&apos;s work together.
                </p>
                <div className="inline-flex items-center gap-2 text-brand-yellow font-bold group-hover:gap-4 transition-all">
                  Partnership Form <ArrowRight size={20} />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tool Links Reference Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200 relative text-brand-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <FadeIn direction="up">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-brand-yellow/20 text-brand-black rounded-full border border-brand-yellow/30">
                Dev Reference
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-black">
                Tool Links <span className="text-brand-yellow italic">Reference</span>
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Master list of all tools and their destination URLs for development team reference. 
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.1}>
            <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search tools or URLs..." 
                  className="w-full bg-brand-black border border-brand-black/10 rounded-2xl pl-12 pr-6 py-4 focus:border-brand-yellow outline-none transition-all placeholder:text-gray-500 text-white shadow-xl"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
                <div className="px-6 py-3 bg-brand-black rounded-xl text-sm font-bold text-gray-400 shadow-xl">
                  Total Tools: <span className="text-white">{LINKS.length}</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-brand-black border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="px-8 py-6 text-xs uppercase tracking-[0.2em] font-bold text-gray-400 font-mono">Tool Name</th>
                      <th className="px-8 py-6 text-xs uppercase tracking-[0.2em] font-bold text-gray-400 font-mono">Destination URL</th>
                      <th className="px-8 py-6 text-xs uppercase tracking-[0.2em] font-bold text-gray-400 font-mono text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredLinks.map((link, idx) => (
                      <tr key={idx} className="group hover:bg-white/[0.04] transition-colors">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-brand-yellow/10 flex items-center justify-center group-hover:bg-brand-yellow transition-colors duration-300">
                              <ChevronRight size={14} className="text-brand-yellow group-hover:text-brand-black" />
                            </div>
                            <span className="font-bold text-lg text-white">{link.name}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6 font-mono text-sm">
                          <a 
                            href={link.url.startsWith('http') ? link.url : `https://${link.url}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-brand-yellow hover:text-white hover:bg-brand-yellow/20 hover:px-2 hover:rounded transition-all flex items-center gap-2 group/link w-fit"
                          >
                            {link.url}
                            <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button 
                            onClick={() => copyToClipboard(link.url)}
                            className="p-3 bg-white/5 hover:bg-brand-yellow rounded-xl transition-all border border-transparent hover:border-brand-yellow text-gray-400 hover:text-brand-black"
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

          <FadeIn direction="up" delay={0.3}>
            <div className="mt-12 p-8 bg-brand-black border border-white/5 rounded-[2rem] flex items-start gap-6 shadow-2xl">
              <div className="p-3 bg-brand-yellow/10 rounded-xl">
                <Info className="text-brand-yellow" size={24} />
              </div>
              <p className="text-gray-400 leading-relaxed italic text-sm">
                Note: Confirm all subdomain URLs with the technical team before implementation. Some URLs may need to be adjusted based on existing infrastructure.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- Modals --- */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-brand-black/95 backdrop-blur-2xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-brand-dark border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white backdrop-blur-md"
              >
                <X size={24} />
              </button>

              <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20">
                    <div className="w-24 h-24 bg-brand-yellow/20 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 size={48} className="text-brand-yellow" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">God Bless You!</h2>
                    <p className="text-xl text-gray-400">Thank you for supporting the mission.</p>
                  </div>
                ) : (
                  <>
                    {activeModal === "give" && (
                      <div>
                        <div className="mb-10 text-center">
                          <h2 className="text-4xl font-bold mb-2">Give</h2>
                          <p className="text-gray-400">Secure partnership for the mission</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Name (Optional)</label>
                              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-yellow outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Organization (Optional)</label>
                              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-yellow outline-none transition-all" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Donation Amount (PHP)</label>
                            <div className="relative">
                              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₱</span>
                              <input required type="number" className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-6 py-4 focus:border-brand-yellow outline-none transition-all" />
                            </div>
                          </div>

                          <div className="space-y-4">
                            <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Certificate of Donation?</label>
                            <div className="flex gap-4">
                              <label className="flex-1 cursor-pointer">
                                <input type="radio" name="cert" className="hidden peer" />
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center peer-checked:bg-brand-yellow peer-checked:text-brand-black peer-checked:border-brand-yellow transition-all">Yes</div>
                              </label>
                              <label className="flex-1 cursor-pointer">
                                <input type="radio" name="cert" className="hidden peer" defaultChecked />
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center peer-checked:bg-brand-yellow peer-checked:text-brand-black peer-checked:border-brand-yellow transition-all">No</div>
                              </label>
                            </div>
                          </div>

                          <div className="p-8 bg-brand-yellow/5 border border-brand-yellow/20 rounded-[2rem] space-y-4">
                            <h3 className="font-bold text-brand-yellow uppercase tracking-widest text-sm text-center">Bank Details</h3>
                            <div className="space-y-2 text-center font-mono">
                              <p className="text-white text-lg font-bold">BDO Unibank</p>
                              <p className="text-gray-400">Account Name: <span className="text-white">Jesus.net Philippines</span></p>
                              <p className="text-gray-400">Account Number: <span className="text-white">0012-3456-7890</span></p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Upload Transaction Screenshot</label>
                            <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-brand-yellow/50 transition-all cursor-pointer group">
                              <Upload className="mx-auto mb-4 text-gray-500 group-hover:text-brand-yellow" />
                              <p className="text-sm text-gray-400">Click or drag image to upload proof of donation</p>
                            </div>
                          </div>

                          <button type="submit" className="w-full py-5 bg-brand-yellow text-brand-black font-extrabold rounded-2xl shadow-2xl shadow-brand-yellow/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                            Submit Donation Report
                          </button>
                        </form>
                      </div>
                    )}

                    {activeModal === "pray" && (
                      <div className="space-y-12">
                        <div className="text-center">
                          <h2 className="text-4xl font-bold mb-2">Prayer Corner</h2>
                          <p className="text-gray-400 italic">Interceding for the mission field</p>
                        </div>

                        <div className="space-y-8">
                          <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <Sparkles size={20} className="text-brand-yellow" /> Pray for the Mission Field
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                              Ask God for open hearts in every province, protective hedge over our digital missionaries, and that every click would lead to a life-changing encounter with Christ.
                            </p>
                          </div>

                          <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <Users size={20} className="text-brand-yellow" /> Pray for More Supporters
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                              Pray that God would raise up more partners—individuals, churches, and businesses—who share the vision of reaching 100 million Filipinos.
                            </p>
                          </div>
                        </div>

                        <form onSubmit={handleSubmit} className="p-10 bg-brand-yellow/10 border border-brand-yellow/30 rounded-[3rem] text-center">
                           <h3 className="text-2xl font-bold mb-6 italic">I just prayed for Jesus.Net</h3>
                           <div className="space-y-4 mb-8">
                             <input type="text" placeholder="Your Name" className="w-full bg-black/20 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-yellow outline-none" />
                             <textarea placeholder="Write a short encouraging prayer message..." className="w-full bg-black/20 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-yellow outline-none h-32 resize-none" />
                           </div>
                           <button type="submit" className="inline-flex items-center gap-3 px-10 py-5 bg-brand-yellow text-brand-black font-extrabold rounded-2xl transition-all hover:scale-105">
                             Send Prayer Encouragement <ArrowRight size={20} />
                           </button>
                        </form>
                      </div>
                    )}

                    {activeModal === "collaborate" && (
                      <div>
                        <div className="mb-10 text-center">
                          <h2 className="text-4xl font-bold mb-2 text-brand-yellow">Collaborate</h2>
                          <p className="text-gray-400">Let&apos;s build the kingdom together</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Organization Name</label>
                            <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-yellow outline-none" />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Contact Person</label>
                              <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-yellow outline-none" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                              <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-yellow outline-none" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Collaboration Type</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-yellow outline-none appearance-none">
                              <option className="bg-brand-dark">Church Partnership</option>
                              <option className="bg-brand-dark">Corporate Partnership</option>
                              <option className="bg-brand-dark">Media/Content Collaboration</option>
                              <option className="bg-brand-dark">Other</option>
                            </select>
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Message / Pitch</label>
                            <textarea placeholder="How would you like to work with us?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-yellow outline-none h-40 resize-none" />
                          </div>

                          <button type="submit" className="w-full py-5 bg-brand-yellow text-brand-black font-extrabold rounded-2xl shadow-xl hover:scale-[1.02] transition-all">
                            Request Collaboration
                          </button>
                        </form>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
