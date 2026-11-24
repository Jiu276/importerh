import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { unsplash } from "@/lib/utils";
import Container from "@/components/shared/Container";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-ink">
      <Image
        src={unsplash("photo-1587293852726-70cdb56c2866", 2400)}
        alt="Aerial view of a container port at work"
        fill
        priority
        className="hero-zoom object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/62 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/40" />

      <Container className="relative flex min-h-[92vh] flex-col justify-center pb-16 pt-28 sm:justify-end sm:pb-20 sm:pt-32">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
          Independent trade desk
        </p>
        <h1 className="animate-fade-up delay-1 mt-5 max-w-3xl font-serif text-4xl leading-[1.08] text-white sm:text-6xl lg:text-7xl">
          Know what to import.
          <span className="block text-white/80">Know where to sell it.</span>
        </h1>
        <p className="animate-fade-up delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Field-tested product reviews, platform comparisons, and sourcing notes
          for operators who buy overseas and ship worldwide.
        </p>
        <div className="animate-fade-up delay-3 mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/blog"
            className="rounded-full bg-copper px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-2"
          >
            Read the journal
          </Link>
          <Link
            href="/products"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
          >
            Browse products
          </Link>
        </div>
        <a
          href="#featured"
          className="animate-fade-up delay-4 mt-14 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
        >
          <ArrowDown size={14} className="animate-bounce" />
          Scroll the brief
        </a>
      </Container>
    </section>
  );
}
