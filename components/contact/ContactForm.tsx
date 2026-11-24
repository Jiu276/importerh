"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-card px-6 py-10">
        <p className="font-serif text-2xl">Message received.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          The desk reads every note. If you asked about a partnership or a
          sourcing brief, expect a reply within two business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block font-medium">Name</span>
          <input
            required
            name="name"
            className="h-12 w-full rounded-xl border border-line bg-paper px-4"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block font-medium">Email</span>
          <input
            required
            type="email"
            name="email"
            className="h-12 w-full rounded-xl border border-line bg-paper px-4"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="mt-5 block text-sm">
        <span className="mb-2 block font-medium">Topic</span>
        <select
          name="topic"
          className="h-12 w-full rounded-xl border border-line bg-paper px-4"
          defaultValue="Editorial"
        >
          <option>Editorial</option>
          <option>Product sample</option>
          <option>Partnership</option>
          <option>Sourcing brief</option>
        </select>
      </label>
      <label className="mt-5 block text-sm">
        <span className="mb-2 block font-medium">Message</span>
        <textarea
          required
          name="message"
          rows={6}
          className="w-full resize-y rounded-xl border border-line bg-paper px-4 py-3"
          placeholder="What should we look at?"
        />
      </label>
      <button
        type="submit"
        className="mt-6 rounded-full bg-forest px-6 py-3 text-sm font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-2"
      >
        Send message
      </button>
    </form>
  );
}
