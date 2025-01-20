import React from "react";

const CategoryCatalogExpi = ({ games }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {games.map((game, index) => (
        <div
          key={index}
          className="relative group bg-black rounded-xl overflow-hidden shadow-lg"
        >
          {/* Game Image */}
          <div className="relative w-full h-[300px]">
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Game Details */}
          <div
            className="absolute inset-0 bg-black/80 flex flex-col justify-center items-start p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{game.name}</h2>
            <p className="text-lg text-gray-400 mb-4">{game.genre}</p>
            <div className="flex items-center space-x-4 mb-4">
              <p className="text-xl font-semibold">₱ {game.price}</p>
              <p className="text-sm">
                ⭐ {game.rating} | {game.sold} sold
              </p>
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
              {game.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCatalogExpi;
