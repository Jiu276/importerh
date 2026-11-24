import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getArticles, getRelatedArticles } from "@/data/articles";
import { getProduct } from "@/data/products";
import { formatDate } from "@/lib/utils";
import Container from "@/components/shared/Container";
import ArticleBody from "@/components/blog/ArticleBody";
import RelatedArticles from "@/components/blog/RelatedArticles";
import SocialWidget from "@/components/shared/SocialWidget";

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.slug);
  const relatedProducts = (article.relatedProducts ?? [])
    .map((productSlug) => getProduct(productSlug))
    .filter((product) => product !== undefined);

  return (
    <article className="pt-24 pb-20">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
          {article.category}
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{article.excerpt}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-line py-4 text-sm text-muted">
          <span>{article.author.name}</span>
          <span>{article.author.role}</span>
          <span>{formatDate(article.date)}</span>
          <span>{article.readTime} read</span>
        </div>
      </Container>

      <div className="relative mx-auto mt-8 aspect-[16/9] w-full max-w-5xl overflow-hidden sm:rounded-2xl">
        <Image
          src={article.cover}
          alt={article.coverAlt}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1100px) 1024px, 100vw"
        />
      </div>

      <Container className="mt-12 max-w-3xl">
        <ArticleBody content={article.content} />

        {relatedProducts.length ? (
          <aside className="mt-12 rounded-2xl border border-line bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              Product notes
            </p>
            <ul className="mt-4 space-y-4">
              {relatedProducts.map((product) => (
                <li key={product.slug} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="mt-1 text-sm text-muted">{product.tagline}</p>
                  </div>
                  <Link
                    href={`/products/${product.slug}`}
                    className="shrink-0 text-sm text-forest hover:text-copper"
                  >
                    Review →
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">Share this note</p>
          <SocialWidget variant="compact" />
        </div>
      </Container>

      <Container className="mt-4">
        <RelatedArticles articles={related} />
      </Container>
    </article>
  );
}
