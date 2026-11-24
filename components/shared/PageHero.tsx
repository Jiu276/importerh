import Image from "next/image";
import Container from "@/components/shared/Container";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-24 pb-16 sm:pt-28 sm:pb-20">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/70 to-ink/35" />
      <Container className="relative">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.24em] text-copper">
          {eyebrow}
        </p>
        <h1 className="animate-fade-up delay-1 mt-3 max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="animate-fade-up delay-2 mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
