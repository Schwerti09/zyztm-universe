export interface SocialAccount {
  channelId?: string;
  channelUrl?: string;
  handle?: string;
  username?: string;
  profileUrl?: string;
  inviteUrl?: string;
  serverName?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  imageUrl: string;
  purchaseUrl: string;
  category: string;
}

export interface CreatorProfile {
  name: string;
  tagline: string;
  avatar: string;
  banner: string;
  bio: string;
  youtube: SocialAccount;
  twitch: SocialAccount;
  tiktok: SocialAccount;
  twitter: SocialAccount;
  instagram: SocialAccount;
  discord: SocialAccount;
  products: Product[];
}
