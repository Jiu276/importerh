import type { Article } from "@/data/articles";
import ArticleCard from "@/components/blog/ArticleCard";
import SectionHeading from "@/components/shared/SectionHeading";

export default function RelatedArticles({ articles }: { articles: Article[] }) {
  if (!articles.length) return null;

  return (
    <section className="mt-16">
      <SectionHeading eyebrow="Keep reading" title="Related notes" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
