import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productList from "../Data/products";
import { useCart } from "../Context/cartContext";

const ProductPage = () => {
  const { id } = useParams();
  const product = productList.find((item) => item.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    setSelectedImage(product?.image);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl font-bold">
        Product not found.
      </div>
    );
  }

  const suggestedProducts = productList
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category ||
          p["sub-category"] === product["sub-category"])
    )
    .slice(0, 4);

  return (
    <div className="bg-white text-gray-800 px-4 md:px-20 py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Image section */}
        <div>
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full h-[500px] object-contain rounded-xl border"
          />
          <div className="flex gap-4 mt-4 justify-center">
            {[product.image, product.image2, product.image3].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-contain border rounded cursor-pointer transition hover:scale-105 ${
                  selectedImage === img ? "ring-2 ring-blue-500" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold text-black mb-4">
            ₹{product.price}
            <span className="line-through text-gray-400 text-lg ml-3">
              ₹{(product.price * 1.3).toFixed(0)}
            </span>
          </p>
          <p className="text-gray-600 mb-6">
            {product.description || "A great quality product you'll love."}
          </p>

          <div className="flex gap-4 items-center mb-6">
            <select className="border px-3 py-2 rounded">
              <option>Select Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <input
              type="number"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              min={1}
              className="w-16 text-center border px-2 py-2 rounded"
            />
            <button
              onClick={() => {
                addToCart(product, quantity);
              }}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>

          <div className="text-sm text-gray-500">
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Sub-category:</strong> {product.subCategory}
            </p>
            <p>
              <strong>Tags:</strong> ecommerce, deals
            </p>
          </div>
        </div>
      </div>

      {/* Description / Tabs */}
      <div className="max-w-screen-xl mx-auto mt-16 border-t pt-8">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">
          {`When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees...`}
        </p>
      </div>

      {/* Suggested Products */}
      <div className="max-w-screen-xl mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {suggestedProducts.map((prod) => (
            <Link
              key={prod.id}
              to={`/product/${prod.id}`}
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-[200px] object-contain mb-4"
              />
              <h3 className="text-lg font-medium truncate">{prod.name}</h3>
              <p className="text-gray-800 font-semibold">
                ₹{prod.price}
                <span className="text-gray-400 text-sm line-through ml-2">
                  ₹{(prod.price * 1.3).toFixed(0)}
                </span>
              </p>
              <p className="text-xs mt-1 text-gray-400">
                Tags: deals, {prod.category}, {prod["sub-category"]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
