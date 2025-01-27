"use client"
import React from 'react'
import AssuranceSection from "@/components/homepage/AssuranceSection";
import { peripheralProducts } from "@/utils/peripherals/constantsPeripherals";

export default function page() {
    const cartItems = peripheralProducts.slice(0, 1); // Example: First product in the array
    const recentlyViewed = peripheralProducts
    .filter((item) => !cartItems.some((cartItem) => cartItem.slug === item.slug))
    .slice(0, 4);

const total = cartItems.reduce((sum, item) => sum + item.price * 1, 0);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">My Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="col-span-2 bg-white p-4 rounded-lg shadow-md">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Product</th>
                <th className="py-2">Price</th>
                <th className="py-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4 flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                    <p>{item.name}</p>
                  </td>
                  <td className="py-4">₱{item.price.toLocaleString()}</td>
                  <td className="py-4">1</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Total</h2>
          <p className="text-lg font-bold">₱{total.toLocaleString()}</p>
          <textarea
            placeholder="Order instructions"
            className="mt-4 w-full p-2 border rounded-md"
          ></textarea>
          <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-md shadow-md w-full">
            Checkout
          </button>
        </div>
      </div>

      {/* Recently Viewed */}
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-bold mb-6">Recently Viewed</h2>
        <div className="flex justify-between gap-6">
            {recentlyViewed.map((item) => (
            <div
                key={item.slug}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center"
                style={{ width: '23%' }} // Ensures 4 items fit nicely
            >
                <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-contain mb-4"
                />
                <p className="text-sm font-bold text-gray-800 mb-2">{item.name}</p>
                <p className="text-sm text-blue-600 font-semibold">₱{item.price.toLocaleString()}</p>
            </div>
            ))}
        </div>
        <div>
            <AssuranceSection></AssuranceSection>
        </div>
      </div>
    </div>
  )
}
