import Image from "next/image";
import Link from "next/link";
import { unsplash } from "@/lib/utils";
import Container from "@/components/shared/Container";
import FadeIn from "@/components/shared/FadeIn";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={unsplash("photo-1522071820081-009f0129c71c")}
              alt="Editors collaborating around a table"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </FadeIn>
        <FadeIn delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            About the desk
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
            A small editorial team that still opens the carton.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            ImporterH publishes independent notes for people who buy overseas
            and sell at home. We compare platforms, walk factory samples, and
            write down the landed-cost math that pitch decks skip.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted">
            No marketplace owns this site. When a product or platform is in a
            review, it is because we used it — not because a media kit arrived.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-2"
          >
            Meet the desk
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
