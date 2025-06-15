import React, { useContext } from "react";
import { useWishlist } from "../Context/wishListContext";
import { Link } from "react-router-dom";
import { FaHeartCircleMinus } from "react-icons/fa6";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow p-4 relative"
            >
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold truncate">{item.name}</h3>
                <p className="text-gray-700 font-medium">₹{item.price}</p>
              </Link>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-2 right-2 text-red-500 hover:scale-110 transition"
              >
                <FaHeartCircleMinus className="w-6 h-6" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
