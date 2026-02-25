import type { Context } from '@netlify/functions'

export default async (_req: Request, _context: Context) => {
  const apiKey = Netlify.env.get('YOUTUBE_API_KEY')
  const channelId = Netlify.env.get('YOUTUBE_CHANNEL_ID') ?? 'CHANNEL_ID_PLACEHOLDER'

  if (!apiKey) {
    return new Response(
      JSON.stringify({ videos: [], error: 'API key not configured' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300',
        },
      }
    )
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=6&type=video`
    const response = await fetch(url)
    const data = (await response.json()) as {
      items?: Array<{
        id: { videoId: string }
        snippet: {
          title: string
          publishedAt: string
          description: string
          thumbnails?: { medium?: { url: string } }
        }
      }>
    }

    const videos = (data.items ?? []).map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails?.medium?.url ?? '',
      publishedAt: item.snippet.publishedAt,
      description: item.snippet.description,
      url: `https://youtube.com/watch?v=${item.id.videoId}`,
    }))

    return new Response(JSON.stringify({ videos }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300',
      },
    })
  } catch {
    return new Response(
      JSON.stringify({ videos: [], error: 'Failed to fetch videos' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}

export const config = { path: '/api/youtube' }
