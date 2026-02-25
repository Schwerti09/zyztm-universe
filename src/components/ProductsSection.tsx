/**
 * Digital products section with holographic product cards.
 * @module components/ProductsSection
 */

import type { CreatorProfile } from '../types/creator';
import { GlassCard } from './GlassCard';
import { LoadingSkeleton } from './LoadingSkeleton';

interface ProductsSectionProps {
  profile: CreatorProfile | undefined;
  isLoading: boolean;
}

/** Formats USD cents to a readable price string */
function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

/** Grid of digital products available for purchase */
export function ProductsSection({ profile, isLoading }: ProductsSectionProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="mb-8 text-center text-2xl font-semibold text-cyan-300">
        Digital Products
      </h2>

      {isLoading || !profile ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <LoadingSkeleton key={i} height="h-64" />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.products
            .filter((p) => p.available)
            .map((product) => (
              <GlassCard key={product.id} className="flex flex-col gap-4">
                {/* Thumbnail */}
                <div className="h-40 overflow-hidden rounded-lg bg-gradient-to-br from-purple-900/40 to-cyan-900/40">
                  <img
                    src={product.thumbnailUrl}
                    alt={product.title}
                    className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-lg font-semibold text-white/90">{product.title}</h3>
                  <p className="flex-1 text-sm text-white/50">{product.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-bold text-cyan-400">
                      {formatPrice(product.priceUsdCents)}
                    </span>
                    <span className="rounded-md border border-purple-500/40 bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300">
                      {product.type}
                    </span>
                  </div>
                </div>
              </GlassCard>
            ))}
        </div>
      )}
    </section>
  );
}
