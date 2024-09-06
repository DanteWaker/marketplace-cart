import { ProductCard } from "../../components/ProductCard"
import { useProducts } from "../../hooks/useProducts"

export function Home() {
  const { products } = useProducts()

  return (
    <section className="flex flex-wrap gap-8 w-full">
      <div className="flex justify-center items-center w-full m-8">
        <h1 className="font-bold text-2xl">Products</h1>
      </div>
      {products?.map((product) => (
        <ProductCard product={product} />
      ))}
    </section>
  )
}