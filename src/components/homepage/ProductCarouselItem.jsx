import React from "react";

{/* Product Carousel with Featured */}
const ProductCarouselItem = ({ image, name, price, rating, sold, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl px-6 md:px-20">
      {/* Product Image */}
      <div className="flex-shrink-0 w-full md:w-1/2 h-[300px] md:h-[400px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col space-y-2 w-full md:w-1/2 px-6">
        <h2 className="text-xl md:text-xl font-bold">{name}</h2>
        <div className="flex items-center space-x-2">
          <p className="text-2xl font-semibold text-gray-900">₱ {price}</p>
          <p className="text-xs text-gray-600">
            ⭐ {rating} | {sold} sold
          </p>
        </div>
        <ul className="list-disc list-inside text-gray-700 text-xs">
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCarouselItem;
