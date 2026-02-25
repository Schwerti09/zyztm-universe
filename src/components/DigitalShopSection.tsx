import shopItems from "../data/shopItems";
import DigitalShopCard from "./DigitalShopCard";

export default function DigitalShopSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Digital Shop
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Exclusive digital products – presets, wallpapers, courses &amp; more.
        </p>
      </div>

      {/* Product grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {shopItems.map((item) => (
          <DigitalShopCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
