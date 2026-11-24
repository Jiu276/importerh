"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Article, Category } from "@/data/articles";
import { categories } from "@/data/articles";
import SearchBar from "@/components/blog/SearchBar";
import CategoryFilter from "@/components/blog/CategoryFilter";
import Pagination from "@/components/blog/Pagination";
import ArticleCard from "@/components/blog/ArticleCard";

const PAGE_SIZE = 4;

type Filter = "All" | Category;

function isCategory(value: string | null): value is Category {
  return !!value && (categories as readonly string[]).includes(value);
}

export default function BlogExplorer({ articles }: { articles: Article[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initialCategory = searchParams.get("category");

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Filter>(
    isCategory(initialCategory) ? initialCategory : "All",
  );
  const [page, setPage] = useState(1);

  function updateCategory(next: Filter) {
    setCategory(next);
    setPage(1);
    const params = new URLSearchParams(searchParams.toString());
    if (next === "All") params.delete("category");
    else params.set("category", next);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const matchesQuery =
        !needle ||
        article.title.toLowerCase().includes(needle) ||
        article.excerpt.toLowerCase().includes(needle) ||
        article.category.toLowerCase().includes(needle) ||
        article.author.name.toLowerCase().includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [articles, category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const slice = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <SearchBar
          value={query}
          onChange={(value) => {
            setQuery(value);
            setPage(1);
          }}
        />
        <p className="text-sm text-muted lg:text-right">
          {filtered.length} {filtered.length === 1 ? "article" : "articles"} · newest first
        </p>
      </div>
      <div className="mt-5">
        <CategoryFilter value={category} onChange={updateCategory} />
      </div>
      {slice.length ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {slice.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="mt-12 rounded-2xl border border-dashed border-line bg-card px-6 py-16 text-center text-muted">
          No articles match that search. Try another keyword or category.
        </p>
      )}
      <Pagination
        page={currentPage}
        totalPages={totalPages}
        onPage={(next) => {
          setPage(next);
          window.scrollTo({ top: 280, behavior: "smooth" });
        }}
      />
    </div>
  );
}
