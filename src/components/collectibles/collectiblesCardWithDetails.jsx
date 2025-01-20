import React from "react";
import Image from "next/image";
import Link from "next/link";

const CollectiblesCard = ({ name, price, image, slug }) => {
  return (
    <Link legacyBehavior href={`/collectibles/${slug}`}>
      <a className="relative bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 ease-in-out group">
        {/* Product Image */}
        <div className="flex justify-center items-center aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
          <Image
            src={image}
            alt={name}
            width={160}
            height={160}
            className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        {/* Product Info */}
        <div className="mt-2 flex-grow">
          <h3
            className="text-sm font-medium text-gray-800 text-left overflow-hidden"
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
        <p className="font-bold text-[#0D3B66] mt-2 text-left text-lg">₱{price}</p>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D3B66] opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl flex items-center justify-center">
          <p className="absolute bottom-4 left-4 text-white font-semibold text-m">View Details</p>
        </div>
      </a>
    </Link>
  );
};

export default CollectiblesCard;
