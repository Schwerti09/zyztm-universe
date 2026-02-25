export interface SocialYouTube {
  channelId: string;
  handle: string;
}

export interface SocialTwitch {
  username: string;
  channelId: string;
}

export interface Socials {
  youtube: SocialYouTube;
  twitch: SocialTwitch;
  tiktok: string;
  instagram: string;
  x: string;
  discord: string;
}

export interface CreatorStats {
  followersTotal: number;
  totalVideos: number;
  totalStreams: number;
  totalLikes: number;
}

export interface CreatorProfile {
  name: string;
  bio: string;
  avatar: string;
  banner: string;
  socials: Socials;
  liveStatus: boolean;
  currentStreamUrl: string;
  stats: CreatorStats;
}

export const defaultCreatorProfile: CreatorProfile = {
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
