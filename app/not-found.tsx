import Link from "next/link";
import Container from "@/components/shared/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl">This page did not clear customs.</h1>
      <p className="mt-3 max-w-md text-muted">
        The note you wanted is not on this route. Head home or open the journal.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="rounded-full bg-forest px-5 py-2.5 text-sm text-paper hover:bg-forest-2"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="rounded-full border border-line px-5 py-2.5 text-sm hover:border-forest"
        >
          Journal
        </Link>
      </div>
    </Container>
  );
}
