import React from "react";
import { ProductCardProps } from "./ProductCard.types";
import { useCart } from "../../hooks/useCart";

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addProductToCart } = useCart()

  return (
    <div className="flex flex-col justify-between items-center w-64 h-80 p-4 shadow-md">
      <div className="w-32 h-32 flex justify-center items-center">
        <img src={product.image} alt={`${product.title} Card Image`} className="mb-8  h-full" />
      </div>
      <h2 className="max-w-48 font-semibold text-nowrap overflow-hidden text-ellipsis">{product.title}</h2>
      <p>$ {product.price.toFixed(2)}</p>
      <button className="bg-green-300 text-white p-1 rounded-md hover:bg-green-500" onClick={() => addProductToCart(product)}> Adicionar ao carrinho</button>
    </div>
  )
}