import { FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../../hooks/useCart"
import { MdDelete } from "react-icons/md";
export function Cart() {
  const { productsCart, removeProductFromCart } = useCart()
  return (
    <section className="w-full h-[100vh] flex flex-col justify-start items-center gap-4">
      {productsCart().map(product => (
        <div key={product.id} className="flex h-56 w-[40rem] shadow-lg border-2 p-6">
          <div className="h-full w-[10rem]">
            <img src={product.image} alt="Product Image" className="h-full w-full" />
          </div>
          <div className="p-4 pl-8 w-[30rem] flex flex-col justify-between">
            <div className="flex justify-between items-center w-full">
              <h2 className="font-bold">{product.title}</h2>
              <button onClick={() => removeProductFromCart(product)}>
                <MdDelete className="w-6 h-6 text-red-400" />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <h3 className="text-3xl">
                $ {product.price.toFixed(2)}
              </h3>
              <div className="flex justify-center items-center gap-4">
                <button>
                  <FaMinus className="w-3 h-3" />
                </button>
                <span>{product.quantity}</span>
                <button>
                  <FaPlus className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>
        </div>
      ))}

    </section>
  )
}