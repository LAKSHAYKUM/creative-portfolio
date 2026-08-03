import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section className="py-16 md:py-32 dark:bg-transparent">
      <h2 className="text-center text-5xl font-semibold mb-10">
        Visuals That Command Attention
      </h2>
      <p className="text-muted-foreground mx-auto text-center mb-2 text-xl">
        High quality Visuals
      </p>
      <p className="text-muted-foreground max-w-md text-center mx-auto mb-16 px-6 lg:max-w-3xl">
        From high-end commercial cuts and cinematic storytelling to 
        advanced After Effects post-production, our edits are designed to do more than just 
        look good. They capture attention, engage viewers, and leave a lasting impression.
      </p>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
        <div className="mx-auto grid gap-6 lg:grid-cols-2">
          
          {/* Card 1: Custom Image (Pehli image) */}
          <FeatureCard className="p-3 w-full overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-200 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-500 hover:border-white/25 hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.08)]">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-20" />
              <img
                src="/thumbnails/thumb-1.jpg"
                alt="Project Showcase 1"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none z-10" />
            </div>
            <div className="absolute -right-16 -bottom-16 size-40 bg-primary/15 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-primary/30" />
          </FeatureCard>

          {/* Card 2: Custom Image (Doosri image) */}
          <FeatureCard className="p-3 w-full overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-200 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-500 hover:border-white/25 hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.08)]">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-20" />
              <img
                src="/thumbnails/thumb-2.jpg"
                alt="Project Showcase 2"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none z-10" />
            </div>
            <div className="absolute -right-16 -bottom-16 size-40 bg-primary/15 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-primary/30" />
          </FeatureCard>

          {/* Card 3: Custom Image (Teesri image - Full Width) */}
          <FeatureCard className="p-3 w-full lg:col-span-2 overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-200 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-500 hover:border-white/25 hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.08)]">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-20" />
              <img
                src="/thumbnails/thumb-3.jpg"
                alt="Project Showcase 3"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none z-10" />
            </div>
            <div className="absolute -right-16 -bottom-16 size-40 bg-primary/15 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-primary/30" />
          </FeatureCard>

        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

export const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card
    className={cn("group relative shadow-zinc-950/5 border-0 bg-transparent", className)}
  >
    {children}
  </Card>
);