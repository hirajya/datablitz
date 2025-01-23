import React from "react";
import CollectiblesCard from "./collectiblesCardWithDetails";

const CollectiblesGrid = ({ products }) => {
  return (
    <div className="">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-gray-800">Collectibles</h2>
        <p className="text-sm text-gray-600">
          Browse our selection of high-quality gaming products.
        </p>
      </div>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(products) && products.length > 0 ? (
            products.map((product, index) => (
            <CollectiblesCard
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

export default CollectiblesGrid;