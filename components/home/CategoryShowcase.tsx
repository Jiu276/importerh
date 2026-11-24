import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/articles";
import { unsplash } from "@/lib/utils";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";

const visuals: Record<string, { image: string; blurb: string }> = {
  "Product Reviews": {
    image: unsplash("photo-1590658268037-6bf12165a8df", 900),
    blurb: "What we would actually import.",
  },
  "Platform Guides": {
    image: unsplash("photo-1460925895917-afdab827c52f", 900),
    blurb: "Where to list, and what it costs.",
  },
  Sourcing: {
    image: unsplash("photo-1578575437130-527eed3abbec", 900),
    blurb: "Factories, freight, and red flags.",
  },
  "Market Insights": {
    image: unsplash("photo-1553413077-190dd305871c", 900),
    blurb: "Margins after the ads and fees.",
  },
};

export default function CategoryShowcase() {
  const shown = categories;

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Desks"
          title="Read by the work you actually do"
          description="Product recommendations, platform comparisons, sourcing notes, and margin math — filed so you can find them later."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((category, index) => {
            const visual = visuals[category] ?? visuals["Product Reviews"];
            return (
              <FadeIn key={category} delay={index * 80}>
                <Link
                  href={`/blog?category=${encodeURIComponent(category)}`}
                  className="group relative block overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={visual.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="font-serif text-2xl">{category}</p>
                    <p className="mt-1 text-sm text-white/75">{visual.blurb}</p>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
