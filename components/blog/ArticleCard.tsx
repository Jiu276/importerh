import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";
import { formatDate } from "@/lib/utils";

export default function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <article
      className={
        featured
          ? "group grid overflow-hidden rounded-2xl border border-line bg-card shadow-[0_10px_40px_rgba(28,25,21,0.04)] md:grid-cols-2"
          : "group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(28,25,21,0.08)]"
      }
    >
      <Link
        href={`/blog/${article.slug}`}
        className={featured ? "relative min-h-[260px]" : "relative aspect-[16/10] overflow-hidden"}
      >
        <Image
          src={article.cover}
          alt={article.coverAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
        />
      </Link>
      <div className={featured ? "flex flex-col justify-center p-8 sm:p-10" : "flex flex-1 flex-col p-5"}>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-copper">
          <span>{article.category}</span>
          <span className="h-px w-6 bg-line" />
          <span className="text-muted">{article.readTime}</span>
        </div>
        <h3
          className={
            featured
              ? "mt-3 font-serif text-3xl leading-tight tracking-tight"
              : "mt-3 font-serif text-xl leading-snug tracking-tight"
          }
        >
          <Link href={`/blog/${article.slug}`} className="transition-colors hover:text-forest">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
          {article.excerpt}
        </p>
        <p className="mt-auto pt-5 text-xs text-muted">
          {formatDate(article.date)} · {article.author.name}
        </p>
      </div>
    </article>
  );
}
