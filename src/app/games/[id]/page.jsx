"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { gameProducts } from "@/utils/games/constantsGames";

export default function SpecificGame({ params }) {
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;

  const product = gameProducts.find((item) => item.slug === id);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-500 text-lg">Product not found.</p>
      </div>
    );
  }

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="object-contain rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
            <p className="text-xl text-gray-600">Actions | Games</p>

            <p>
              <span className="mt-4 text-2xl font-bold text-blue-600">₱{product.price}.00</span>
              <span className="ml-4 text-green-600">{product.stock}</span>
            </p>

            <p>
              <span className="text-gray-600">{product.description}</span>
            </p>

            <hr className="border-gray-300 my-4 w-full" />

            {/* Quantity and Action Buttons Row */}
            <div className="flex items-center mt-4 space-x-4">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={handleDecrease}
                  className="bg-gray-200 px-4 py-2 rounded-l-lg text-gray-700 hover:bg-gray-300"
                >
                  -
                </button>
                <input
                  type="text"
                  id="quantity"
                  value={quantity}
                  readOnly
                  className="bg-[#f9fafb] w-16 text-center focus:outline-none"
                />
                <button
                  onClick={handleIncrease}
                  className="bg-gray-200 px-4 py-2 rounded-r-lg text-gray-700 hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Buttons */}
              <div className="flex space-x-6">
                <button className="bg-yellow-500 border border-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transform transition duration-300 ease-in-out">
                  Add to Cart
                </button>
                <button className="bg-blue-500 border border-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transform transition duration-300 ease-in-out">
                  Buy Now
                </button>
              </div>
            </div>

            {/* New Delivery Section */}
            <div className="bg-[#f9fafb] p-4 rounded-lg mt-6 space-y-4 border border-gray-200 w-full">
              <div className="flex items-center space-x-4">
                <Image 
                  src="/homepage/freedelivery.png" 
                  alt="Free Delivery" 
                  width={30} 
                  height={30} 
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Free Delivery</p>
                  <span className="text-gray-500 text-sm hover:underline">
                    Enter your postal code for Delivery Availability
                  </span>
                </div>
              </div>

              <hr className="border-gray-300 my-4 w-full" />

              <div className="flex items-center space-x-4">
                <Image 
                  src="/homepage/returndelivery.png"
                  alt="Return Delivery" 
                  width={30} 
                  height={30} // Adjust the size
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Return Delivery</p>
                  <p className="text-sm text-gray-600">
                    Free 30 Days Delivery Returns.                  
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Description</h2>
          <p className="text-gray-700 mt-3">{product.description}</p>
        </div>
      </main>
    </div>
  );
}
