import { useState, useEffect } from "react";
import type { CreatorProfile } from "../data/creatorProfile";
import { defaultCreatorProfile } from "../data/creatorProfile";

/* ── SVG Social Icons (inline for zero dependencies) ── */

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.9 31.9 0 0 0 0 12a31.9 31.9 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.9 31.9 0 0 0 24 12a31.9 31.9 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}

function TwitchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M11.6 11.2V7h1.4v4.2h-1.4zm3.8 0V7H17v4.2h-1.6zM4.2 1 2 4.6v16.2h5.6V23h2.8l2.8-2.8h4.2L22 15.4V1H4.2zm16.4 13.7-3.5 3.5h-4.9L9.4 21v-2.8H5.6V2.4h15v12.3z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M19.3 5.4A4.6 4.6 0 0 1 16.2 2h-3.4v13.5a2.8 2.8 0 1 1-2-2.7V9.3a6.3 6.3 0 1 0 5.4 6.2V9.2A8 8 0 0 0 21 11V7.5a4.6 4.6 0 0 1-1.7-2.1z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M12 2.2c2.7 0 3 0 4.1.1 1 0 1.5.2 1.9.3a3.9 3.9 0 0 1 2.4 2.4c.1.4.3.9.3 1.9 0 1 .1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.5-.3 1.9a3.9 3.9 0 0 1-2.4 2.4c-.4.1-.9.3-1.9.3-1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.5-.2-1.9-.3a3.9 3.9 0 0 1-2.4-2.4c-.1-.4-.3-.9-.3-1.9 0-1-.1-1.4-.1-4.1s0-3 .1-4.1c0-1 .2-1.5.3-1.9A3.9 3.9 0 0 1 6 2.6c.4-.1.9-.3 1.9-.3 1 0 1.4-.1 4.1-.1M12 0C9.3 0 8.9 0 7.9.1 6.8.1 6 .3 5.4.5a5.3 5.3 0 0 0-2 1.3 5.3 5.3 0 0 0-1.3 2C1.8 4.3 1.6 5.1 1.6 6.2 1.5 7.2 1.5 7.5 1.5 12s0 4.8.1 5.8c.1 1.1.3 1.9.5 2.5a5.3 5.3 0 0 0 1.3 2 5.3 5.3 0 0 0 2 1.3c.6.2 1.4.4 2.5.5 1 0 1.3.1 5.8.1s4.8 0 5.8-.1c1.1-.1 1.9-.3 2.5-.5a5.3 5.3 0 0 0 2-1.3 5.3 5.3 0 0 0 1.3-2c.2-.6.4-1.4.5-2.5 0-1 .1-1.3.1-5.8s0-4.8-.1-5.8c-.1-1.1-.3-1.9-.5-2.5a5.3 5.3 0 0 0-1.3-2 5.3 5.3 0 0 0-2-1.3C18 .3 17.2.1 16.1.1 15.1 0 14.7 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.5a1.4 1.4 0 1 0 0-2.9 1.4 1.4 0 0 0 0 2.9z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M18.2 2.3h3.5l-7.6 8.7 9 11.8h-7l-5.5-7.2-6.3 7.2H.8l8.1-9.3L.4 2.3h7.2l5 6.6 5.7-6.6zm-1.2 18.4h1.9L7.1 4.3H5l12 16.4z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M20.3 4.4A19.6 19.6 0 0 0 15.5 3a14.3 14.3 0 0 0-.6 1.3 18.2 18.2 0 0 0-5.4 0A14.3 14.3 0 0 0 8.8 3a19.6 19.6 0 0 0-4.8 1.5A20.3 20.3 0 0 0 .5 18.5a19.8 19.8 0 0 0 6 3 14.3 14.3 0 0 0 1.3-2 12.8 12.8 0 0 1-2-.9l.5-.4a14 14 0 0 0 12 0l.5.4c-.7.4-1.3.7-2 1a14.3 14.3 0 0 0 1.2 2 19.8 19.8 0 0 0 6-3A20.3 20.3 0 0 0 20.3 4.4zM8 15.6c-1.2 0-2.2-1.1-2.2-2.5s1-2.5 2.2-2.5 2.2 1.1 2.2 2.5-1 2.5-2.2 2.5zm8.4 0c-1.2 0-2.2-1.1-2.2-2.5s1-2.5 2.2-2.5 2.2 1.1 2.2 2.5-1 2.5-2.2 2.5z" />
    </svg>
  );
}

/* ── Component ── */

