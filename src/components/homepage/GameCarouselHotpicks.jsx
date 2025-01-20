import React, { useState, useRef, useEffect } from "react";

const GameCarouselHotpicks = ({ games }) => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [draggingThresholdMet, setDraggingThresholdMet] = useState(false); // Threshold flag

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current && !isDragging) {
        const itemWidth = carouselRef.current.children[0].offsetWidth + 16;
        const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

        if (carouselRef.current.scrollLeft + itemWidth < maxScrollLeft) {
          carouselRef.current.scrollLeft += itemWidth;
        } else {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDraggingThresholdMet(false);
    setStartX(e.clientX);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const distance = e.clientX - startX;
    if (Math.abs(distance) > 10) { // Dragging threshold
      setDraggingThresholdMet(true);
      carouselRef.current.scrollLeft = scrollLeft - distance;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    carouselRef.current.style.cursor = "grab";
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    carouselRef.current.style.cursor = "grab";
  };

  const goToNext = () => {
    const itemWidth = carouselRef.current.children[0].offsetWidth + 16;
    const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

    if (carouselRef.current.scrollLeft + itemWidth < maxScrollLeft) {
      carouselRef.current.scrollLeft += itemWidth;
    } else {
      carouselRef.current.scrollLeft = 0;
    }
  };

  const goToPrev = () => {
    const itemWidth = carouselRef.current.children[0].offsetWidth + 16;
    const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

    if (carouselRef.current.scrollLeft - itemWidth >= 0) {
      carouselRef.current.scrollLeft -= itemWidth;
    } else {
      carouselRef.current.scrollLeft = maxScrollLeft;
    }
  };

  return (
    <div className="relative flex justify-center py-3">
      <div className="relative flex items-center overflow-hidden w-full max-w-6xl">
        <div
          ref={carouselRef}
          className="flex space-x-4 py-6 transition-all duration-500 ease-in-out overflow-x-scroll cursor-grab"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {games.map((game, index) => (
            <div key={index} className="relative w-[200px] flex-shrink-0">
              <div className="w-full h-[320px]">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white cursor-pointer hover:bg-opacity-75"
        >
          ◀
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white cursor-pointer hover:bg-opacity-75"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default GameCarouselHotpicks;
