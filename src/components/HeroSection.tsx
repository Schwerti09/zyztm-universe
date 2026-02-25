/**
 * Hero section with scanline overlay and neon glow.
 * @module components/HeroSection
 */

import type { CreatorProfile } from '../types/creator';
import { LoadingSkeleton } from './LoadingSkeleton';

interface HeroSectionProps {
  profile: CreatorProfile | undefined;
  isLoading: boolean;
}

/** Full-width hero with cyberpunk scanlines and glassmorphism */
export function HeroSection({ profile, isLoading }: HeroSectionProps) {
  if (isLoading || !profile) {
    return (
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4">
        <LoadingSkeleton width="w-32" height="h-32" circle />
        <LoadingSkeleton width="w-64" height="h-10" />
        <LoadingSkeleton width="w-96" height="h-6" />
      </section>
    );
  }

  return (
    <section className="hero-section relative flex min-h-[60vh] flex-col items-center justify-center gap-6 overflow-hidden px-4 text-center">
      {/* Scanline overlay */}
      <div className="scanline-overlay pointer-events-none absolute inset-0 z-20" />

      {/* Radial glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.15)_0%,_transparent_70%)]" />

      {/* Avatar */}
      <div className="relative z-30">
        <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-purple-500/60 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>

      {/* Name + Tagline */}
      <div className="relative z-30">
        <h1 className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg text-purple-200/80 md:text-xl">
          {profile.tagline}
        </p>
      </div>

      {/* Bio */}
      <p className="relative z-30 max-w-2xl text-sm leading-relaxed text-white/60">
        {profile.bio}
      </p>
    </section>
  );
}
