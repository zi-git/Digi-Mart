import React from "react";
import { useParams, Link } from "react-router-dom";
import productList from "../Data/products";
import categoriesData from "../Data/categoryList";
import defaultImg from "../assets/products.png";

const CategoryPage = () => {
  const { id } = useParams();
  const category = categoriesData.find((cat) => String(cat.id) === id);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        Category not found.
      </div>
    );
  }

  const filteredProducts = productList.filter(
    (product) =>
      product.category.toLocaleLowerCase() ===
      category.title.toLocaleLowerCase()
  );

  return (
    <div className="px-4 md:px-10 bg-gray-100 py-8 max-w-screen-xl mx-auto md:mx-auto">
      <h1 className="text-3xl font-bold mb-6 capitalize ">
        {category.title} Products
      </h1>

      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className=" bg-gray-00 p-5 flex justify-center w-[90vw] md:w-full flex-wrap gap-6 ">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-white w-[260px] p-4 rounded-xl shadow hover:shadow-lg transition block"
            >
              <img
                src={product.image.trim()!="" ? product.image : defaultImg}
                alt={product.name}
                className="w-full h-[200px] object-contain mb-3"
              />
              <h3 className="text-lg font-semibold truncate">{product.name}</h3>
              <p className="text-gray-700 font-semibold">₹{product.price}</p>
              <p className="text-sm text-gray-500 truncate">
                {product.subCategory}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
