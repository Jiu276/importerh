import { Suspense } from "react";
import { getArticles } from "@/data/articles";
import { unsplash } from "@/lib/utils";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import BlogExplorer from "@/components/blog/BlogExplorer";

export const metadata = {
  title: "Journal",
  description:
    "Product reviews, platform guides, and sourcing notes — sorted newest first.",
};

export default function BlogPage() {
  const articles = getArticles();

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Notes on products, platforms, and the route between them."
        description="Search, filter by desk, and page through the archive. Every article is dated and stacked from newest to oldest."
        image={unsplash("photo-1486312338219-ce68d2c6f44d", 2000)}
        imageAlt="Laptop on a wooden desk in a bright workspace"
      />
      <Container className="py-14 sm:py-16">
        <Suspense
          fallback={
            <p className="py-12 text-center text-muted">Loading the archive…</p>
          }
        >
          <BlogExplorer articles={articles} />
        </Suspense>
      </Container>
    </>
  );
}
