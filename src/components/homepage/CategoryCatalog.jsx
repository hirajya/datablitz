const CategoryCatalog = () => {
  const categories = [
    {
      name: "Games",
      image: "/homepage/games_samplepic2.webp",
      description: "Explore a world of entertainment and adventure.",
    },
    {
      name: "Accessories",
      image: "/homepage/accessories_samplepic.webp",
      description: "Perfect accessories to complement your lifestyle.",
    },
    {
      name: "Peripherals",
      image: "/homepage/peripherals_samplepic.webp",
      description: "Enhance your setup with the best peripherals.",
    },
    {
      name: "Collectibles",
      image: "/homepage/cards_samplepic.jpg",
      description: "Collect and display unique items.",
    },
    {
      name: "Plush",
      image: "/homepage/plush_samplepic2.jpeg",
      description: "Soft and cuddly plush toys for everyone.",
    },
    {
      name: "Action Figures",
      image: "/homepage/actionfig_samplepic.webp",
      description: "Discover detailed action figures for all ages.",
    },
    {
      name: "Amiibo",
      image: "/homepage/amiibo_samplepic2.webp",
      description: "Expand your gaming experience with Amiibo.",
    },
  ];

  return (
    <div className="pt-10">
      <div className="max-w-5xl mx-auto">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          style={{
            gridAutoRows: "130px", // Adjusted for a smaller size
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative group rounded-md overflow-hidden shadow hover:shadow-md transition-shadow duration-300 ${
                index % 2 === 0 ? "row-span-2" : "row-span-1"
              }`}
              style={{
                height:
                  category.name === "Plush" || category.name === "Amiibo"
                    ? "130px"
                    : "auto", // Adjust smaller height for specific items
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Static title */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">
                  {category.name}
                </span>
              </div>
              {/* Hover content */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">
                <span className="text-white text-sm font-semibold mb-1">
                  {category.name}
                </span>
                <p className="text-white text-xs text-center">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCatalog;
