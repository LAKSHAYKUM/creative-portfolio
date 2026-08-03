"use client";

import { LiveWebsiteEmbed } from "@/components/live-website-embed";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AboutMe from "@/components/sections/about/about-me";
import CalBooking from "@/components/sections/home/cal-booking";
import Testimonials from "@/components/sections/home/testimonials";
import Features from "@/components/sections/home/features";
import Preloader from "@/components/common/preloader";
import ShowReel from "@/components/sections/showreel";
import CollabSec from "@/components/sections/home/collab-section";
import AboutScrollSection from "@/components/sections/about/about-scroll-section";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => {
    setIsLoading(false);
    document.body.style.cursor = "default";
    window.scrollTo(0, 0);
  };

  return (
    // Yahan humne overflow-x-hidden w-full max-w-full joda hai taaki phone par screen cut na ho
    <div className="flex min-h-screen flex-col items-center justify-center scroll-smooth overflow-x-hidden w-full max-w-full">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={handleLoaded} />}
      </AnimatePresence>

      {/*About Me is Hero Section */}
      <section id="hero" className="w-full scroll-mt-24 px-4 sm:px-6 md:px-8">
        <AboutMe />
      </section>
      <section className="w-full px-4 sm:px-6 md:px-8">
        <ShowReel />
      </section>

      {/* About Scroll Section */}
      <section id="about" className="w-full px-4 sm:px-6 md:px-8">
        <AboutScrollSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full scroll-mt-24 px-4 sm:px-6 md:px-8">
        <Features />
      </section>
      
      <div className="w-full px-4 sm:px-6 md:px-8">
        <LiveWebsiteEmbed 
          url="https://glintofficial.netlify.app/" 
          title="NXT GEN INNOVATORS" 
        />
      </div>

      <section className="w-full px-4 sm:px-6 md:px-8">
        <CollabSec />
      </section>

      <section className="w-full px-4 sm:px-6 md:px-8">
        <Testimonials />
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="w-full scroll-mt-24 px-4 sm:px-6 md:px-8">
        <CalBooking />
      </section>
    </div>
  );
}