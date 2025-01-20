import React, { useState, useRef, useEffect } from "react";
import ProductCard from "./CardWithDetails"; // Adjust the path as necessary

const NewArrivals = () => {
  const [activeCategory, setActiveCategory] = useState("Peripherals");
  const carouselRef = useRef(null);

  const categories = ["Peripherals", "Games", "Collectibles"];
  const products = {
    Peripherals: [
      {
        name: "Gaming Mouse",
        price: 1999,
        image: "/homepage/plush_samplepic2.jpeg",
      },
      {
        name: "Mechanical Keyboard",
        price: 3499,
        image: "/homepage/plush_samplepic2.jpeg",
      },
      {
        name: "RGB Headset",
        price: 2799,
        image: "/homepage/plush_samplepic2.jpeg",
      },
      {
        name: "Gaming Chair",
        price: 5999,
        image: "/homepage/plush_samplepic2.jpeg",
      },
      {
        name: "Gaming Mouse1",
        price: 1999,
        image: "/homepage/plush_samplepic2.jpeg",
      },
      {
        name: "Mechanical Keyboard1",
        price: 3499,
        image: "/homepage/plush_samplepic2.jpeg",
      },
      {
        name: "RGB Headset1",
        price: 2799,
        image: "/homepage/plush_samplepic2.jpeg",
      },
      {
        name: "Gaming Chair1",
        price: 5999,
        image: "/homepage/plush_samplepic2.jpeg",
      },
    ],
    Games: [
      { name: "Game 1", price: 1599, image: "/homepage/plush_samplepic2.jpeg" },
      { name: "Game 2", price: 1999, image: "/homepage/plush_samplepic2.jpeg" },
      { name: "Game 3", price: 2499, image: "/homepage/plush_samplepic2.jpeg" },
    ],
    Collectibles: [
      {
        name: "Figure 1",
        price: 999,
        image: "/homepage/plush_samplepic2.jpeg",
      },
      {
        name: "Figure 2",
        price: 1299,
        image: "/homepage/plush_samplepic2.jpeg",
      },
      {
        name: "Figure 3",
        price: 1899,
        image: "/homepage/plush_samplepic2.jpeg",
      },
    ],
  };

  useEffect(() => {
    // Reset scroll position to the start of the carousel
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, [activeCategory]);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto p-4 mb-16">
      {/* Background Container */}
      <div className="absolute top-0 w-[60%] h-[200px] bg-[#FAF0CA] left-1/2 -translate-x-1/2 z-0 rounded-2xl"></div>

      <div className="relative z-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-black tracking-widest text-center pb-4 pt-2">
          NEW ARRIVALS
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`py-2 px-6 rounded-md font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-[#0D3B66] text-white shadow-lg"
                  : "bg-white text-[#0D3B66] border-2 border-[#0D3B66] hover:bg-[#0D3B66] hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Carousel */}
        <div className="relative mx-20">
          {/* Left Navigation Button */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white rounded-md p-3 hover:bg-blue-700 z-10"
            onClick={() => scrollCarousel("left")}
          >
            ◀
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll scrollbar-hide mx-24"
          >
            {products[activeCategory]?.map((product) => (
              <div key={product.name} className="flex-shrink-0 w-48 mb-10">
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white rounded-md p-3 hover:bg-blue-700 z-10"
            onClick={() => scrollCarousel("right")}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
