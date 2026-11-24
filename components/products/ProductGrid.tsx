import { getProducts } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export default function ProductGrid() {
  const products = getProducts();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
