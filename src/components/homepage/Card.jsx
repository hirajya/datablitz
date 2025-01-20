import React from "react";
import Image from "next/image";

{/* Card All Space Picture only */}
const Card = ({ image }) => {
  return (
    <div className="relative h-56 w-40">
      <Image
        src={image}
        alt="Game Image"
        fill // Replaces layout="fill"
        style={{ objectFit: "cover" }} // Ensures the image covers the container without distortion
        className="rounded-lg shadow-md" // Added shadow to the image
      />
    </div>
  );
};

export default Card;
