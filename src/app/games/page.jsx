import React from 'react'
import { gameProducts } from "@/utils/games/constantsGames";
import GamesGrid from "@/components/games/gamesGrid";

export default function Games() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-4 gap-6">
          {/* Filters Section */}
          <aside className="col-span-1 bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="mb-4">
              <h3 className="font-medium">Category</h3>
              <ul className="space-y-2 mt-2">
                <li><input type="checkbox" id="xbox" /> <label htmlFor="xbox">Xbox</label></li>
                <li><input type="checkbox" id="ps5" /> <label htmlFor="ps5">PS5</label></li>
                <li><input type="checkbox" id="pc_android" /> <label htmlFor="pc_android">PC & Android</label></li>
                <li><input type="checkbox" id="nintendo" /> <label htmlFor="nintendo">Nintendo Switch</label></li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-medium">Price</h3>
              <input type="range" min="30" max="8999" className="w-full mt-2" />
            </div>
            <div className="mb-4">
              <h3 className="font-medium">Ratings</h3>
              <ul className="space-y-2 mt-2">
                {[5, 4, 3, 2].map((stars) => (
                  <li key={stars}>
                    <input type="checkbox" id={`stars-${stars}`} />
                    <label htmlFor={`stars-${stars}`}> {stars} Stars & Up</label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Games Grid */}
          <section className="col-span-3">
            <GamesGrid products = {gameProducts} />
          </section>
        </div>
      </main>
    </div>
  );
}
