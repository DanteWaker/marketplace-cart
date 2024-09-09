import { ProductCard } from "../../components/ProductCard"
import { useProducts } from "../../hooks/useProducts"

export function Home() {
  const { products } = useProducts()

  return (
    <section className="flex flex-wrap gap-8 w-full">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}