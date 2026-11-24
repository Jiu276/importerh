import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(28,25,21,0.08)]">
      <Link href={`/products/${product.slug}`} className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.cover}
          alt={product.coverAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <span className="absolute top-3 left-3 rounded-full bg-paper/95 px-3 py-1 text-xs font-medium text-forest">
          {product.category}
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-ink/85 px-3 py-1 text-xs font-medium text-white">
          {product.score.toFixed(1)}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl leading-snug">
          <Link href={`/products/${product.slug}`} className="transition-colors hover:text-forest">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {product.tagline}
        </p>
        <div className="mt-auto flex items-end justify-between pt-5">
          <p className="text-sm font-medium text-ink">{product.price}</p>
          <Link
            href={`/products/${product.slug}`}
            className="text-sm text-forest transition-colors hover:text-copper"
          >
            View notes →
          </Link>
        </div>
      </div>
    </article>
  );
}
