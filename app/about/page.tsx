import Image from "next/image";
import { unsplash } from "@/lib/utils";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import SocialWidget from "@/components/shared/SocialWidget";

export const metadata = {
  title: "About",
  description:
    "ImporterH is an independent editorial desk covering products, platforms, and sourcing for modern importers.",
};

const team = [
  {
    name: "Maya Chen",
    role: "Sourcing Editor",
    image: unsplash("photo-1573496359142-b8d87734a5a2", 800),
  },
  {
    name: "Owen Hart",
    role: "Platform Analyst",
    image: unsplash("photo-1472099645785-5658abf4ff4e", 800),
  },
  {
    name: "Lina Ortiz",
    role: "Product Reviewer",
    image: unsplash("photo-1544005313-94ddf0286df2", 800),
  },
  {
    name: "James Okonkwo",
    role: "Logistics Lead",
    image: unsplash("photo-1506794778202-cad84cf45f1d", 800),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A desk that still opens the carton."
        description="ImporterH is a small editorial team writing for operators who buy overseas and sell at home. We test products, compare platforms, and keep a paper trail on freight."
        image={unsplash("photo-1497366216548-37526070297c", 2000)}
        imageAlt="Bright editorial office interior"
      />
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl">Why this site exists</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Most “import blogs” recycle supplier ads. We started ImporterH
              because the people actually placing purchase orders needed a
              quieter room: honest capacity, real landed costs, and platform
              fees written in full.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              We do not take inventory from factories in exchange for a
              ranking. When a product is on the desk, we bought it or received
              a sample we disclose. When a platform is compared, we run the
              numbers on live accounts.
            </p>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl">
            <Image
              src={unsplash("photo-1522071820081-009f0129c71c")}
              alt="Team collaborating at a long table"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>

        <h2 className="mt-20 font-serif text-3xl">The desk</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <figure
              key={person.name}
              className="overflow-hidden rounded-2xl border border-line bg-card"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <figcaption className="p-4">
                <p className="font-medium">{person.name}</p>
                <p className="mt-1 text-sm text-muted">{person.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-line bg-card p-8">
          <h2 className="font-serif text-2xl">How to reach us</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Editorial questions, sample offers, and partnership notes all go
            through the contact page. Social channels are for published work
            and industry conversation — they are live links, not placeholders.
          </p>
          <div className="mt-6">
            <SocialWidget />
          </div>
        </div>
      </Container>
    </>
  );
}
