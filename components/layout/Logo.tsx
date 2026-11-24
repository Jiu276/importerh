import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  inverted?: boolean;
  className?: string;
};

export default function Logo({ inverted = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="importerh home"
      className={cn(
        "group inline-flex items-center gap-2.5 transition-opacity hover:opacity-80",
        className,
      )}
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-md border transition-transform duration-300 group-hover:-translate-y-0.5",
          inverted
            ? "border-white/30 bg-white/10 text-white"
            : "border-forest/20 bg-forest text-paper",
        )}
      >
        <svg
          viewBox="0 0 32 32"
          className="h-5 w-5"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 6v20M25 6v20M7 16h10.5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M20 12.5 25 16l-5 3.5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className={cn(
          "font-serif text-[1.35rem] leading-none tracking-tight lowercase",
          inverted ? "text-white" : "text-ink",
        )}
      >
        importerh
      </span>
    </Link>
  );
}
