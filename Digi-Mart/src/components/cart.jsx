import { useRef } from "react";
import { useCart } from "../Context/cartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, totalPrice, removeFromCart, clearCart, updateQuantity } =
    useCart();
  const newInterval = useRef(null);

  return (
    <div className="min-h-screen px-6 py-10 max-w-screen-lg mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 border rounded-xl shadow-md"
            >
              <div className="flex items-center gap-6 w-full sm:w-auto">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-[10vh] object-contain rounded-md border"
                  />
                </Link>
                <div className="space-y-2">
                  <Link to={`/product/${item.id}`}>
                    <p className="font-semibold text-lg ">{item.name}</p>
                  </Link>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        if (item.quantity !== 1) {
                          updateQuantity(item.id, -1);
                        }
                      }}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold flex items-center justify-center"
                    >
                      −
                    </button>

                    <p className="text-base text-gray-700 font-medium">
                      Qty: {item.quantity}
                    </p>

                    <button
                      onMouseDown={() => {
                        newInterval.current = setInterval(() => {
                          updateQuantity(item.id, 1);
                        }, 150);
                      }}
                      onMouseUp={() => clearInterval(newInterval.current)}
                      onMouseLeave={() => clearInterval(newInterval.current)} // optional for safety
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <p className="text-xl font-semibold text-gray-800">
                  ₹{item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-base font-medium transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-10">
            <h3 className="text-2xl font-bold">
              Total: ₹<span className="text-green-600">{totalPrice}</span>
            </h3>
            <button
              onClick={() => clearCart()}
              className="mt-6 bg-red-500 text-black text-lg px-4 py-3 mx-2.5 rounded hover:bg-red-700 transition"
            >
              Clear cart
            </button>
            <button className="mt-6 bg-black text-white text-lg px-8 py-3 rounded hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
