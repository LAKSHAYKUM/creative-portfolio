"use client";

import { useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { showReelI } from "@/data/show-reel";
import { Dialog, DialogPortal, DialogOverlay } from "@/components/ui/dialog";

// TypeScript ke liye custom Wistia player tag declare karna padta hai taaki error na aaye
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "media-id"?: string;
          seo?: string;
          aspect?: string;
        },
        HTMLElement
      >;
    }
  }
}

interface VideoModalProps {
  item: showReelI | null;
  onClose: () => void;
}

export function VideoModal({ item, onClose }: VideoModalProps) {
  // Wistia ka latest player script dynamically load karne ke liye
  useEffect(() => {
    if (!item) return;

    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = `https://fast.wistia.com/embed/${item.wistiaId}.js`;
    script2.async = true;
    script2.type = "module";
    document.body.appendChild(script2);

    return () => {
      try {
        document.body.removeChild(script1);
        document.body.removeChild(script2);
      } catch (e) {
        // Cleanup error safe
      }
    };
  }, [item]);

  if (!item) return null;

  return (
    <Dialog open={!!item} onOpenChange={(open) => !open && onClose()}>
      <DialogPortal>
        <DialogOverlay className="bg-black/80" />

        <DialogPrimitive.Content
          aria-describedby={undefined}
          className="fixed inset-0 z-50 flex flex-col bg-black outline-none"
        >
          {/* Visually hidden title for accessibility */}
          <DialogPrimitive.Title className="sr-only">
            {item.title}
          </DialogPrimitive.Title>

          {/* Wistia Web Component Player */}
          <div className="relative h-full w-full overflow-hidden bg-black flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto px-4 flex items-center justify-center">
              <wistia-player
                media-id={item.wistiaId}
                seo="false"
                aspect="0.5625"
                style={{ width: "100%", height: "100%", display: "block" }}
              />
            </div>
          </div>

          {/* Top gradient */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent z-10" />

          {/* Title */}
          <p
            className="absolute left-6 top-5 font-mono text-base font-bold tracking-widest text-white uppercase whitespace-nowrap z-20"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}
          >
            {item.title}
          </p>

          {/* Close button */}
          <DialogPrimitive.Close
            onClick={onClose}
            className="absolute right-5 top-4 z-20 flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
          >
            <X size={16} />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}