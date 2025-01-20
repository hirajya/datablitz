"use client";

import { usePathname, useSearchParams } from "next/navigation"; // Use correct hooks for query params
import React, { useState, useEffect } from "react";
import { peripheralProducts } from "@/utils/peripherals/constantsPeripherals";
import { gameProducts } from "@/utils/games/constantsGames";
import { collectibleProducts } from "@/utils/collectibles/constantsCollectibles";
import SearchGrid from "@/components/search/searchGrid";

const allProducts = [
  ...peripheralProducts.map((product) => ({ ...product, category: "Peripherals" })),
  ...gameProducts.map((product) => ({ ...product, category: "Games" })),
  ...collectibleProducts.map((product) => ({ ...product, category: "Collectibles" })),
];

export default function SearchPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const [filters, setFilters] = useState({
    category: [],
    price: [0, 10000], // Initial price range
    ratings: [],
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Extract search term from the URL
  useEffect(() => {
    const searchTerm = decodeURIComponent(pathname.split("/search/")[1] || ""); // Extract after "/search/"
    setSearchQuery(searchTerm);
  }, [pathname]);

  // Filter products based on search query and filters
  useEffect(() => {
    let filtered = allProducts;

    // Apply search query
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(lowercasedQuery)
      );
    }

    // Apply category filter
    if (filters.category.length > 0) {
      filtered = filtered.filter((product) => filters.category.includes(product.category));
    }

    // Apply price range filter
    filtered = filtered.filter(
      (product) => product.price >= filters.price[0] && product.price <= filters.price[1]
    );

    // Apply ratings filter
    if (filters.ratings.length > 0) {
      filtered = filtered.filter((product) => filters.ratings.includes(product.rating));
    }

    setFilteredProducts(filtered);
  }, [searchQuery, filters]);

  // Handle category filter changes
  const handleCategoryChange = (category) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter((cat) => cat !== category)
        : [...prev.category, category],
    }));
  };

  // Handle rating filter changes
  const handleRatingChange = (rating) => {
    setFilters((prev) => ({
      ...prev,
      ratings: prev.ratings.includes(rating)
        ? prev.ratings.filter((r) => r !== rating)
        : [...prev.ratings, rating],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-6">
          Search Results for: <span className="text-blue-600">{searchQuery || "All Products"}</span>
        </h1>
        <div className="grid grid-cols-4 gap-6">
          {/* Filters Section */}
          <aside className="col-span-1 bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            {/* Category Filter */}
            <div className="mb-4">
              <h3 className="font-medium">Category</h3>
              <ul className="space-y-2 mt-2">
                {["Peripherals", "Games", "Collectibles"].map((category) => (
                  <li key={category}>
                    <input
                      type="checkbox"
                      id={category}
                      onChange={() => handleCategoryChange(category)}
                      checked={filters.category.includes(category)}
                    />
                    <label htmlFor={category}> {category}</label>
                  </li>
                ))}
              </ul>
            </div>
            {/* Price Range Filter */}
            <div className="mb-4">
              <h3 className="font-medium">Price</h3>
              <input
                type="range"
                min="0"
                max="10000"
                value={filters.price[1]}
                className="w-full mt-2"
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    price: [0, parseInt(e.target.value, 10)],
                  }))
                }
              />
              <p className="text-sm text-gray-600">Max Price: ₱{filters.price[1]}</p>
            </div>
            {/* Ratings Filter */}
            <div className="mb-4">
              <h3 className="font-medium">Ratings</h3>
              <ul className="space-y-2 mt-2">
                {[5, 4, 3, 2].map((stars) => (
                  <li key={stars}>
                    <input
                      type="checkbox"
                      id={`stars-${stars}`}
                      onChange={() => handleRatingChange(stars)}
                      checked={filters.ratings.includes(stars)}
                    />
                    <label htmlFor={`stars-${stars}`}> {stars} Stars & Up</label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Products Grid */}
          <section className="col-span-3">
            {filteredProducts.length > 0 ? (
              <SearchGrid products={filteredProducts} />
            ) : (
              <p className="text-gray-600 text-lg">No products found matching your search.</p>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
