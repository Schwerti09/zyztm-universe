/**
 * Netlify Function – Twitch API proxy.
 * Keeps Twitch Client ID and Secret on the server side.
 * @module functions/twitch
 */

export default async (request: Request) => {
  const clientId = Netlify.env.get('TWITCH_CLIENT_ID');
  const clientSecret = Netlify.env.get('TWITCH_CLIENT_SECRET');

  if (!clientId || !clientSecret) {
    return new Response(JSON.stringify({ error: 'Twitch credentials not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const url = new URL(request.url);
  const login = url.searchParams.get('login');

  if (!login) {
    return new Response(JSON.stringify({ error: 'login parameter required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Get app access token
    const tokenRes = await fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
    });
    const tokenData = (await tokenRes.json()) as { access_token: string };

    // Get stream info
    const streamRes = await fetch(`https://api.twitch.tv/helix/streams?user_login=${login}`, {
      headers: {
        'Client-ID': clientId,
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });
    const streamData = await streamRes.json();

    return new Response(JSON.stringify(streamData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch Twitch data', details: String(err) }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const config = {
  path: '/api/twitch',
};
