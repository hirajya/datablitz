"use client";
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import AssuranceElement from "@/components/homepage/AssuranceElement";
import Image from "next/image";
import { images } from "@/utils/homepage/constantsHomepage";
import CardWithDetails from "@/components/homepage/CardWithDetails";
import ProductCarouselItem from "@/components/homepage/ProductCarouselItem";
import { productsPeri } from "@/utils/homepage/constantsFeaturedPeripherals";
import { imagePaths } from "@/utils/homepage/constantsBrand";
import BrandCard from "@/components/homepage/BrandCard";
import { products } from "@/utils/homepage/constantsProductGrid";
import ProductGrid from "@/components/homepage/ProductGrid";
import CategoryCatalogExpi from "@/components/homepage/CategoryCatalogExpi";
import { FGames } from "@/utils/homepage/constantsGameCarousel";
import GameCarousel from "@/components/homepage/GameCarousel";
import GameCarouselHotpicks from "@/components/homepage/GameCarouselHotpicks";
import CategoryCatalog from "@/components/homepage/CategoryCatalog";
import NewArrivals from "@/components/homepage/NewArrivals";

const Page = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);
  const videoTimeoutRef = useRef(null);

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
    videoTimeoutRef.current = setTimeout(() => {
      setPlayVideo(true);
    }, 3000);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setPlayVideo(false);
    clearTimeout(videoTimeoutRef.current);
  };

  useEffect(() => {
    return () => clearTimeout(videoTimeoutRef.current);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
=======
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { images } from "@/utils/homepage/constantsHomepage"; // Adjust your import as needed
import AssuranceElement from "@/components/homepage/AssuranceElement";

const Page = () => {
  const handleDragStart = (e) => e.preventDefault();

  return (
    <div className="relative h-[100vh]">
>>>>>>> origin
      {/* Highlight Carousel */}
      <AliceCarousel
        autoPlay
        autoPlayInterval={3000}
        infinite
        renderPrevButton={({ isDisabled }) => (
          <button
<<<<<<< HEAD
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-blue-900 text-white rounded-md p-3 shadow-md hover:bg-blue-700 ${
              isDisabled ? "opacity-50" : ""
            }`}
=======
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 ${
              isDisabled ? "opacity-50" : ""
            }`}
            style={{
              background: "#0D3B66",
              color: "#fff",
              border: "none",
              borderRadius: "20%",
              padding: "10px",
            }}
>>>>>>> origin
          >
            ◀
          </button>
        )}
        renderNextButton={({ isDisabled }) => (
          <button
<<<<<<< HEAD
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-blue-900 text-white rounded-md p-3 shadow-md hover:bg-blue-700 ${
              isDisabled ? "opacity-50" : ""
            }`}
=======
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 ${
              isDisabled ? "opacity-50" : ""
            }`}
            style={{
              background: "#0D3B66",
              color: "#fff",
              border: "none",
              borderRadius: "20%",
              padding: "10px",
            }}
>>>>>>> origin
          >
            ▶
          </button>
        )}
      >
        {images.map((image) => (
<<<<<<< HEAD
          <div
            key={image.id}
            className="h-full relative"
            onMouseEnter={() => handleMouseEnter(image.id)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Image */}
            {!(hoveredItem === image.id && playVideo) && (
              <div className="h-[70vh] w-full relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}

            {/* Video */}
            {hoveredItem === image.id && playVideo && (
              <video
                className="absolute inset-0 h-[70vh] w-full object-cover"
                src="/homepage/HighlightCarouselVideo3.webm"
                autoPlay
                loop
                muted
                preload="auto"
              />
            )}
          </div>
        ))}
      </AliceCarousel>

=======
          <div key={image.id} className="h-full">
            <div
              className="h-[70vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${image.src})` }}
            ></div>
          </div>
        ))}
      </AliceCarousel>
>>>>>>> origin
      <style jsx global>{`
        .alice-carousel__dots {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
        }

        .alice-carousel__dots-item {
          background: rgba(0, 0, 0, 0.5);
          border: none;
        }

        .alice-carousel__dots-item.__active {
          background: #fff;
        }
      `}</style>

<<<<<<< HEAD
      {/* Assurance Section */}
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-3 pb-10">
          <div className="relative pr-6 md:pr-8">
            <AssuranceElement
              src="/homepage/AssuranceLogo1.png"
              title="Your Most Trusted Store"
              description="100% All Brand New & Original Shop with Confidence."
            />
            <div className="absolute inset-y-0 right-0 w-px bg-gray-400 hidden md:block"></div>
          </div>
          <div className="relative pr-6 md:pr-8">
            <AssuranceElement
              src="/homepage/AssuranceLogo2.png"
              title="Fast Shipping Nationwide"
              description="Ships in 24 hours! Express and Same-Day Delivery within Metro Manila!"
            />
            <div className="absolute inset-y-0 right-0 w-px bg-gray-400 hidden md:block"></div>
          </div>
          <div className="relative pr-6 md:pr-8">
            <AssuranceElement
              src="/homepage/AssuranceLogo3.png"
              title="Save on Loyalty Rewards"
              description="Sign in to start earning Loyalty Rewards Points!"
            />
            <div className="absolute inset-y-0 right-0 w-px bg-gray-400 hidden md:block"></div>
          </div>
          <div>
            <AssuranceElement
              src="/homepage/AssuranceLogo4.png"
              title="100% Safe and Secure"
              description="All Transactions are Fully Encrypted with State of the Art Technology!"
            />
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="relative mt-10 flex justify-center">
        {/* Background Container */}
        <div className="absolute top-0 w-[60%] h-[200px] bg-[#FAF0CA] left-1/2 -translate-x-1/2 z-0 rounded-2xl"></div>
        <NewArrivals></NewArrivals>
      </div>

      {/* Category Catalog */}
      <div className="bg-[#FAF9F6]">
        {/* <CategoryCatalogExpi games={FGames}></CategoryCatalogExpi> */}
        <CategoryCatalog></CategoryCatalog>
      </div>

      

      {/* Peripherals Featured */}
      <div className="relative mt-10 w-[70%] mx-auto">
        <h1 className="text-2xl font-bold text-center tracking-widest">
          Featured Peripherals
        </h1>
        <AliceCarousel
          autoPlay
          autoPlayInterval={3000}
          infinite
          disableButtonsControls={false}
          disableDotsControls={false}
          responsive={{
            0: { items: 1 },
            1024: { items: 1 }, // One item per slide
          }}
          renderPrevButton={() => (
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white rounded-md p-3 hover:bg-blue-700">
              ◀
            </button>
          )}
          renderNextButton={() => (
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white rounded-md p-3 hover:bg-blue-700">
              ▶
            </button>
          )}
        >
          {productsPeri.map((product, index) => (
            <ProductCarouselItem key={index} {...product} />
          ))}
        </AliceCarousel>
      </div>

      {/* Peripherals Product Grid */}
      <div className="container mx-auto justify-center flex mb-32">
        <ProductGrid products={products} />
      </div>

      <div className="bg-[#FAF9F6]">
        {/* Hot Picks Section */}
        <div className="relative mt-10 flex justify-center">
          {/* Yellow Background Container */}
          <div className="absolute top-0 w-[60%] h-[250px] bg-[#F4D35E] left-1/2 -translate-x-1/2 z-0 rounded-2xl"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-10 py-8">
            <h2 className="text-3xl font-bold text-black tracking-widest text-center">
              HOT PICKS
            </h2>
            <GameCarouselHotpicks games={FGames} />
          </div>
        </div>

        {/* Featured Game Carousel */}
        <div>
          <h1 className="text-2xl font-bold text-center tracking-widest">
            Featured Games
          </h1>
          <GameCarousel games={FGames} />
        </div>

        {/* Games Product Grid */}
        <div className="container mx-auto justify-center flex mb-32">
          <ProductGrid products={products} />
        </div>
      </div>

      {/* Collectibles Featured */}
      <div className="relative mt-10 w-[70%] mx-auto">
        <h1 className="text-2xl font-bold text-center tracking-widest">
          Featured Collectibles
        </h1>
        <AliceCarousel
          autoPlay
          autoPlayInterval={3000}
          infinite
          disableButtonsControls={false}
          disableDotsControls={false}
          responsive={{
            0: { items: 1 },
            1024: { items: 1 }, // One item per slide
          }}
          renderPrevButton={() => (
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white rounded-md p-3 hover:bg-blue-700">
              ◀
            </button>
          )}
          renderNextButton={() => (
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white rounded-md p-3 hover:bg-blue-700">
              ▶
            </button>
          )}
        >
          {productsPeri.map((product, index) => (
            <ProductCarouselItem key={index} {...product} />
          ))}
        </AliceCarousel>
      </div>

      {/* Collectibles Product Grid */}
      <div className="container mx-auto justify-center flex mb-20">
        <ProductGrid products={products} />
      </div>

      {/* Brand Feature */}
      <div className="bg-[#FAF9F6]">
        <div className="container mx-auto px-48 py-10 pb-12">
          {/* 3x2 Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {imagePaths.map((imagePath, index) => (
              <BrandCard
                key={index}
                imagePath={imagePath}
                altText={`Image ${index + 1}`}
              />
            ))}
          </div>
=======
      {/* Guarantee Assurance Part */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-3">
          <AssuranceElement
            src="/homepage/AssuranceLogo1.png"
            title="Your Most Trusted Store"
            description="100% All Brand New & Original Shop with Confidence."
          />
          <AssuranceElement
            src="/homepage/AssuranceLogo2.png"
            title="Fast Shipping Nationwide"
            description="Ships in 24 hours! Express and Same-Day Delivery within Metro Manila!"
          />
          <AssuranceElement
            src="/homepage/AssuranceLogo3.png"
            title="Save on Loyalty Rewards"
            description="Sign in to start earning Loyalty Rewards Points!"
          />
          <AssuranceElement
            src="/homepage/AssuranceLogo4.png"
            title="100% Safe and Secure"
            description="All Transactions are Fully Encrypted with State of the Art Technology!"
          />
>>>>>>> origin
        </div>
      </div>
    </div>
  );
};

export default Page;