interface SocialLink {
  label: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

function buildSocialLinks(profile: CreatorProfile): SocialLink[] {
  return [
    {
      label: "YouTube",
      url: `https://youtube.com/${profile.socials.youtube.handle}`,
      icon: <YouTubeIcon />,
      color: "#ff0000",
    },
    {
      label: "Twitch",
      url: `https://twitch.tv/${profile.socials.twitch.username}`,
      icon: <TwitchIcon />,
      color: "#9146ff",
    },
    {
      label: "TikTok",
      url: `https://tiktok.com/${profile.socials.tiktok}`,
      icon: <TikTokIcon />,
      color: "#00f2ea",
    },
    {
      label: "Instagram",
      url: `https://instagram.com/${profile.socials.instagram.replace("@", "")}`,
      icon: <InstagramIcon />,
      color: "#e1306c",
    },
    {
      label: "X",
      url: `https://x.com/${profile.socials.x.replace("@", "")}`,
      icon: <XIcon />,
      color: "#ffffff",
    },
    {
      label: "Discord",
      url: profile.socials.discord,
      icon: <DiscordIcon />,
      color: "#5865f2",
    },
  ];
}

export default function CentralHub() {
  const [profile, setProfile] = useState<CreatorProfile>(defaultCreatorProfile);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch("/.netlify/functions/get-creator-profile")
      .then((res) => res.json())
      .then((data: CreatorProfile) => setProfile(data))
      .catch(() => {
        /* fallback to default */
      });
  }, []);

  const socialLinks = buildSocialLinks(profile);
  const linkCount = socialLinks.length;

  function handleCardMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -12;
    setCardRotation({ x, y });
  }

  function handleCardMouseLeave() {
    setCardRotation({ x: 0, y: 0 });
  }

  return (
    <div style={styles.wrapper}>
      {/* Glassmorphism Card with 3D Hover (Three.js ready) */}
      <div
        data-testid="central-hub-card"
        style={{
          ...styles.card,
          transform: `perspective(800px) rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg)`,
        }}
        onMouseMove={handleCardMouseMove}
        onMouseLeave={handleCardMouseLeave}
      >
        {/* Avatar */}
        <div style={styles.avatarWrapper}>
          <img
            src={profile.avatar}
            alt={profile.name}
            style={styles.avatar}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Crect width='96' height='96' rx='48' fill='%23333'/%3E%3Ctext x='48' y='56' text-anchor='middle' fill='%23fff' font-size='32'%3EZ%3C/text%3E%3C/svg%3E";
            }}
          />
          {/* Live Status Badge */}
          {profile.liveStatus && (
            <a
              href={profile.currentStreamUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="live-badge"
              style={styles.liveBadge}
            >
              <span style={styles.liveDot} />
              LIVE
            </a>
          )}
        </div>

        {/* Name & Bio */}
        <h1 style={styles.name}>{profile.name}</h1>
        <p style={styles.bio}>{profile.bio}</p>

        {/* Neon Social Ring */}
        <div style={styles.socialRing} data-testid="social-ring">
          {socialLinks.map((link, i) => {
            const angle = (360 / linkCount) * i - 90;
            const radius = 100;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            const isHovered = hoveredIndex === i;

            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                aria-label={link.label}
                style={{
                  ...styles.socialIcon,
                  transform: `translate(${x}px, ${y}px) scale(${isHovered ? 1.3 : 1})`,
                  color: isHovered ? link.color : "#ccc",
                  filter: isHovered
                    ? `drop-shadow(0 0 8px ${link.color})`
                    : "none",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {link.icon}
              </a>
            );
          })}
        </div>

        {/* Stats */}
        <div style={styles.statsRow}>
          <div style={styles.stat}>
            <span style={styles.statValue}>{profile.stats.followersTotal.toLocaleString()}</span>
            <span style={styles.statLabel}>Followers</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statValue}>{profile.stats.totalVideos.toLocaleString()}</span>
            <span style={styles.statLabel}>Videos</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statValue}>{profile.stats.totalStreams.toLocaleString()}</span>
            <span style={styles.statLabel}>Streams</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statValue}>{profile.stats.totalLikes.toLocaleString()}</span>
            <span style={styles.statLabel}>Likes</span>
          </div>
        </div>

        {/* Tagline */}
        <p style={styles.tagline}>One Link to rule them all</p>
      </div>
    </div>
  );
}

/* ── Styles ── */

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "radial-gradient(ellipse at center, #0a0a1a 0%, #000 70%)",
    padding: "2rem",
  },
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    padding: "3rem 2.5rem",
    borderRadius: "1.5rem",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    boxShadow:
      "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 80px rgba(255, 255, 255, 0.02)",
    maxWidth: 440,
    width: "100%",
    transition: "transform 0.15s ease-out",
  },
  avatarWrapper: {
    position: "relative",
    marginBottom: "0.25rem",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid rgba(0, 255, 255, 0.4)",
    boxShadow: "0 0 20px rgba(0, 255, 255, 0.15)",
  },
  liveBadge: {
    position: "absolute",
    bottom: -4,
    right: -8,
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: "2px 8px",
    borderRadius: 9999,
    background: "#e10000",
    color: "#fff",
    fontSize: 11,
    fontWeight: 700,
    textDecoration: "none",
    letterSpacing: 1,
    animation: "pulse-glow 1.5s ease-in-out infinite",
    boxShadow: "0 0 12px rgba(225, 0, 0, 0.6)",
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#fff",
  },
  name: {
    margin: 0,
    fontSize: "1.75rem",
    fontWeight: 800,
    color: "#fff",
    letterSpacing: "-0.02em",
  },
  bio: {
    margin: 0,
    fontSize: "0.9rem",
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "center",
  },
  socialRing: {
    position: "relative",
    width: 240,
    height: 240,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem 0",
  },
  socialIcon: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    textDecoration: "none",
    transition: "all 0.25s ease",
    cursor: "pointer",
  },
  statsRow: {
    display: "flex",
    gap: "1.5rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  stat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
  statValue: {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#fff",
  },
  statLabel: {
    fontSize: "0.7rem",
    color: "rgba(255, 255, 255, 0.45)",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  tagline: {
    marginTop: "0.5rem",
    fontSize: "0.75rem",
    color: "rgba(0, 255, 255, 0.5)",
    fontStyle: "italic",
    letterSpacing: "0.05em",
  },
};
