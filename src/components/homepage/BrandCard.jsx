// src/components/homepage/BrandCard.jsx
import React from "react";

{/* Rectangle Laying down card for brands */}
const BrandCard = ({ imagePath, altText }) => {
  return (
    <div
      className="relative w-full h-[300px] md:h-[150px] bg-cover bg-center shadow-xl rounded-xl"
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      
    </div>
  );
};

export default BrandCard;
