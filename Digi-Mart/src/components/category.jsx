import React from "react";
import { useParams } from "react-router-dom";
import productList from "../Data/products";
import categoriesData from "../Data/category";

const CategoryPage = () => {
  const { id } = useParams();
  const category = categoriesData.find(cat => String(cat.id) === id);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        Category not found.
      </div>
    );
  }

  const filteredProducts = productList.filter(
    (product) => product.category === category.title
  );

  return (
    <div className="px-4 md:px-10 py-8 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {category.title} Products
      </h1>
      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[200px] object-contain mb-3"
              />
              <h3 className="text-lg font-semibold truncate">
                {product.name}
              </h3>
              <p className="text-gray-700 font-semibold">
                ₹{product.price}
              </p>
              <p className="text-sm text-gray-500 truncate">
                {product.subCategory}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
