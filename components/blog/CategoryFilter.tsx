import { categories, type Category } from "@/data/articles";
import { cn } from "@/lib/utils";

type Filter = "All" | Category;

export default function CategoryFilter({
  value,
  onChange,
}: {
  value: Filter;
  onChange: (value: Filter) => void;
}) {
  const options: Filter[] = ["All", ...categories];

  return (
    <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={cn(
            "shrink-0 rounded-full border px-4 py-2 text-sm transition-all duration-300",
            value === option
              ? "border-forest bg-forest text-paper"
              : "border-line bg-card text-muted hover:border-forest hover:text-ink",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
