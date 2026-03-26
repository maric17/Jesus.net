"use client";

import React, { useState, useEffect } from "react";
import { FadeIn } from "@/components/FadeIn";
import { 
  BookHeart, Film, PlayCircle, Users, ExternalLink, Download, 
  BookOpen, Coffee, Smile, Briefcase, MessageCircle, X, Sparkles, 
  ChevronRight 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FaithJourneyQuiz from "@/components/FaithJourneyQuiz";
import ConsultationForm from "@/components/ConsultationForm";
import { motion, AnimatePresence } from "framer-motion";

const TOOLKIT = [
  {
    title: "Himala Everyday",
    description: "Start each day with God. Our Filipino devotionals make Scripture practical and personal—perfect for busy lives.",
    link: "https://himalaeveryday.ph/",
    displayLink: "himalaeveryday.ph",
    icon: BookHeart,
    image: "/images/tools/himala.png",
  },
  {
    title: "MyJourney with The Chosen",
    description: "Go deeper into the stories of Jesus through interactive Bible studies paired with The Chosen series.",
    link: "https://myjourney.ph.jesus.net/",
    displayLink: "myjourney.ph.jesus.net",
    icon: Film,
    image: "/images/tools/my-journey.png",
  },
  {
    title: "Watch The Chosen (Free)",
    description: "Experience the life of Jesus like never before. Stream all seasons free and see the Gospel come alive.",
    link: "https://ph.jesus.net/films-and-series/the-chosen",
    displayLink: "ph.jesus.net/films-and-series/the-chosen",
    icon: PlayCircle,
    image: "/images/tools/the-chosen.png",
  },
  {
    title: "Join Our Community",
    description: "Connect with other believers on the same journey. Find encouragement, accountability, and friendship.",
    link: "/community",
    displayLink: "ph.jesus.net/community",
    icon: Users,
    image: "/images/tools/community.png",
  },
];

export default function IndividualsPage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isQuizOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isQuizOpen]);

  return (
    <main className="bg-brand-black text-white min-h-screen">
      {/* Modal Quiz */}
      <AnimatePresence>
        {isQuizOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuizOpen(false)}
              className="absolute inset-0 bg-brand-black/90 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-brand-dark border border-white/10 rounded-[3rem] shadow-2xl max-h-[90vh] flex flex-col overflow-hidden"
            >
              <button 
                onClick={() => setIsQuizOpen(false)}
                className="absolute top-6 right-6 z-[110] p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white backdrop-blur-md border border-white/10"
              >
                <X size={24} />
              </button>
              
              <div className="flex-1 overflow-y-auto p-8 md:p-16 custom-scrollbar scroll-smooth">
                <div className="text-center mb-12">
                  <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-brand-yellow/10 text-brand-yellow rounded-full border border-brand-yellow/20">
                    Faith Journey Personalizer
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Find Your <span className="text-brand-yellow italic">Perfect Path</span>
                  </h2>
                </div>
                <div className="relative z-10">
                  <FaithJourneyQuiz />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Personal Faith Journey Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/individuals/hero-banner-new.png" 
            alt="Personal Faith Journey" 
            fill
            className="object-cover opacity-40 contrast-[1.1]"
            priority
          />
          <div className="absolute inset-0 bg-brand-black/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn direction="up">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-brand-yellow/10 text-brand-yellow rounded-full border border-brand-yellow/20">
                Personal Faith Journey
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                Gusto Mo Bang <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange">Makilala si Jesus?</span>
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-400 mb-6 italic font-light">
                Do you want to know Jesus more deeply?
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                Whether you&apos;re just curious, rediscovering your faith, or ready to grow deeper—we have free tools to help you on your journey.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Your Personal Toolkit Section */}
      <section className="py-24 bg-brand-light text-brand-black">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <FadeIn direction="up">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-4">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-brand-black">
                    Your Personal <span className="font-light italic text-brand-yellow bg-black px-4 py-1 rounded-xl">Toolkit</span>
                  </h2>
                  <div className="h-1.5 w-24 bg-brand-yellow rounded-full"></div>
                </div>
                
                <button
                  onClick={() => setIsQuizOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-black text-white font-bold rounded-2xl hover:bg-brand-yellow hover:text-brand-black transition-all duration-300 group shadow-xl"
                >
                  <Sparkles size={18} className="text-brand-yellow group-hover:text-brand-black" />
                  Not sure where to start?
                </button>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TOOLKIT.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                  <div className="h-full relative overflow-hidden rounded-[2.5rem] group transition-all duration-500 shadow-2xl shadow-black/20 border border-white/5 bg-brand-black">
                    {/* Background Image with Dark Overlay */}
                    <div 
                      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110" 
                      style={{ backgroundImage: `url(${tool.image})` }}
                    />
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-black via-brand-black/95 to-brand-black/40 group-hover:via-brand-black/80 transition-colors duration-500" />

                    {/* Content */}
                    <div className="relative z-20 h-full p-8 flex flex-col min-h-[420px]">
                      <div className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-brand-yellow/10 group-hover:scale-110 group-hover:bg-white transition-all duration-500">
                        <Icon className="text-brand-black" size={28} strokeWidth={1.5} />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{tool.title}</h3>
                      
                      <p className="text-white/60 mb-8 flex-grow leading-relaxed font-light">
                        {tool.description}
                      </p>
                      
                      <Link 
                        href={tool.link}
                        className="mt-auto inline-flex items-center justify-center w-full px-6 py-4 rounded-2xl bg-brand-yellow text-brand-black font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:bg-white hover:scale-[1.02] active:scale-95"
                      >
                        Launch Tool
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* For Bible Study & Discipleship Group Leaders Section */}
      <section id="bible-study" className="py-24 bg-brand-black text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <FadeIn direction="up">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-brand-yellow/10 text-brand-yellow rounded-full border border-brand-yellow/20">
                For Bible Study & Discipleship Group Leaders
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Free Resources for <span className="text-brand-yellow">Your Group</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
                Looking for engaging materials that spark real conversations? We&apos;ve got you covered with free, ready-to-use content that brings your Bible study or discipleship group to life.
              </p>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <Link 
                href="/images/tools/Jesus_Net_PH_Bible_Study_Leaders_Guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-brand-yellow/50 hover:bg-white/10 text-white rounded-2xl transition-all group"
              >
                <div className="p-2 bg-brand-yellow rounded-lg group-hover:scale-110 transition-transform">
                  <Download size={20} className="text-brand-black" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Download PDF</div>
                  <div className="font-bold">Bible Study Leader&apos;s Guide</div>
                </div>
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "MyJourney with The Chosen",
                description: "The perfect small group companion. Watch episodes together, then use our guided discussion questions and Scripture deep-dives. No preparation needed!",
                link: "https://myjourney.ph.jesus.net/",
                displayLink: "myjourney.ph.jesus.net",
                icon: BookOpen
              },
              {
                title: "Himala Everyday (Daily Devotion)",
                description: "Assign daily readings between meetings. Members come prepared with fresh insights to share.",
                link: "https://himalaeveryday.ph/",
                displayLink: "himalaeveryday.ph",
                icon: Coffee
              },
              {
                title: "Test of Character",
                description: "Fun icebreaker activity! Discover which Bible character each member relates to most—leads to great discussions about faith and personality.",
                link: "https://cloud.m.jesus.net/chosen-test-of-character?language=TLEN",
                displayLink: "cloud.m.jesus.net/chosen-test-of-character",
                icon: Smile
              }
            ].map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                  <div className="h-full p-10 bg-white/5 backdrop-blur-sm rounded-[2.5rem] border border-white/10 hover:border-brand-yellow/30 transition-all duration-500 group flex flex-col">
                    <div className="w-16 h-16 bg-brand-yellow/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-yellow/20 group-hover:bg-brand-yellow group-hover:scale-110 transition-all duration-500">
                      <Icon className="text-brand-yellow group-hover:text-brand-black" size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{tool.title}</h3>
                    <p className="text-gray-400 mb-10 flex-grow leading-relaxed">
                      {tool.description}
                    </p>
                    <Link 
                      href={tool.link}
                      target="_blank"
                      className="mt-auto inline-flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 text-white font-bold group-hover:bg-brand-yellow group-hover:text-brand-black transition-all duration-300"
                    >
                      <span className="truncate mr-2 font-mono text-sm opacity-60 group-hover:opacity-100 italic">
                        {tool.displayLink}
                      </span>
                      <ExternalLink size={18} className="shrink-0" />
                    </Link>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
      {/* For Business Leaders Section */}
      <section id="business" className="py-24 bg-brand-light text-brand-black overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-20">
            <FadeIn direction="up">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-brand-yellow/10 text-brand-yellow rounded-full border border-brand-yellow/20">
                For Business Leaders
              </span>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">
                Transform Your <br />
                <span className="text-brand-yellow px-4 py-1 rounded-2xl">Workplace Culture</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light">
                We&apos;ve heard countless testimonials from business owners who&apos;ve seen their teams transformed through The Chosen. Employees find purpose, relationships deepen, and workplace culture shifts—all through the power of encountering Jesus together.
              </p>
            </FadeIn>
          </div>

          {/* Testimonial Video */}
          <div className="mb-24">
            <FadeIn direction="up">
              <div className="w-full max-w-5xl mx-auto aspect-video bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-200">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/G-Df7Z6pRiI" 
                  title="Testimonial Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </FadeIn>
          </div>

          {/* Resources for Your Team */}
          <div className="mb-16 flex items-center gap-4">
            <div className="h-0.5 flex-grow bg-gray-100"></div>
            <h3 className="text-xl font-bold uppercase tracking-[0.3em] text-gray-400">Resources for Your Team</h3>
            <div className="h-0.5 flex-grow bg-gray-100"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "The Chosen for Workplace",
                description: "Host lunch-and-learn sessions or after-work viewings. Each episode sparks meaningful conversations about values, purpose, and faith.",
                link: "https://thechosen.ph.jesus.net/workplace",
                displayLink: "thechosen.ph.jesus.net/workplace",
                icon: Briefcase
              },
              {
                title: "MyJourney for Teams",
                description: "Offer employees a personal growth tool. Perfect for optional participation while respecting diverse beliefs.",
                link: "https://myjourney.ph.jesus.net",
                displayLink: "myjourney.ph.jesus.net",
                icon: Users
              },
              {
                title: "Digital Disciples PH",
                description: "Invite interested employees to join our community. They'll learn to share their faith naturally—online and in person.",
                link: "https://facebook.com/groups/digitaldisciplesph",
                displayLink: "facebook.com/groups/digitaldisciplesph",
                icon: MessageCircle
              }
            ].map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                  <div className="h-full p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-brand-yellow/30 transition-all duration-500 hover:shadow-xl group flex flex-col">
                    <Icon className="text-brand-yellow mb-8 w-12 h-12 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                    <h4 className="text-2xl font-bold mb-4">{resource.title}</h4>
                    <p className="text-gray-500 mb-10 flex-grow leading-relaxed">
                      {resource.description}
                    </p>
                    <Link 
                      href={resource.link}
                      target="_blank"
                      className="mt-auto inline-flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 text-brand-black font-bold group-hover:bg-brand-black group-hover:text-white transition-all duration-300"
                    >
                      <span className="truncate mr-2 font-mono text-xs opacity-60">{resource.displayLink}</span>
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Consultation CTA */}
          <FadeIn direction="up">
            <ConsultationForm />
          </FadeIn>
        </div>
      </section>

      {/* Quiz Teaser Section (Static) */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-yellow/5 skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] text-center shadow-2xl relative group overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-yellow/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            
            <FadeIn direction="up">
              <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-3 transition-transform group-hover:rotate-12">
                <Sparkles className="text-brand-black" size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Still Wondering <span className="text-brand-yellow italic">Where to Begin?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Take our quick 3-question quiz to find the perfect resources for your specific stage in the faith journey.
              </p>
              <button 
                onClick={() => setIsQuizOpen(true)}
                className="inline-flex items-center gap-3 px-10 py-5 bg-brand-yellow text-brand-black font-extrabold rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-brand-yellow/20"
              >
                Open Discovery Quiz <ChevronRight size={20} />
              </button>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
