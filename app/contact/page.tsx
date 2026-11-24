import { Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/data/site";
import { unsplash } from "@/lib/utils";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import ContactForm from "@/components/contact/ContactForm";
import SocialWidget from "@/components/shared/SocialWidget";

export const metadata = {
  title: "Contact",
  description:
    "Write the ImporterH desk about editorial, samples, partnerships, or sourcing briefs.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Write the desk."
        description="Editorial, product samples, partnerships, and sourcing briefs. We read everything. We reply when we can be useful."
        image={unsplash("photo-1423666639041-f56000c27a9a", 2000)}
        imageAlt="Person writing at a sunlit desk"
      />
      <Container className="grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="space-y-6">
          <div className="rounded-2xl border border-line bg-card p-6">
            <p className="flex items-center gap-3 text-sm">
              <Mail size={16} className="text-copper" />
              <a href={`mailto:${site.email}`} className="hover:text-forest">
                {site.email}
              </a>
            </p>
            <p className="mt-4 flex items-center gap-3 text-sm">
              <Mail size={16} className="text-copper" />
              <a
                href={`mailto:${site.partnersEmail}`}
                className="hover:text-forest"
              >
                {site.partnersEmail}
              </a>
            </p>
            <p className="mt-4 flex items-center gap-3 text-sm text-muted">
              <MapPin size={16} className="text-copper" />
              {site.location}
            </p>
            <p className="mt-4 flex items-center gap-3 text-sm text-muted">
              <Clock size={16} className="text-copper" />
              {site.hours}
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-card p-6">
            <SocialWidget />
          </div>
        </aside>
        <ContactForm />
      </Container>
    </>
  );
}
