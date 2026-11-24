"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/shared/Container";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  return (
    <section className="pb-20 sm:pb-24">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-forest px-6 py-12 text-paper sm:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                Field notes
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                One briefing a month. No inventory dumps.
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">
                Product tests, platform fee changes, and sourcing flags — written
                for operators, not for a growth team.
              </p>
            </div>
            {done ? (
              <p className="rounded-2xl bg-white/10 px-5 py-6 text-sm text-white">
                You are on the list. We will write when there is something worth
                opening.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white placeholder:text-white/50"
                />
                <button
                  type="submit"
                  className="h-12 rounded-full bg-copper px-6 text-sm font-medium text-white transition-colors hover:bg-copper-2"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
