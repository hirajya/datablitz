import React from "react";
import GamesCard from "./gamesCardWithDetails";

const GamesGrid = ({ products }) => {
  return (
    <div className="">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-gray-800">Games</h2>
        <p className="text-sm text-gray-600">
          Browse our selection of high-quality gaming products.
        </p>
      </div>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <GamesCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            slug={product.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default GamesGrid;
