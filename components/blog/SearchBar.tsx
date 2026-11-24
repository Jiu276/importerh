import { Search } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">Search articles</span>
      <Search
        size={16}
        className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted"
      />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search titles, topics, products…"
        className="h-12 w-full rounded-full border border-line bg-card pr-4 pl-11 text-sm outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(20,63,56,0.08)]"
      />
    </label>
  );
}
