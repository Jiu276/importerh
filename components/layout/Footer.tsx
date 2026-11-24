import Link from "next/link";
import { navLinks, site } from "@/data/site";
import { getArticles } from "@/data/articles";
import Logo from "@/components/layout/Logo";
import Container from "@/components/shared/Container";
import SocialWidget from "@/components/shared/SocialWidget";

export default function Footer() {
  const recent = getArticles().slice(0, 4);

  return (
    <footer className="mt-auto border-t border-line bg-forest text-paper">
      <Container className="grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {site.tagline}. Independent notes on products, platforms, and the
            routes that move goods.
          </p>
          <div className="mt-6">
            <SocialWidget variant="light" />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Latest notes
          </p>
          <ul className="mt-4 space-y-3">
            {recent.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-sm leading-snug text-white/80 transition-colors hover:text-white"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Desk
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </li>
            <li>{site.location}</li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <p>Independent editorial. Not affiliated with the platforms reviewed.</p>
        </Container>
      </div>
    </footer>
  );
}
