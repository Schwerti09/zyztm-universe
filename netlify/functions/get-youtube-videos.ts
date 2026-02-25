/**
 * @fileoverview Netlify Function to fetch latest YouTube videos for a channel.
 * Uses the YouTube Data API v3 search endpoint.
 *
 * @example
 * GET /.netlify/functions/get-youtube-videos?channelId=UCxxx
 * GET /.netlify/functions/get-youtube-videos?channelId=UCxxx&maxResults=6
 */

// @netlify/functions provides the serverless runtime

/* ------------------------------------------------------------------ */
/*  TypeScript Interfaces                                              */
/* ------------------------------------------------------------------ */

/** Clean video object returned to the client. */
interface YouTubeVideo {
  /** YouTube video ID */
  id: string;
  /** Video title */
  title: string;
  /** High-resolution thumbnail URL */
  thumbnail: string;
  /** ISO-8601 publish date */
  publishedAt: string;
  /** Direct link to the video */
  videoUrl: string;
}

/** Single item from the YouTube Data API search response. */
interface YouTubeSearchItem {
  id: { videoId: string };
  snippet: {
    title: string;
    publishedAt: string;
    thumbnails: {
      high: { url: string };
    };
  };
}

/** YouTube Data API search response shape. */
interface YouTubeSearchResponse {
  items?: YouTubeSearchItem[];
  error?: {
    code: number;
    message: string;
    errors?: { reason: string }[];
  };
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const YOUTUBE_SEARCH_URL =
  "https://youtube.googleapis.com/youtube/v3/search";

const CACHE_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "public, max-age=600, stale-while-revalidate=300",
} as const;

/* ------------------------------------------------------------------ */
/*  Helper: build a JSON Response                                      */
/* ------------------------------------------------------------------ */

/**
 * Creates a JSON Response with consistent headers.
 *
 * @param body  - Serialisable body
 * @param status - HTTP status code (default 200)
 * @returns Response
 */
function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers:
      status >= 400
        ? { "Content-Type": "application/json; charset=utf-8" }
        : CACHE_HEADERS,
  });
}

/* ------------------------------------------------------------------ */
/*  Handler                                                            */
/* ------------------------------------------------------------------ */

/**
 * Netlify Function handler – fetches the latest videos from a YouTube channel.
 *
 * @param request - Incoming Request object
 * @returns JSON array of {@link YouTubeVideo} objects
 */
export default async function handler(
  request: Request,
): Promise<Response> {
  /* ---- Pre-flight ---- */
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204 });
  }

  /* ---- Validate API key ---- */
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    return jsonResponse(
      { error: "Server misconfiguration: YOUTUBE_API_KEY is not set." },
      500,
    );
  }

  /* ---- Parse query params ---- */
  const url = new URL(request.url);
  const channelId = url.searchParams.get("channelId");

  if (!channelId) {
    return jsonResponse(
      { error: "Missing required query parameter: channelId" },
      400,
    );
  }

  const maxResults = Math.min(
    Math.max(Number(url.searchParams.get("maxResults")) || 12, 1),
    50,
  );

  /* ---- Call YouTube API ---- */
  const params = new URLSearchParams({
    part: "snippet",
    channelId,
    maxResults: String(maxResults),
    order: "date",
    type: "video",
    key: apiKey,
  });

  try {
    const response = await fetch(`${YOUTUBE_SEARCH_URL}?${params.toString()}`);
    const data = (await response.json()) as YouTubeSearchResponse;

    /* ---- Handle YouTube API errors ---- */
    if (data.error) {
      const reason = data.error.errors?.[0]?.reason ?? "unknown";

      if (reason === "quotaExceeded") {
        return jsonResponse(
          { error: "YouTube API quota exceeded. Please try again later." },
          429,
        );
      }

      if (
        reason === "keyInvalid" ||
        reason === "badRequest" ||
        data.error.code === 400
      ) {
        return jsonResponse(
          { error: "Invalid API key or request parameters." },
          403,
        );
      }

      return jsonResponse(
        { error: `YouTube API error: ${data.error.message}` },
        response.status,
      );
    }

    /* ---- Transform response ---- */
    const videos: YouTubeVideo[] = (data.items ?? []).map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
      videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    }));

    return jsonResponse(videos);
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Unknown error occurred";
    return jsonResponse(
      { error: `Failed to fetch YouTube videos: ${message}` },
      502,
    );
  }
}
