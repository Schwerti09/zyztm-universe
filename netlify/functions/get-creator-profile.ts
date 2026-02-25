// CreatorProfile type (mirrors src/data/creatorProfile.ts)
// In production, this would be fetched from Supabase or another data source.

interface SocialYouTube {
  channelId: string;
  handle: string;
}

interface SocialTwitch {
  username: string;
  channelId: string;
}

interface Socials {
  youtube: SocialYouTube;
  twitch: SocialTwitch;
  tiktok: string;
  instagram: string;
  x: string;
  discord: string;
}

interface CreatorStats {
  followersTotal: number;
  totalVideos: number;
  totalStreams: number;
  totalLikes: number;
}

interface CreatorProfile {
  name: string;
  bio: string;
  avatar: string;
  banner: string;
  socials: Socials;
  liveStatus: boolean;
  currentStreamUrl: string;
  stats: CreatorStats;
}

const creatorProfile: CreatorProfile = {
  name: "Zyztm",
  bio: "Content Creator · Streamer · Community Builder",
  avatar: "/avatar.png",
  banner: "/banner.png",
  socials: {
    youtube: {
      channelId: "UC_ZYZTM",
      handle: "@zyztm",
    },
    twitch: {
      username: "zyztm",
      channelId: "zyztm",
    },
    tiktok: "@zyztm",
    instagram: "@zyztm",
    x: "@zyztm",
    discord: "https://discord.gg/zyztm",
  },
  liveStatus: false,
  currentStreamUrl: "",
  stats: {
    followersTotal: 0,
    totalVideos: 0,
    totalStreams: 0,
    totalLikes: 0,
  },
};

export default async function handler(
  request: Request
): Promise<Response> {
  // In the future, use request params to customize response
  void request;
  // In the future, fetch from Supabase here
  return new Response(JSON.stringify(creatorProfile), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
