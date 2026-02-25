import type { CreatorProfile } from '../types/creator'
import { useYouTubeVideos } from '../hooks/useCreatorData'
import LoadingSkeleton from './LoadingSkeleton'

interface VideoGalleryProps {
  profile: CreatorProfile
}

/**
 * Latest YouTube videos section with skeleton loading and error fallback.
 */
export default function VideoGallery({ profile: _profile }: VideoGalleryProps) {
  const { data, isLoading, isError } = useYouTubeVideos()

  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-widest neon-text-purple uppercase mb-2">
            Latest Videos
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#a855f7] to-transparent mx-auto" />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass-card rounded-xl overflow-hidden space-y-3 p-0">
                <LoadingSkeleton height="h-44" className="rounded-none" />
                <div className="p-4 space-y-2">
                  <LoadingSkeleton height="h-4" />
                  <LoadingSkeleton height="h-3" width="w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : isError || !data?.videos?.length ? (
          <div className="text-center py-16 glass-card rounded-2xl">
            <p className="text-5xl mb-4">🎬</p>
            <p className="neon-text-purple font-black tracking-widest uppercase text-xl mb-2">
              Videos Loading Soon
            </p>
            <p className="text-gray-400 text-sm">
              Configure your YouTube API key to display latest videos.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.videos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card holo-border rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span
                      className="text-5xl"
                      style={{ filter: 'drop-shadow(0 0 16px #a855f7)' }}
                    >
                      ▶
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-white/90 line-clamp-2 mb-2 leading-snug">
                    {video.title}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {new Date(video.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
