/**
 * Social links displayed as holographic cards.
 * @module components/SocialLinks
 */

import type { CreatorProfile, SocialPlatform } from '../types/creator';
import { GlassCard } from './GlassCard';
import { LoadingSkeleton } from './LoadingSkeleton';

/** Platform display metadata */
const platformMeta: Record<SocialPlatform, { label: string; icon: string; color: string }> = {
  youtube: { label: 'YouTube', icon: '▶', color: 'text-red-400' },
  twitch: { label: 'Twitch', icon: '◆', color: 'text-purple-400' },
  tiktok: { label: 'TikTok', icon: '♪', color: 'text-pink-400' },
  x: { label: 'X', icon: '✕', color: 'text-white' },
  instagram: { label: 'Instagram', icon: '◎', color: 'text-amber-400' },
  discord: { label: 'Discord', icon: '◈', color: 'text-indigo-400' },
};

interface SocialLinksProps {
  profile: CreatorProfile | undefined;
  isLoading: boolean;
}

/** Grid of social platform cards with neon hover effects */
export function SocialLinks({ profile, isLoading }: SocialLinksProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="mb-8 text-center text-2xl font-semibold text-purple-300">
        Connect
      </h2>

      {isLoading || !profile ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <LoadingSkeleton key={i} height="h-28" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {profile.socials
            .filter((s) => s.active)
            .map((social) => {
              const meta = platformMeta[social.platform];
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105"
                >
                  <GlassCard className="flex flex-col items-center gap-2 text-center">
                    <span className={`text-3xl ${meta.color}`}>{meta.icon}</span>
                    <span className="text-sm font-medium text-white/90">{meta.label}</span>
                    <span className="text-xs text-white/40">{social.handle}</span>
                  </GlassCard>
                </a>
              );
            })}
        </div>
      )}
    </section>
  );
}
