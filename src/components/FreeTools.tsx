"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";
import { ExternalLink, BookHeart, Film, PlayCircle, Video } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const TOOLS = [
  {
    name: "Himala Everyday",
    description: "Daily devotionals in Filipino that bring Scripture to life with practical reflections for your everyday walk with God.",
    url: "https://himala.everyday.ph.jesus.net",
    displayUrl: "himala.everyday.ph.jesus.net",
    icon: BookHeart,
  },
  {
    name: "MyJourney with The Chosen",
    description: "Interactive Bible study companion for The Chosen series. Watch episodes and dive deeper into Scripture together.",
    url: "https://myjourney.ph.jesus.net",
    displayUrl: "myjourney.ph.jesus.net",
    icon: Film,
  },
  {
    name: "The Life of Jesus Film",
    description: "Full-length film depicting the life of Jesus, available for screenings in churches, communities, and public venues.",
    url: "https://lifeofjesus.ph.jesus.net",
    displayUrl: "lifeofjesus.ph.jesus.net",
    icon: Video,
  },
  {
    name: "The Chosen Series",
    description: "Stream The Chosen for free—the groundbreaking series about Jesus and His disciples that's changing hearts worldwide.",
    url: "https://thechosen.ph.jesus.net",
    displayUrl: "thechosen.ph.jesus.net",
    icon: PlayCircle,
  },
];

export default function FreeTools() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();
  
  // We duplicate the tools array to create a seamless infinite loop
  const duplicatedTools = [...TOOLS, ...TOOLS, ...TOOLS];

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["0%", "-33.333333%"],
        transition: {
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <section className="py-24 bg-brand-yellow w-full text-brand-black overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-16 text-center md:text-left">
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-brand-black">
            Our <span className="font-light">Free Tools</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-black/70 font-medium max-w-2xl mx-auto md:mx-0">
            A growing library of digital resources designed to help you know Jesus and share Him.
          </p>
        </FadeIn>
      </div>

      {/* Desktop Marquee (Hidden on mobile) */}
      <div 
        className="hidden md:flex relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <motion.div 
          className="flex gap-6 px-3"
          animate={controls}
          style={{ width: "max-content" }}
        >
          {duplicatedTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div 
                key={`${tool.name}-${index}`} 
                className="w-[450px] shrink-0 flex flex-col min-h-full bg-brand-black rounded-2xl p-8 hover:bg-neutral-900 shadow-xl shadow-black/10 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-brand-yellow rounded-2xl text-brand-black group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-yellow/20">
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {tool.name}
                </h3>
                
                <p className="text-white/60 mb-8 text-[16px] font-light leading-relaxed flex-grow">
                  {tool.description}
                </p>
                
                <Link 
                  href={tool.url}
                  target="_blank"
                  className="mt-auto inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-brand-yellow/50 group-hover:bg-brand-yellow group-hover:text-brand-black text-brand-yellow font-medium transition-all duration-300"
                >
                  <span className="truncate mr-3">{tool.displayUrl}</span>
                  <ExternalLink className="w-4 h-4 shrink-0 opacity-50 group-hover:opacity-100" />
                </Link>
              </div>
            );
          })}
        </motion.div>
        
        {/* Gradient fades on left and right for seamless look against yellow */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-brand-yellow to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-brand-yellow to-transparent pointer-events-none" />
      </div>

      {/* Mobile Stacked View (Hidden on desktop) */}
      <div className="md:hidden flex flex-col gap-6 px-6">
        {TOOLS.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <FadeIn key={`mobile-${tool.name}`} direction="up" delay={index * 0.1}>
              <div className="flex flex-col bg-brand-black rounded-2xl p-6 shadow-xl shadow-black/10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 bg-brand-yellow rounded-xl text-brand-black">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-white leading-tight">
                    {tool.name}
                  </h3>
                </div>
                
                <p className="text-white/60 mb-6 text-base font-light leading-relaxed">
                  {tool.description}
                </p>
                
                <Link 
                  href={tool.url}
                  target="_blank"
                  className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-brand-yellow hover:bg-brand-yellow hover:text-brand-black font-medium transition-all duration-300"
                >
                  <span className="mr-2 text-sm truncate">{tool.displayUrl}</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
