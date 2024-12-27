import React from "react";

export default function AssuranceElement({ src, title, description }) {
  return (
    <div className="flex items-center space-x-4">
      {/* Picture Logo */}
      <div className="flex-shrink-0">
        <img
          src={src}
          alt={title}
          className="h-10 w-10"
        />
      </div>

      {/* Title and Description */}
      <div className="flex flex-col">
<<<<<<< HEAD
        <h1 className="text-xs font-bold">{title}</h1>
=======
        <h1 className="text-sm font-bold">{title}</h1>
>>>>>>> origin
        <p className="text-xs text-gray-600" style={{ maxWidth: "250px", wordWrap: "break-word" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
