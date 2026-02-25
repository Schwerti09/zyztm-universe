import type { ShopItem } from "../data/shopItems";

interface DigitalShopCardProps {
  item: ShopItem;
}

function formatPrice(cents: number, currency: string): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}

async function handleBuy(item: ShopItem) {
  try {
    const res = await fetch("/.netlify/functions/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        priceId: item.stripePriceId,
        productName: item.title,
        amount: item.price,
        currency: item.currency,
      }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error("No checkout URL returned", data);
    }
  } catch (err) {
    console.error("Checkout error:", err);
  }
}

const PARTICLES = Array.from({ length: 6 });

export default function DigitalShopCard({ item }: DigitalShopCardProps) {
  return (
    <div className="holo-card flex flex-col">
      {/* Particle overlay */}
      <div className="particle-container">
        {PARTICLES.map((_, i) => (
          <span key={i} className="particle" />
        ))}
      </div>

      {/* Image */}
      <div className="relative z-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />

        {/* KI-generiert badge */}
        {item.isAiGenerated && (
          <span className="ki-badge absolute top-3 right-3">
            KI-generiert
          </span>
        )}

        {/* Category label */}
        <span className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-0.5 text-xs text-cyan-300 backdrop-blur-sm">
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-0 flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-bold text-white">{item.title}</h3>

        <p className="flex-1 text-sm leading-relaxed text-gray-400">
          {item.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-extrabold text-cyan-400">
            {formatPrice(item.price, item.currency)}
          </span>

          <button
            className="neon-btn"
            onClick={() => handleBuy(item)}
            type="button"
          >
            Buy with Grok Pay
          </button>
        </div>
      </div>
    </div>
  );
}
