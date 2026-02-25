/**
 * Netlify Function – YouTube API proxy.
 * Keeps the YouTube Data API key secret on the server side.
 * @module functions/youtube
 */

export default async (request: Request) => {
  const apiKey = Netlify.env.get('YOUTUBE_API_KEY');
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'YouTube API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const url = new URL(request.url);
  const channelId = url.searchParams.get('channelId');

  if (!channelId) {
    return new Response(JSON.stringify({ error: 'channelId parameter required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const ytUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=6&order=date&type=video&key=${apiKey}`;
    const ytRes = await fetch(ytUrl);
    const data = await ytRes.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch YouTube data', details: String(err) }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const config = {
  path: '/api/youtube',
};
