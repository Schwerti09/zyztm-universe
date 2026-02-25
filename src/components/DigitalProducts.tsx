import type { CreatorProfile } from '../types/creator'
import type { Product } from '../types/creator'

interface DigitalProductsProps {
  profile: CreatorProfile
}

/** Single product card */
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="glass-card holo-border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 group">
      {/* Image / placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-purple-900/40 via-cyan-900/20 to-pink-900/40 flex items-center justify-center overflow-hidden">
        <span
          className="text-6xl transition-transform duration-500 group-hover:scale-110"
          style={{ filter: 'drop-shadow(0 0 20px #a855f7)' }}
        >
          {product.category === 'presets' ? '🎨' : product.category === 'wallpapers' ? '🌆' : '📺'}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,10,30,0.8)] to-transparent" />
        <span className="absolute top-3 right-3 text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-[#a855f7]/20 border border-[#a855f7]/40 text-[#a855f7]">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-black text-lg tracking-wide text-white/95">{product.name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{product.description}</p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-black neon-text-cyan">
            ${product.price.toFixed(2)}
            <span className="text-xs font-normal text-gray-500 ml-1">{product.currency}</span>
          </span>
          <a
            href={product.purchaseUrl}
            className="relative px-5 py-2 rounded-lg font-bold text-sm tracking-widest uppercase transition-all duration-300 overflow-hidden group/btn"
            style={{
              background: 'linear-gradient(135deg, rgba(168,85,247,0.3), rgba(6,182,212,0.3))',
              border: '1px solid rgba(168,85,247,0.5)',
              boxShadow: '0 0 15px rgba(168,85,247,0.2)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(168,85,247,0.5)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(168,85,247,0.2)'
            }}
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  )
}

/**
 * Digital products store section with glassmorphism product cards.
 */
export default function DigitalProducts({ profile }: DigitalProductsProps) {
  return (
    <section id="store" className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-widest neon-text-cyan uppercase mb-2">
            Digital Store
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent mx-auto mb-4" />
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Premium digital assets for creators. Level up your aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-20 pt-10 border-t border-purple-500/10 text-center">
        <p className="neon-text-purple font-black tracking-widest text-xl mb-1">{profile.name}</p>
        <p className="text-gray-600 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} ZYZTM Universe. All rights reserved.
        </p>
      </div>
    </section>
  )
}
