"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-[92vh] min-h-[750px] w-full flex flex-col justify-center overflow-hidden bg-brand-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-75"
        >
          {/* Using the beautiful Jesus.Net Philippines local video */}
          <source src="/video/banner-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient Overlay for Text Readability - inspired by Gloo UI dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-brand-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col justify-center h-full pt-24 md:pt-32">
        <FadeIn direction="up" delay={0.2} duration={0.8} className="max-w-3xl">
          <p className="text-brand-yellow font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
            Welcome to
          </p>
          <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tight text-white mb-6 leading-[1.05]">
            Jesus.Net <br /> Philippines Portal
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed font-light">
            Free digital tools to help you know Jesus and share Him with others.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-yellow text-brand-black font-semibold px-8 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 group">
              Get Started
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium px-8 py-4 rounded-full transition-all border border-white/20 flex items-center justify-center">
              Explore Tools
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Video Controls Overlay */}
      <div className="absolute bottom-10 right-6 md:right-12 z-20 flex gap-3">
        <button 
          onClick={togglePlay}
          className="h-12 w-12 rounded-full bg-brand-black/40 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-white transition-all flex items-center justify-center group shadow-xl"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform translate-x-[1px]" />
          )}
        </button>
        <button 
          onClick={toggleMute}
          className="h-12 w-12 rounded-full bg-brand-black/40 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-white transition-all flex items-center justify-center group shadow-xl"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 group-hover:scale-110 transition-transform" />
          ) : (
            <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>
    </section>
  );
}
