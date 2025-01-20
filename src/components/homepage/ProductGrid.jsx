import React from "react";
import ProductCard from "./CardWithDetails";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-5 gap-8">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
