"use client";

import React, { useState } from "react";
import { ExternalLink, RefreshCw } from "lucide-react";

interface LiveWebsiteEmbedProps {
  url: string;
  title: string;
}

export function LiveWebsiteEmbed({ url, title }: LiveWebsiteEmbedProps) {
  const [key, setKey] = useState(0);

  return (
    <section className="py-16 md:py-24 w-full">
      {/* Changed max-w-5xl to max-w-7xl and adjusted mobile padding px-3 to give more width */}
      <div className="mx-auto max-w-7xl px-3 md:px-8">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3">
            Live Project Showcase
          </h3>
          <p className="text-muted-foreground text-base md:text-lg">
            Scroll and interact with the live website right here below.
          </p>
        </div>

        {/* Apple Liquid Glass Browser Window Container */}
        <div className="relative overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-200 border border-white/10 shadow-[0_16px_48px_0_rgba(0,0,0,0.5)]">
          
          {/* Top Gloss Reflection Line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-20" />

          {/* Browser Toolbar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-500/80 inline-block" />
              <span className="size-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="size-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-3 text-xs font-mono text-muted-foreground hidden sm:inline-block">
                {title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setKey((prev) => prev + 1)}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition cursor-pointer"
                title="Reload Frame"
              >
                <RefreshCw size={12} />
                <span className="hidden sm:inline">Refresh</span>
              </button>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-full transition"
              >
                <span>Open Tab</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Interactive Live Website Viewport (Iframe) */}
          <div className="relative w-full h-[550px] md:h-[650px] bg-black/60 overflow-y-auto">
            <iframe
              key={key}
              src={url}
              title={title}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}