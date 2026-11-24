import Link from "next/link";
import { getArticles } from "@/data/articles";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import ArticleCard from "@/components/blog/ArticleCard";
import FadeIn from "@/components/shared/FadeIn";

export default function FeaturedArticles() {
  const articles = getArticles();
  const [lead, ...rest] = articles;

  return (
    <section id="featured" className="pb-20 sm:pb-24">
      <Container>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Journal"
            title="Latest from the desk"
            description="Newest notes first. Product tests, platform math, and factory field notes."
          />
          <Link
            href="/blog"
            className="text-sm font-medium text-forest transition-colors hover:text-copper"
          >
            All articles →
          </Link>
        </div>
        {lead ? (
          <FadeIn>
            <ArticleCard article={lead} featured />
          </FadeIn>
        ) : null}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {rest.slice(0, 3).map((article, index) => (
            <FadeIn key={article.slug} delay={index * 90}>
              <ArticleCard article={article} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
