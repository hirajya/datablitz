import React from "react";
import Image from "next/image";

{/* Product Card with Consistent Height */}
const ProductCard = ({ name, price, image }) => {
  return (
    <div className="h-60 w-40 bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      {/* Product Image */}
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="w-full h-32 object-contain"
      />
      {/* Product Info */}
      <div className="mt-2 flex-grow">
        <h3
          className="text-xs font-light text-gray-700 text-left overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2, // Limit to 2 lines
            WebkitBoxOrient: "vertical",
            whiteSpace: "normal",
          }}
        >
          {name}
        </h3>
      </div>
      {/* Price */}
      <p className="font-bold text-[#0D3B66] mt-2 text-left">₱{price}</p>
    </div>
  );
};


export default ProductCard;
