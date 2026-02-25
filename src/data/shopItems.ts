export interface ShopItem {
  id: string;
  title: string;
  description: string;
  price: number; // in cents (Stripe format)
  currency: string;
  image: string;
  category: "preset" | "wallpaper" | "mini-course" | "vod-pack" | "ai-fan-art";
  isAiGenerated: boolean;
  /** Stripe Price ID – set when Stripe products are created */
  stripePriceId: string;
  /** Optional: Gumroad or Supabase product reference for future integration */
  externalRef?: string;
}

const shopItems: ShopItem[] = [
  {
    id: "preset-neon-dreams",
    title: "Neon Dreams Preset Pack",
    description: "10 cinematic colour-grading presets for Premiere & DaVinci Resolve.",
    price: 1499,
    currency: "eur",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
    category: "preset",
    isAiGenerated: false,
    stripePriceId: "price_preset_neon_dreams",
  },
  {
    id: "wallpaper-cyber-tokyo",
    title: "Cyber Tokyo Wallpaper Set",
    description: "8K wallpapers – neon-lit cityscapes for desktop & mobile.",
    price: 499,
    currency: "eur",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop",
    category: "wallpaper",
    isAiGenerated: false,
    stripePriceId: "price_wallpaper_cyber_tokyo",
  },
  {
    id: "course-stream-setup",
    title: "Stream Setup Mini-Course",
    description: "45-min video course: OBS, overlays & alerts from zero to pro.",
    price: 2999,
    currency: "eur",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop",
    category: "mini-course",
    isAiGenerated: false,
    stripePriceId: "price_course_stream_setup",
  },
  {
    id: "vod-exclusive-season1",
    title: "Exclusive VOD Pack – Season 1",
    description: "12 uncut VODs with behind-the-scenes commentary.",
    price: 1999,
    currency: "eur",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    category: "vod-pack",
    isAiGenerated: false,
    stripePriceId: "price_vod_exclusive_s1",
  },
  {
    id: "ai-art-hologram",
    title: "AI Hologram Portrait",
    description: "Unique AI-generated holographic fan-art portrait.",
    price: 799,
    currency: "eur",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop",
    category: "ai-fan-art",
    isAiGenerated: true,
    stripePriceId: "price_ai_art_hologram",
  },
  {
    id: "ai-art-neon-avatar",
    title: "AI Neon Avatar Pack",
    description: "5 AI-generated neon avatar variations for your socials.",
    price: 599,
    currency: "eur",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    category: "ai-fan-art",
    isAiGenerated: true,
    stripePriceId: "price_ai_neon_avatar",
  },
];

export default shopItems;
