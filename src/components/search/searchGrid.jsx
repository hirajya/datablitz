import React from "react";
import SearchCard from "./searchCardWithDetails";

const SearchGrid = ({ products }) => {
  return (
    <div className="">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(products) && products.length > 0 ? (
            products.map((product, index) => (
            <SearchCard
                key={index}
                name={product.name}
                price={product.price}
                image={product.image}
                slug={product.slug}
                stock={product.stock}
                description={product.description}
            />
            ))
        ) : (
            <p>No products available</p>
        )}
        </div>

    </div>
  );
};

export default SearchGrid;
