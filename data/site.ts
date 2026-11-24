export const site = {
  name: "importerh",
  fullName: "ImporterH",
  tagline: "Trade intelligence for modern importers",
  description:
    "Independent reviews of products, platforms, and sourcing routes for operators who buy overseas and sell worldwide.",
  email: "hello@importerh.com",
  partnersEmail: "partners@importerh.com",
  location: "Austin, Texas",
  hours: "Monday–Friday, 9:00–18:00 CT",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Journal" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const socialLinks = [
  {
    name: "X",
    href: "https://x.com/",
    label: "Follow ImporterH on X",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    label: "ImporterH on LinkedIn",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    label: "ImporterH on Instagram",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    label: "ImporterH on YouTube",
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/",
    label: "ImporterH on Pinterest",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    label: "ImporterH on Facebook",
  },
] as const;

export type SocialName = (typeof socialLinks)[number]["name"];
