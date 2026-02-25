/**
 * Glassmorphism card with holographic border effect.
 * @module components/GlassCard
 */

import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

/** Reusable glass-morphism card with neon border glow */
export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-purple-500/5 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-purple-500/20 ${className}`}
    >
      {/* Holographic shimmer overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
