import React, { useState, useRef, useEffect } from "react";

const GameCarousel = ({ games }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    if (carouselRef.current) {
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      if (scrollPosition >= maxScrollLeft) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        setScrollPosition(0);
      } else {
        const newScrollPosition = Math.min(scrollPosition + carouselRef.current.clientWidth, maxScrollLeft);
        carouselRef.current.scrollTo({ left: newScrollPosition, behavior: "smooth" });
        setScrollPosition(newScrollPosition);
      }
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      if (scrollPosition <= 0) {
        const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        carouselRef.current.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
        setScrollPosition(maxScrollLeft);
      } else {
        const newScrollPosition = Math.max(scrollPosition - carouselRef.current.clientWidth, 0);
        carouselRef.current.scrollTo({ left: newScrollPosition, behavior: "smooth" });
        setScrollPosition(newScrollPosition);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [scrollPosition]);

  return (
    <div className="relative flex justify-center py-6">
      <div className="relative flex items-center overflow-hidden w-[850px] h-[450px] max-w-6xl mx-auto">
        <div
          ref={carouselRef}
          className="flex space-x-0 transition-all duration-300 overflow-x-hidden"
        >
          {games.map((game, index) => (
            <div key={index} className="relative group w-full flex-shrink-0">
              {/* Smaller Game Cover */}
              <div className="w-[850px] h-[450px] mx-auto"> {/* Adjusted size */}
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Game Information */}
              <div className="absolute inset-0 bg-black bg-opacity-60 w-0 group-hover:w-1/4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-start px-6 rounded-l-2xl">
                <div className="text-white space-y-4 text-left pl-4">
                  <h2 className="text-xl font-bold">{game.name}</h2>
                  <p className="text-md font-semibold">{game.genre}</p>
                  <p className="text-sm">Release: 2024</p>
                  <p className="text-sm mt-2">{game.description.join(", ")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          onClick={prevSlide}
          className="absolute bottom-4 right-20 bg-blue-900 text-white rounded-md p-3 shadow-md hover:bg-blue-700"
        >
          <span className="text-xl">{"<"}</span>
        </div>

        <div
          onClick={nextSlide}
          className="absolute bottom-4 right-4 bg-blue-900 text-white rounded-md p-3 shadow-md hover:bg-blue-700"
        >
          <span className="text-xl">{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default GameCarousel;
