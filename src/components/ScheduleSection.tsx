/**
 * Upcoming schedule section.
 * @module components/ScheduleSection
 */

import type { CreatorProfile, SocialPlatform } from '../types/creator';
import { GlassCard } from './GlassCard';
import { LoadingSkeleton } from './LoadingSkeleton';

/** Platform badge colors */
const badgeColors: Record<SocialPlatform, string> = {
  youtube: 'border-red-500/40 bg-red-500/20 text-red-300',
  twitch: 'border-purple-500/40 bg-purple-500/20 text-purple-300',
  tiktok: 'border-pink-500/40 bg-pink-500/20 text-pink-300',
  x: 'border-white/30 bg-white/10 text-white/80',
  instagram: 'border-amber-500/40 bg-amber-500/20 text-amber-300',
  discord: 'border-indigo-500/40 bg-indigo-500/20 text-indigo-300',
};

interface ScheduleSectionProps {
  profile: CreatorProfile | undefined;
  isLoading: boolean;
}

/** Formats an ISO date string to a readable format */
function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/** Upcoming streams & events displayed on a timeline */
export function ScheduleSection({ profile, isLoading }: ScheduleSectionProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="mb-8 text-center text-2xl font-semibold text-pink-300">
        Upcoming
      </h2>

      {isLoading || !profile ? (
        <div className="flex flex-col gap-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <LoadingSkeleton key={i} height="h-24" />
          ))}
        </div>
      ) : profile.schedule.length === 0 ? (
        <p className="text-center text-white/40">No upcoming events scheduled.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {profile.schedule.map((entry) => (
            <GlassCard key={entry.id} className="flex items-center gap-4">
              {/* Time */}
              <div className="min-w-[120px] text-sm text-white/60">
                {formatDate(entry.startTime)}
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3 className="font-medium text-white/90">{entry.title}</h3>
                {entry.description && (
                  <p className="mt-1 text-sm text-white/40">{entry.description}</p>
                )}
              </div>

              {/* Platform badge */}
              <span
                className={`rounded-md border px-3 py-1 text-xs font-medium ${badgeColors[entry.platform]}`}
              >
                {entry.platform}
              </span>
            </GlassCard>
          ))}
        </div>
      )}
    </section>
  );
}
