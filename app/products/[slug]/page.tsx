import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/data/products";
import { getArticle } from "@/data/articles";
import Container from "@/components/shared/Container";
import SocialWidget from "@/components/shared/SocialWidget";

export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.excerpt,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const relatedArticle = product.relatedArticle
    ? getArticle(product.relatedArticle)
    : undefined;

  return (
    <article className="pt-24 pb-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={product.cover}
                alt={product.coverAlt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {product.gallery.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              {product.category} · {product.score.toFixed(1)} / 10
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight">
              {product.name}
            </h1>
            <p className="mt-3 text-lg text-muted">{product.tagline}</p>
            <p className="mt-5 text-2xl font-medium">{product.price}</p>
            <p className="mt-5 leading-relaxed text-muted">{product.excerpt}</p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-muted">Origin</dt>
                <dd className="mt-1 font-medium">{product.origin}</dd>
              </div>
              <div>
                <dt className="text-muted">MOQ</dt>
                <dd className="mt-1 font-medium">{product.moq}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-muted">Best for</dt>
                <dd className="mt-1 font-medium">{product.bestFor}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={product.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-paper transition-all hover:-translate-y-0.5 hover:bg-forest-2"
              >
                Check live listings
              </a>
              {relatedArticle ? (
                <Link
                  href={`/blog/${relatedArticle.slug}`}
                  className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-forest"
                >
                  Read the test
                </Link>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <h2 className="font-serif text-3xl">The desk notes</h2>
            <div className="prose-article mt-5">
              {product.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-card p-5">
                <h3 className="font-medium text-forest">Why it stays on the list</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  {product.pros.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-line bg-card p-5">
                <h3 className="font-medium text-copper">The catch</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  {product.cons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <aside className="rounded-2xl border border-line bg-card p-6">
            <h2 className="font-serif text-2xl">Specs</h2>
            <dl className="mt-4 divide-y divide-line">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4 py-3 text-sm">
                  <dt className="text-muted">{spec.label}</dt>
                  <dd className="text-right font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <SocialWidget />
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
