import { useCart } from "../Context/cartContext";

const CartPage = () => {
  const { cartItems, totalPrice, removeFromCart } = useCart();

  return (
    <div className="px-6 py-10 max-w-screen-lg mx-auto">
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
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-contain rounded-md border"
            />
            <div>
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-base text-gray-500">Qty: {item.quantity}</p>
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