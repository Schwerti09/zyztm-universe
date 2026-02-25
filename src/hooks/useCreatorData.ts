import { useQuery } from '@tanstack/react-query'

/** Shape returned by the YouTube Netlify function */
interface YouTubeVideo {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
  description: string
  url: string
}

interface YouTubeResponse {
  videos: YouTubeVideo[]
  error?: string
}

/** Shape returned by the Twitch Netlify function */
interface TwitchResponse {
  isLive: boolean
  title?: string
  viewers?: number
  thumbnail?: string
  error?: string
}

/**
 * Fetches the latest YouTube videos via the Netlify function proxy.
 * Caches for 5 minutes and retries twice on failure.
 */
export function useYouTubeVideos() {
  return useQuery<YouTubeResponse>({
    queryKey: ['youtube', 'videos'],
    queryFn: async () => {
      const res = await fetch('/api/youtube')
      if (!res.ok) throw new Error('Failed to fetch YouTube videos')
      return res.json() as Promise<YouTubeResponse>
    },
    staleTime: 5 * 60 * 1000,
    retry: 2,
  })
}

/**
 * Polls the Twitch live status via the Netlify function proxy.
 * Refetches every 60 seconds to stay current.
 */
export function useTwitchStatus() {
  return useQuery<TwitchResponse>({
    queryKey: ['twitch', 'status'],
    queryFn: async () => {
      const res = await fetch('/api/twitch')
      if (!res.ok) throw new Error('Failed to fetch Twitch status')
      return res.json() as Promise<TwitchResponse>
    },
    staleTime: 60 * 1000,
    refetchInterval: 60 * 1000,
    retry: 1,
  })
}
