import type { CreatorProfile } from '../types/creator'
import { useTwitchStatus } from '../hooks/useCreatorData'
import LoadingSkeleton from './LoadingSkeleton'

interface LiveStreamProps {
  profile: CreatorProfile
}

/**
 * Twitch live stream embed section with live status indicator and offline fallback.
 */
export default function LiveStream({ profile }: LiveStreamProps) {
  const username = profile.twitch.username ?? 'zyztm'
  const { data, isLoading, isError } = useTwitchStatus()

  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            {data?.isLive && (
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse-neon" />
            )}
            <h2 className="text-3xl md:text-4xl font-black tracking-widest neon-text-magenta uppercase">
              {data?.isLive ? 'Live on Twitch' : 'Live on Twitch'}
            </h2>
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#ec4899] to-transparent mx-auto" />
        </div>

        {isLoading ? (
          <div className="glass-card rounded-2xl overflow-hidden p-6 space-y-4">
            <LoadingSkeleton height="h-64 md:h-96" className="rounded-xl" />
            <LoadingSkeleton height="h-6" width="w-3/4" />
            <LoadingSkeleton height="h-4" width="w-1/3" />
          </div>
        ) : isError || !data?.isLive ? (
          /* Offline screen */
          <div className="glass-card holo-border rounded-2xl overflow-hidden">
            <div className="flex flex-col items-center justify-center py-20 px-6 text-center gap-6">
              <div
                className="text-6xl animate-pulse-neon"
                style={{ filter: 'drop-shadow(0 0 16px #a855f7)' }}
              >
                📡
              </div>
              <div>
                <p className="text-2xl font-black tracking-widest neon-text-purple uppercase mb-2">
                  Currently Offline
                </p>
                <p className="text-gray-400 text-sm">
                  Signal lost. Check back soon for live transmissions.
                </p>
              </div>
              {/* CRT scan line decorative */}
              <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-[#a855f7] to-transparent opacity-60" />
              <a
                href={profile.twitch.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg font-bold tracking-widest text-sm uppercase transition-all duration-300 hover:scale-105"
                style={{
                  border: '1px solid #a855f7',
                  boxShadow: '0 0 20px rgba(168,85,247,0.3)',
                  background: 'rgba(168,85,247,0.1)',
                }}
              >
                Follow on Twitch
              </a>
            </div>
          </div>
        ) : (
          /* Live embed */
          <div className="glass-card holo-border rounded-2xl overflow-hidden">
            {data.title && (
              <div className="px-6 py-4 flex items-center gap-3 border-b border-purple-500/20">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm font-semibold text-gray-200 truncate">{data.title}</span>
                {data.viewers != null && data.viewers > 0 && (
                  <span className="ml-auto text-xs text-gray-400 shrink-0">
                    👁 {data.viewers.toLocaleString()} viewers
                  </span>
                )}
              </div>
            )}
            <div className="aspect-video">
              <iframe
                src={`https://player.twitch.tv/?channel=${username}&parent=${window.location.hostname}`}
                className="w-full h-full"
                allowFullScreen
                title={`${username} Twitch Stream`}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
