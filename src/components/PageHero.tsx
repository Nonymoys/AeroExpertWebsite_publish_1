import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface PageHeroProps {
  children: ReactNode;
}

export default function PageHero({ children }: PageHeroProps) {
  return (
    <section className="relative py-28 overflow-hidden bg-background corner-bracket">
      {/* Grid overlay — CSS class, no inline style */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Orbs */}
      <div className="orb w-[32rem] h-[32rem] -top-16 -right-16 opacity-12 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
      <div className="orb w-[18rem] h-[18rem] bottom-0 -left-8 opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />

      {/* CSS scan line — no Motion overhead */}
      <div className="animate-scan absolute left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, hsl(var(--accent)/0.3), transparent)' }} />

      {/* Bottom shimmer border */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, hsl(var(--accent)/0.25), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: 'easeOut' as const }}
          className="max-w-3xl"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
