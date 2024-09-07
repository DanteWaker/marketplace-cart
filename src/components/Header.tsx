import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "../hooks/useCart"
import { Link } from "@tanstack/react-router";

export function Header() {
  const { quantityOfItemsOnCart } = useCart()

  return (
    <div className="flex justify-between items-center w-full p-8">
      <h1 className="font-bold text-2xl">
        <Link to="/">
          Products
        </Link>
      </h1>
      <div className="relative flex">
        <Link to="/cart">

          <CiShoppingCart className="w-[3rem] h-[3rem]" />

          {
            quantityOfItemsOnCart() && <div className="absolute h-6 w-6 top-1 right-1 rounded-full bg-orange-500 text-white flex justify-center items-center">
              {quantityOfItemsOnCart()}
            </div>
          }
        </Link>
      </div>
    </div>
  )
}