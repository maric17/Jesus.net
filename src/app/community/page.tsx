"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Users, 
  Facebook, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Palette, 
  HeartHandshake,
  Wifi,
  Smartphone
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const BENEFITS = [
  "Weekly training on digital evangelism strategies",
  "Ready-to-share content for your social media",
  "Community support and accountability",
  "Opportunities to grow and lead"
];

const SERVE_OPTIONS = [
  {
    title: "Become an E-Coach",
    description: "Help people in distress through online conversations. We train you to provide spiritual support and guidance to those seeking help.",
    linkText: "Apply to be an E-Coach",
    href: "https://ph.jesus.net/e-coach",
    icon: HeartHandshake,
    color: "bg-purple-500/10 text-purple-400"
  },
  {
    title: "Join Our Creative Team",
    description: "Use your design skills for God's kingdom. Create graphics and videos that reach thousands of people with the message of Jesus.",
    linkText: "Apply as Creative Volunteer",
    href: "/volunteer/creative",
    icon: Palette,
    color: "bg-blue-500/10 text-blue-400"
  }
];

export default function CommunityPage() {
  return (
    <main className="bg-brand-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/community/hero-banner.webp" 
            alt="Digital Disciples Community" 
            fill
            className="object-cover opacity-40 contrast-[1.1]"
            priority
          />
          <div className="absolute inset-0 bg-brand-black/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn direction="up">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-brand-yellow/10 text-brand-yellow rounded-full border border-brand-yellow/20">
              Community
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Be Part of <br />
              <span className="text-brand-yellow">Something Bigger</span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <p className="text-xl md:text-3xl text-gray-300 mb-8 italic font-light max-w-4xl mx-auto leading-relaxed">
              You don&apos;t need a stage to make disciples—<br className="hidden md:block" />
              just <span className="text-white font-medium">willingness</span> and <span className="text-white font-medium">WiFi</span>.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Join thousands of Filipinos who are using their phones, laptops, and social media accounts to share Jesus with the world.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="flex justify-center gap-6 items-center">
               <div className="flex flex-col items-center gap-2">
                 <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                   <Smartphone className="text-brand-yellow" size={24} />
                 </div>
                 <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Phones</span>
               </div>
               <div className="w-12 h-px bg-white/10"></div>
               <div className="flex flex-col items-center gap-2">
                 <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                   <Wifi className="text-brand-yellow" size={24} />
                 </div>
                 <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">WiFi</span>
               </div>
               <div className="w-12 h-px bg-white/10"></div>
               <div className="flex flex-col items-center gap-2">
                 <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                   <Users className="text-brand-yellow" size={24} />
                 </div>
                 <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Impact</span>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Join Digital Disciples PH Section */}
      <section className="py-24 bg-brand-light text-brand-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                      Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange block">Digital Disciples PH</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                      Our flagship community where ordinary believers become digital missionaries. Get equipped with tools, training, and content to share your faith online effectively.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 font-mono">What you&apos;ll get:</h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {BENEFITS.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-brand-yellow/30 transition-all duration-300">
                          <CheckCircle2 className="text-brand-yellow shrink-0 mt-0.5" size={20} />
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <div className="flex flex-col gap-4">
                  <Link 
                    href="https://www.facebook.com/groups/digitaldisciplesph"
                    target="_blank"
                    className="group flex items-center justify-between p-8 bg-[#1877F2] text-white rounded-[2.5rem] hover:shadow-2xl hover:shadow-blue-500/20 active:scale-95 transition-all duration-300"
                  >
                    <div className="flex items-center gap-6">
                      <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md">
                        <Facebook size={32} fill="white" stroke="none" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] font-bold opacity-70 mb-1">Facebook Group</div>
                        <div className="text-2xl font-bold">Join on Facebook</div>
                      </div>
                    </div>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>

                  <Link 
                    href="https://invite.viber.com/?g=RGkwqr5zHlZn0bitEKo1-497_qpparZ"
                    target="_blank"
                    className="group flex items-center justify-between p-8 bg-[#7360f2] text-white rounded-[2.5rem] hover:shadow-2xl hover:shadow-purple-500/20 active:scale-95 transition-all duration-300"
                  >
                    <div className="flex items-center gap-6">
                      <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md">
                        <MessageCircle size={32} />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] font-bold opacity-70 mb-1">Viber Community</div>
                        <div className="text-2xl font-bold">Join on Viber</div>
                      </div>
                    </div>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Serve Section */}
      <section className="py-24 bg-brand-dark border-t border-white/5">
        <div className="container mx-auto px-6">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Other Ways to <span className="text-brand-yellow italic">Serve</span></h2>
            <div className="h-1.5 w-24 bg-brand-yellow rounded-full mx-auto"></div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {SERVE_OPTIONS.map((option, idx) => {
              const Icon = option.icon;
              return (
                <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                  <div className="h-full p-10 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 hover:border-brand-yellow/30 transition-all duration-500 group flex flex-col">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-all duration-500 ${option.color}`}>
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{option.title}</h3>
                    <p className="text-gray-400 mb-10 flex-grow leading-relaxed font-light">
                      {option.description}
                    </p>
                    <Link 
                      href={option.href}
                      className="inline-flex items-center gap-2 text-brand-yellow font-bold hover:gap-4 transition-all duration-300"
                    >
                      {option.linkText} <ArrowRight size={20} />
                    </Link>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-yellow text-brand-black">
        <div className="container mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Ready to Start Your <br />
              <span className="italic underline underline-offset-8">Digital Ministry?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium opacity-80">
              The mission hasn&apos;t changed, but the tools have. Let&apos;s reach the nations together, one post at a time.
            </p>
            <Link 
              href="https://www.facebook.com/groups/digitaldisciplesph"
              target="_blank"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-brand-red to-brand-orange text-white text-xl font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-brand-red/20"
            >
              Get Started Now <ArrowRight size={24} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
