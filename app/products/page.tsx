import { unsplash } from "@/lib/utils";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import ProductGrid from "@/components/products/ProductGrid";

export const metadata = {
  title: "Products",
  description:
    "Independent product notes with photos, specs, and the reasons we would — or would not — import them.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product desk"
        title="What we would actually put on a purchase order."
        description="Each card is a real category we tested: audio, energy, smart home, kitchen, and carry. Photos match the use case. Specs match the carton."
        image={unsplash("photo-1556909114-f6e7ad7d3136", 2000)}
        imageAlt="Kitchen appliances on a marble counter"
      />
      <Container className="py-14 sm:py-16">
        <ProductGrid />
      </Container>
    </>
  );
}
