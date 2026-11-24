import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Pagination({
  page,
  totalPages,
  onPage,
}: {
  page: number;
  totalPages: number;
  onPage: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-ink transition-colors hover:border-forest disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>
      {pages.map((number) => (
        <button
          key={number}
          type="button"
          onClick={() => onPage(number)}
          aria-current={number === page ? "page" : undefined}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-all duration-300",
            number === page
              ? "border-forest bg-forest text-paper"
              : "border-line bg-card text-ink hover:border-forest",
          )}
        >
          {number}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-ink transition-colors hover:border-forest disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
