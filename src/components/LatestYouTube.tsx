/**
 * @fileoverview LatestYouTube – neon-cyberpunk grid component that displays
 * the latest YouTube videos fetched via the get-youtube-videos Netlify Function.
 *
 * Features:
 * - Glass-card grid with holographic shine and hover particle effect
 * - Lazy-loaded thumbnails with skeleton placeholders
 * - Empty-state with neon "Check my Channel" button
 * - Scanline overlay consistent with the Nexus design system
 */

import { useEffect, useState } from "react";
import styles from "./LatestYouTube.module.css";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

/** Video object returned by the Netlify Function. */
interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  videoUrl: string;
}

/** Component props. */
interface LatestYouTubeProps {
  /** YouTube channel ID to fetch videos for */
  channelId: string;
  /** Maximum number of videos to display (default 12) */
  maxResults?: number;
  /** Fallback channel URL for "Check my Channel" button */
  channelUrl?: string;
}

/* ------------------------------------------------------------------ */
/*  Skeleton Card                                                      */
/* ------------------------------------------------------------------ */

function SkeletonCard() {
  return (
    <div className={`${styles.card} ${styles.skeleton}`} aria-hidden="true">
      <div className={styles.skeletonThumb} />
      <div className={styles.cardBody}>
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonDate} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

/**
 * Displays the latest YouTube videos in a neon-cyberpunk card grid.
 *
 * @param props - {@link LatestYouTubeProps}
 * @returns JSX element
 */
export default function LatestYouTube({
  channelId,
  maxResults = 12,
  channelUrl,
}: LatestYouTubeProps) {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchVideos() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `/.netlify/functions/get-youtube-videos?channelId=${encodeURIComponent(channelId)}&maxResults=${maxResults}`,
        );

        if (!res.ok) {
          const body = await res.json().catch(() => null);
          throw new Error(
            (body as { error?: string } | null)?.error ??
              `HTTP ${res.status}`,
          );
        }

        const data: YouTubeVideo[] = await res.json();

        if (!cancelled) {
          setVideos(data);
        }
      } catch (err: unknown) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load videos",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchVideos();

    return () => {
      cancelled = true;
    };
  }, [channelId, maxResults]);

  /* ---- Fallback channel link ---- */
  const resolvedChannelUrl =
    channelUrl ?? `https://www.youtube.com/channel/${channelId}`;

  /* ---- Format date ---- */
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  /* ---- Render ---- */
  return (
    <section className={styles.section}>
      {/* Scanline overlay */}
      <div className={styles.scanlines} aria-hidden="true" />

      <h2 className={styles.heading}>
        <span className={styles.neonText}>Latest Videos</span>
      </h2>

      {/* Loading skeletons */}
      {loading && (
        <div className={styles.grid}>
          {Array.from({ length: maxResults }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div className={styles.emptyState}>
          <p className={styles.emptyText}>{error}</p>
          <a
            href={resolvedChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.neonButton}
          >
            Check my Channel
          </a>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && videos.length === 0 && (
        <div className={styles.emptyState}>
          <p className={styles.emptyText}>No recent uploads yet</p>
          <a
            href={resolvedChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.neonButton}
          >
            Check my Channel
          </a>
        </div>
      )}

      {/* Video grid */}
      {!loading && !error && videos.length > 0 && (
        <div className={styles.grid}>
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              {/* Holographic shine overlay */}
              <div className={styles.holoShine} aria-hidden="true" />

              {/* Particle burst on hover (CSS-only) */}
              <div className={styles.particles} aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <img
                src={video.thumbnail}
                alt={video.title}
                className={styles.thumb}
                loading="lazy"
                decoding="async"
                width={480}
                height={360}
              />

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{video.title}</h3>
                <time className={styles.cardDate} dateTime={video.publishedAt}>
                  {formatDate(video.publishedAt)}
                </time>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
