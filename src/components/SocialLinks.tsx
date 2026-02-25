import type { CreatorProfile } from '../types/creator'

interface SocialLinksProps {
  profile: CreatorProfile
}

interface SocialCard {
  name: string
  icon: string
  handle: string
  url: string
  color: string
  glowColor: string
}

/**
 * Grid of holographic social media cards with hover glow effects.
 */
export default function SocialLinks({ profile }: SocialLinksProps) {
  const cards: SocialCard[] = [
    {
      name: 'YouTube',
      icon: '▶',
      handle: profile.youtube.handle ?? '@zyztm',
      url: profile.youtube.channelUrl ?? '#',
      color: '#ff0000',
      glowColor: 'rgba(255,0,0,0.3)',
    },
    {
      name: 'Twitch',
      icon: '🎮',
      handle: profile.twitch.username ?? 'zyztm',
      url: profile.twitch.channelUrl ?? '#',
      color: '#9147ff',
      glowColor: 'rgba(145,71,255,0.3)',
    },
    {
      name: 'TikTok',
      icon: '♪',
      handle: profile.tiktok.username ?? '@zyztm',
      url: profile.tiktok.profileUrl ?? '#',
      color: '#ff0050',
      glowColor: 'rgba(255,0,80,0.3)',
    },
    {
      name: 'Twitter / X',
      icon: '✕',
      handle: profile.twitter.username ?? '@zyztm',
      url: profile.twitter.profileUrl ?? '#',
      color: '#1d9bf0',
      glowColor: 'rgba(29,155,240,0.3)',
    },
    {
      name: 'Instagram',
      icon: '◈',
      handle: profile.instagram.username ?? '@zyztm',
      url: profile.instagram.profileUrl ?? '#',
      color: '#e1306c',
      glowColor: 'rgba(225,48,108,0.3)',
    },
    {
      name: 'Discord',
      icon: '◉',
      handle: profile.discord.serverName ?? 'ZYZTM Universe',
      url: profile.discord.inviteUrl ?? '#',
      color: '#5865f2',
      glowColor: 'rgba(88,101,242,0.3)',
    },
  ]

  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-widest neon-text-cyan uppercase mb-2">
            Connect
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <a
              key={card.name}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="holo-border glass-card rounded-xl p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 group cursor-pointer"
              style={
                {
                  '--glow': card.glowColor,
                } as React.CSSProperties
              }
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${card.glowColor}, 0 0 60px ${card.glowColor}`
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow =
                  '0 0 30px rgba(168,85,247,0.1), inset 0 0 30px rgba(168,85,247,0.05)'
              }}
            >
              <span
                className="text-4xl transition-transform duration-300 group-hover:scale-110"
                style={{ filter: `drop-shadow(0 0 8px ${card.color})` }}
              >
                {card.icon}
              </span>
              <span className="font-bold tracking-wider text-sm uppercase text-white/90">{card.name}</span>
              <span className="text-xs text-gray-400 truncate max-w-full">{card.handle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
