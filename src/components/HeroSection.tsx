import type { CreatorProfile } from '../types/creator'

interface HeroSectionProps {
  profile: CreatorProfile
}

/**
 * Full-viewport hero section with glitch name, neon tagline, bio, and CTAs.
 */
export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(168,85,247,0.15) 0%, rgba(6,182,212,0.07) 50%, transparent 100%)',
        }}
      />

      {/* Avatar */}
      <div className="relative mb-8 animate-float">
        <div className="w-28 h-28 rounded-full holo-border overflow-hidden mx-auto">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900 via-cyan-900 to-pink-900 flex items-center justify-center text-5xl select-none">
            ⚡
          </div>
        </div>
        {/* Live pulse ring */}
        <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#a855f7] animate-pulse-neon border-2 border-[#050508]" />
      </div>

      {/* Name with glitch */}
      <h1
        className="text-7xl md:text-9xl font-black tracking-widest mb-4 neon-text-purple select-none"
        style={{ fontVariantNumeric: 'tabular-nums', letterSpacing: '0.15em' }}
      >
        {profile.name}
      </h1>

      {/* Glitch duplicate (decorative) */}
      <div className="relative -mt-4 mb-2 h-0 overflow-visible pointer-events-none select-none" aria-hidden="true">
        <span
          className="absolute left-1/2 -translate-x-1/2 text-7xl md:text-9xl font-black tracking-widest text-[#06b6d4] opacity-20 animate-glitch"
          style={{ letterSpacing: '0.15em', top: '-1rem' }}
        >
          {profile.name}
        </span>
      </div>

      {/* Tagline */}
      <p className="text-xl md:text-2xl font-semibold mb-6 neon-text-cyan tracking-widest uppercase">
        {profile.tagline}
      </p>

      {/* Bio */}
      <p className="max-w-xl text-gray-400 text-base md:text-lg leading-relaxed mb-10">
        {profile.bio}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href={profile.discord.inviteUrl}
          className="relative px-8 py-3 rounded-lg font-bold text-white tracking-wider uppercase transition-all duration-300 overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(236,72,153,0.4))',
            border: '1px solid #ec4899',
            boxShadow: '0 0 20px rgba(236,72,153,0.3)',
          }}
        >
          <span className="relative z-10">Join Discord</span>
          <span className="absolute inset-0 bg-[#ec4899] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </a>

        <a
          href="#store"
          className="relative px-8 py-3 rounded-lg font-bold text-white tracking-wider uppercase transition-all duration-300 overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(168,85,247,0.4))',
            border: '1px solid #a855f7',
            boxShadow: '0 0 20px rgba(168,85,247,0.3)',
          }}
        >
          <span className="relative z-10">Shop Now</span>
          <span className="absolute inset-0 bg-[#a855f7] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs tracking-widest text-gray-500 uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#a855f7] to-transparent animate-pulse-neon" />
      </div>
    </section>
  )
}
