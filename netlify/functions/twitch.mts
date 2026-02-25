import type { Context } from '@netlify/functions'

export default async (_req: Request, _context: Context) => {
  const clientId = Netlify.env.get('TWITCH_CLIENT_ID')
  const clientSecret = Netlify.env.get('TWITCH_CLIENT_SECRET')
  const username = 'zyztm'

  if (!clientId || !clientSecret) {
    return new Response(
      JSON.stringify({ isLive: false, error: 'Twitch credentials not configured' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=60',
        },
      }
    )
  }

  try {
    // Obtain OAuth token
    const tokenRes = await fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
    })
    const tokenData = (await tokenRes.json()) as { access_token: string }

    // Check stream status
    const streamRes = await fetch(
      `https://api.twitch.tv/helix/streams?user_login=${username}`,
      {
        headers: {
          'Client-ID': clientId,
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    )
    const streamData = (await streamRes.json()) as {
      data?: Array<{
        title: string
        viewer_count: number
        thumbnail_url: string
      }>
    }
    const stream = streamData.data?.[0]

    return new Response(
      JSON.stringify({
        isLive: !!stream,
        title: stream?.title ?? '',
        viewers: stream?.viewer_count ?? 0,
        thumbnail:
          stream?.thumbnail_url
            ?.replace('{width}', '640')
            .replace('{height}', '360') ?? '',
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=60',
        },
      }
    )
  } catch {
    return new Response(
      JSON.stringify({ isLive: false, error: 'Failed to check stream status' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}

export const config = { path: '/api/twitch' }
