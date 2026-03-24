"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  PlayCircle, 
  Users, 
  Church, 
  MessageSquare, 
  ExternalLink,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import ConsultationForm from "@/components/ConsultationForm";


const CHOSEN_RESOURCES = [
  {
    title: "Watch Together",
    description: "Stream episodes during cell groups, youth nights, or Sunday gatherings.",
    url: "https://ph.jesus.net/films-and-series/the-chosen",
    linkText: "ph.jesus.net/films-and-series/the-chosen",
    icon: PlayCircle
  },
  {
    title: "Test of Character",
    description: "Fun personality quiz connecting members to Bible characters—great for small groups.",
    url: "https://cloud.m.jesus.net/chosen-test-of-character?language=TLEN",
    linkText: "cloud.m.jesus.net/chosen-test-of-character?language=TLEN",
    icon: Users
  },
  {
    title: "GenZ Sessions",
    description: "Specially designed content for your youth ministry to engage the next generation.",
    url: "https://ph.jesus.net/the-chosen-gen-z-sessions",
    linkText: "ph.jesus.net/the-chosen-gen-z-sessions",
    icon: MessageSquare
  }
];

export default function ChurchesPage() {
  return (
    <main className="bg-brand-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/churches/church-banner.png" 
            alt="Church Community" 
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
                For Church Leaders
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                Partner With Your <br />
                <span className="text-brand-yellow">Church&apos;s Mission</span>
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                We understand the challenges of shepherding a congregation in the digital age. Let us equip you with free, proven tools that reach hearts and build disciples—without adding to your workload.
              </p>
            </FadeIn>
          </div>

          {/* Testimonial UX Note */}
          <FadeIn direction="up" delay={0.3} className="mt-16">
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] relative overflow-hidden group hover:border-brand-yellow/30 transition-all duration-500 shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <MessageSquare size={120} className="text-brand-yellow" />
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0">
                  <div className="absolute inset-0 bg-brand-yellow rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="relative w-full h-full bg-gray-800 rounded-2xl overflow-hidden border-2 border-brand-yellow/20">
                    <Image 
                      src="/images/churches/pastor-fernandez.png" 
                      alt="Pastor Jun Fernandez" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6 italic text-gray-200">
                    &quot;These digital tools have allowed our small group leaders to engage our youth in ways we never thought possible. It&apos;s high-quality content that speaks the language of today&apos;s generation.&quot;
                  </p>
                  <div>
                    <h4 className="text-lg font-bold text-white">Pastor Jun Fernandez</h4>
                    <p className="text-brand-yellow font-medium">Lighthouse Community Church, QC</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Offer Your Church */}
      <section className="py-24 bg-white text-brand-black">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                What We Offer <span className="font-light">Your Church</span>
              </h2>
              <div className="h-1.5 w-24 bg-brand-yellow rounded-full"></div>
            </FadeIn>
          </div>

          {/* Life of Jesus Screening */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <FadeIn direction="right">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Screen The Life of Jesus in Your Church
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Host a powerful community event with our professionally produced film. We provide everything you need: the film, promotional materials, and follow-up resources.
                </p>
                <ul className="space-y-4 mb-10 text-lg">
                  {[
                    "The complete professionally produced film",
                    "Eye-catching promotional materials",
                    "Customizable follow-up resources for new believers"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-5 h-5 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                        <ChevronRight size={14} className="text-brand-black" />
                      </div>
                      <span className="font-medium text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="https://lifeofjesus.ph.jesus.net"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand-black text-white font-bold rounded-2xl hover:bg-brand-dark transition-all duration-300 shadow-xl shadow-black/10 hover:-translate-y-1"
                >
                  Learn More about Screenings <ArrowRight size={18} />
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-yellow/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-black aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-100/50">
                  <Image 
                    src="/images/churches/film-screening.png" 
                    alt="Life of Jesus Screening" 
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <PlayCircle size={40} className="text-brand-black ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* The Chosen Congregation */}
          <div className="pt-16 border-t border-gray-200">
            <FadeIn direction="up">
              <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                Bring <span className="text-brand-yellow bg-black px-4 py-1 rounded-xl">The Chosen</span> to Your Congregation
              </h3>
              <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
                More than just watching—create a transformative experience for your members with these specialized resources.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CHOSEN_RESOURCES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                    <div className="h-full p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-brand-yellow transition-all duration-500 hover:shadow-2xl group flex flex-col">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-brand-yellow transition-all duration-500">
                        <Icon className="text-brand-black" size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                      <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                        {item.description}
                      </p>
                      <Link 
                        href={item.url}
                        target="_blank"
                        className="mt-auto inline-flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 text-brand-black font-bold group-hover:bg-black group-hover:text-white transition-all duration-300"
                      >
                        <span className="truncate mr-2 font-mono text-sm opacity-60 group-hover:opacity-100">{item.linkText}</span>
                        <ExternalLink size={18} className="shrink-0" />
                      </Link>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MyJourney Discipleship */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[300px]">
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-yellow/20 rounded-full blur-[60px]"></div>
                <div className="relative z-10 aspect-[11/18.5] bg-brand-black rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl shadow-black/40">
                  <Image 
                    src="/images/churches/Taglish-iPhone-on-Hand.png" 
                    alt="MyJourney App Mockup" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="order-1 lg:order-2">
              <span className="text-brand-yellow text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Discipleship Companion</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Equip Your Congregation with <span className="text-brand-yellow">MyJourney</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                Give every member a personal discipleship companion. MyJourney guides believers through Scripture with interactive content that deepens faith daily.
              </p>
              <Link 
                href="https://myjourney.ph.jesus.net/"
                className="inline-flex items-center gap-3 px-10 py-5 bg-brand-yellow text-brand-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-brand-yellow/10"
              >
                Explore MyJourney <ArrowRight size={20} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Digital Missionaries */}
      <section className="py-24 bg-brand-yellow text-brand-black">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Raise <span className="italic">Digital Missionaries</span> in Your Church
            </h2>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed font-medium">
              Invite your members to join Digital Disciples PH—our community that trains and equips ordinary believers to share Jesus online. Perfect for those who want to serve but don&apos;t know where to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="https://www.facebook.com/groups/digitaldisciplesph/"
                target="_blank"
                className="w-full sm:w-auto px-10 py-5 bg-brand-black text-white font-bold rounded-2xl hover:shadow-black/30 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                Join Digital Disciples PH <ExternalLink size={20} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-brand-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-yellow rounded-full blur-[150px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ConsultationForm 
            badge="Church Partnership"
            title={<>Ready to Expand Your <br />Church&apos;s <span className="text-brand-yellow">Digital Impact?</span></>}
            subtitle="Our team is ready to help you implement these tools in your local context. Schedule a free consultation today."
            icon={Church}
            messagePlaceholder="How can we help your church grow digitally?"
          />
        </div>
      </section>
    </main>
  );
}
