/**
 * Central Creator Profile TypeScript Interfaces
 * All social accounts and creator data flows through these types.
 * @module types/creator
 */

/** Supported social platform identifiers */
export type SocialPlatform =
  | 'youtube'
  | 'twitch'
  | 'tiktok'
  | 'x'
  | 'instagram'
  | 'discord';

/** A single social account entry */
export interface SocialAccount {
  /** Platform identifier */
  platform: SocialPlatform;
  /** Display name / handle on the platform */
  handle: string;
  /** Direct URL to the profile */
  url: string;
  /** Follower / subscriber count (optional, fetched via API) */
  followers?: number;
  /** Whether this account is currently active */
  active: boolean;
}

/** Digital product available for purchase */
export interface DigitalProduct {
  /** Unique product id */
  id: string;
  /** Product title */
  title: string;
  /** Short description */
  description: string;
  /** Price in USD cents */
  priceUsdCents: number;
  /** Product type */
  type: 'overlay' | 'emote' | 'sound' | 'guide' | 'preset' | 'other';
  /** Thumbnail image URL */
  thumbnailUrl: string;
  /** Whether the product is currently available */
  available: boolean;
}

/** Content item from any platform feed */
export interface ContentItem {
  /** Unique content id */
  id: string;
  /** Source platform */
  platform: SocialPlatform;
  /** Content title */
  title: string;
  /** Thumbnail URL */
  thumbnailUrl: string;
  /** Direct link to the content */
  url: string;
  /** ISO 8601 publish date */
  publishedAt: string;
  /** View / watch count */
  views?: number;
}

/** Schedule entry for upcoming streams / events */
export interface ScheduleEntry {
  /** Unique entry id */
  id: string;
  /** Event title */
  title: string;
  /** ISO 8601 start time */
  startTime: string;
  /** Platform the event takes place on */
  platform: SocialPlatform;
  /** Optional description */
  description?: string;
}

/** Root creator profile – single source of truth */
export interface CreatorProfile {
  /** Creator display name */
  name: string;
  /** Short bio / tagline */
  tagline: string;
  /** Full bio text */
  bio: string;
  /** Avatar image URL */
  avatarUrl: string;
  /** Banner / header image URL */
  bannerUrl: string;
  /** All linked social accounts */
  socials: SocialAccount[];
  /** Digital products for sale */
  products: DigitalProduct[];
  /** Upcoming schedule */
  schedule: ScheduleEntry[];
  /** Brand accent colors (hex) */
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}
