"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface MessageCardProps {
  message: string;
  name: string;
  isActive: boolean;
  avatar: string;
  role: string;
  thumbnail?: string; // Naya prop thumbnails ke liye
}

export const MessageCard = ({
  message,
  name,
  isActive,
  avatar,
  role,
  thumbnail, // Naya prop
}: MessageCardProps) => {
  return (
    <div
      className={cn(
        "embla__slide group relative flex flex-col transition-all duration-500 select-none",
      )}
      style={{
        flex: "0 0 calc(100vw - 80px)",
        marginRight: "16px",
        minWidth: "320px",
        // Card ki width thodi aur badha di hai taaki thumbnail aur text dono fit ho sakein
        maxWidth: thumbnail ? "960px" : "480px", 
      }}
    >
      {/* --- Apple Liquid Glass Card --- */}
      <figure
        className={cn(
          "relative flex h-full overflow-hidden transition-all duration-500 rounded-3xl",
          // Flex layout: Column on mobile, Row on desktop IF thumbnail exists
          thumbnail ? "flex-col md:flex-row" : "flex-col",
          // Apple Glassmorphism: Deep blur, translucent white/black tint, layered borders
          "bg-white/[0.03] dark:bg-white/[0.02]",
          "backdrop-blur-2xl backdrop-saturate-200",
          "border border-white/10 dark:border-white/10",
          "shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]",
          // Active State with liquid light refraction feel
          isActive
            ? "opacity-100 scale-100 border-white/25 shadow-[0_12px_40px_0_rgba(255,255,255,0.08)] bg-white/[0.06]"
            : "opacity-50 scale-95 hover:opacity-80"
        )}
      >
        {/* --- Left Side: Thumbnail Liquid Glass Container --- */}
        {thumbnail && (
          <div className="relative w-full md:w-[45%] p-6 md:p-8 flex items-center justify-center">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-inner">
              {/* Ambient Glow behind thumbnail matching red accent */}
              <div className="absolute inset-0 bg-primary/5 blur-2xl" />
              
              {/* The Actual Thumbnail Image */}
              <img
                src={thumbnail}
                alt={`Project Thumbnail for ${name}`}
                className="relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Liquid Glass Gloss Overlay over thumbnail */}
              <div className="absolute inset-0 z-20 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        )}

        {/* --- Right Side: Content Section --- */}
        <div
          className={cn(
            "relative flex flex-col justify-between p-8",
            thumbnail ? "w-full md:w-[55%]" : "w-full"
          )}
        >
          {/* Decorative Quote Icon */}
          <Quote className="absolute right-8 top-8 size-16 text-white/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />

          {/* Header: Avatar & Name */}
          <div className="relative z-10 flex flex-row items-center gap-4">
            <div className="relative size-13 overflow-hidden rounded-full border border-white/20 shadow-inner bg-white/10 backdrop-blur-md">
              <img
                src={avatar}
                alt={name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <figcaption className="text-base font-semibold tracking-tight text-foreground">
                {name}
              </figcaption>
              <p className="text-xs font-medium text-muted-foreground/90">
                {role}
              </p>
            </div>
          </div>

          {/* Body: Message */}
          <blockquote className="relative z-10 mt-8 text-sm md:text-base leading-relaxed text-muted-foreground/90 font-light">
            &quot;{message}&quot;
          </blockquote>
        </div>
      </figure>
    </div>
  );
};