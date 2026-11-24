import Link from "next/link";
import { getProducts } from "@/data/products";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import ProductCard from "@/components/products/ProductCard";
import FadeIn from "@/components/shared/FadeIn";

export default function FeaturedProducts() {
  const products = getProducts().slice(0, 3);

  return (
    <section className="bg-paper-deep/60 py-20 sm:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Product desk"
            title="What we would stock"
            description="Independent notes on audio, power, kitchen, and smart home — with images, specs, and the catch."
          />
          <Link
            href="/products"
            className="text-sm font-medium text-forest transition-colors hover:text-copper"
          >
            All products →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <FadeIn key={product.slug} delay={index * 90}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
