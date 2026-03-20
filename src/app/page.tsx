import React from "react";
import Hero from "@/components/Hero";
import QuickStart from "@/components/QuickStart";
import AboutSection from "@/components/AboutSection";
import FreeTools from "@/components/FreeTools";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-light overflow-hidden relative">
      <Hero />
      <QuickStart />
      <AboutSection />
      <FreeTools />
      
      {/* Rest of the site sections will be added below */}
    </main>
  );
}
