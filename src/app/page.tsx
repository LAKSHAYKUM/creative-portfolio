"use client";

import { LiveWebsiteEmbed } from "@/components/live-website-embed";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AboutMe from "@/components/sections/about/about-me";
import CalBooking from "@/components/sections/home/cal-booking";
import Testimonials from "@/components/sections/home/testimonials";
import Features from "@/components/sections/home/features"; // Yahan TimelineDemo ki jagah Features import kiya hai
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
    <div className="flex min-h-screen flex-col items-center justify-center scroll-smooth">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={handleLoaded} />}
      </AnimatePresence>

      {/*About Me is Hero Section */}
      <section id="hero" className="w-full scroll-mt-24">
        <AboutMe />
      </section>
      <ShowReel />

      {/* About Scroll Section */}
      <section id="about" className="">
        <AboutScrollSection />
      </section>

      {/* Projects Section - ab yahan Features component dikhega */}
      <section id="projects" className="w-full scroll-mt-24">
        <Features />
      </section>
      
      <LiveWebsiteEmbed 
  url="https://glintofficial.netlify.app/" 
  title="NXT GEN INNOVATORS" 
/>
      <CollabSec />
      <Testimonials />
      
      {/* Contact Section */}
      <section id="contact" className="w-full scroll-mt-24">
        <CalBooking />
      </section>
    </div>
  );
}