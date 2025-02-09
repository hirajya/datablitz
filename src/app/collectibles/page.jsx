'use client'
import React, { useEffect, useState } from "react";
import CollectiblesGrid from "@/components/collectibles/collectiblesGrid";

export default function Collectibles() {
  const [products, setProducts] = useState([]); // All products
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products
  const [filters, setFilters] = useState({
    category: [], // Selected categories
    price: 10000,
    ratings: [],
  });

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/product/collectibles"); // API call
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Set initial filtered products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  // 🔹 Apply filters whenever filters change
  useEffect(() => {
    let filtered = products;

    // ✅ Filter by Category (Matches at least one selected category)
    if (filters.category.length > 0) {
      filtered = filtered.filter((product) =>
        product.tag.category.some((cat) => filters.category.includes(cat))
      );
    }

    // ✅ Filter by Price
    filtered = filtered.filter((product) => product.price <= filters.price);

    // ✅ Filter by Ratings
    if (filters.ratings.length > 0) {
      filtered = filtered.filter((product) =>
        filters.ratings.some((rating) => product.rating >= rating)
      );
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  // 🔹 Handle Category Selection
  const handleCategoryChange = (category) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter((c) => c !== category)
        : [...prev.category, category],
    }));
  };

  // 🔹 Handle Price Change
  const handlePriceChange = (event) => {
    setFilters((prev) => ({ ...prev, price: parseInt(event.target.value) }));
  };

  // 🔹 Handle Ratings Change
  const handleRatingsChange = (rating) => {
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
        <div className="grid grid-cols-4 gap-6">
          {/* Filters Section */}
          <aside className="col-span-1 bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>

            {/* ✅ Category Filter */}
            <div className="mb-4">
              <h3 className="font-medium">Category</h3>
              <ul className="space-y-2 mt-2">
                {[
                  "Action Figure",
                  "Amiibo",
                  "Badge",
                  "Rubber Straps",
                  "Cards",
                  "Plush",
                ].map((category) => (
                  <li key={category}>
                    <input
                      type="checkbox"
                      checked={filters.category.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <label className="ml-2">{category}</label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="mb-4">
              <h3 className="font-medium">Price</h3>
              <input
                type="range"
                min="30"
                max="10000"
                value={filters.price}
                onChange={handlePriceChange}
                className="w-full mt-2"
              />
              <p>Up to: ₱{filters.price}</p>
            </div>

            {/* Ratings Filter */}
            <div className="mb-4">
              <h3 className="font-medium">Ratings</h3>
              <ul className="space-y-2 mt-2">
                {[5, 4, 3, 2].map((stars) => (
                  <li key={stars}>
                    <input
                      type="checkbox"
                      checked={filters.ratings.includes(stars)}
                      onChange={() => handleRatingsChange(stars)}
                    />
                    <label className="ml-2">{stars} Stars & Up</label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ✅ Collectibles Grid */}
          <section className="col-span-3">
            <CollectiblesGrid products={filteredProducts} />
          </section>
        </div>
      </main>
    </div>
  );
}
