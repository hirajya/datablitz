import connectToDatabase from "../../../../../lib/db";
import Product from "../../../../../models/product";
import Review from "../../../../../models/review"; // Import Review model

export async function GET(req, context) {
    try {
        console.log("📡 API Request: Fetching products...");
        await connectToDatabase();

        const { category } = context.params;
        const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

        // Step 1: Fetch products from the database
        const products = await Product.find({ "tag.type": formattedCategory });

        if (products.length === 0) {
            console.warn(`⚠️ No ${formattedCategory} products found in the database.`);
            return Response.json([], { status: 200 });
        }

        // Step 2: Get all product IDs
        const productIds = products.map((product) => product._id);

        // Step 3: Aggregate reviews to compute the average rating per product
        const reviewAggregation = await Review.aggregate([
            { $match: { product_id: { $in: productIds } } }, // Match only relevant product reviews
            {
                $group: {
                    _id: "$product_id",
                    avgRating: { $avg: "$rating" }, // Calculate average rating
                },
            },
        ]);

        // Step 4: Create a mapping of product_id → avgRating
        const ratingMap = Object.fromEntries(
            reviewAggregation.map(({ _id, avgRating }) => [_id.toString(), avgRating])
        );

        // Step 5: Merge ratings with products
        const productsWithRatings = products.map((product) => ({
            ...product.toObject(),
            rating: ratingMap[product._id.toString()] || 0, // Default to 0 if no reviews
        }));

        console.log(`✅ Retrieved ${productsWithRatings.length} ${formattedCategory} products with ratings.`);

        return Response.json(productsWithRatings, { status: 200 });
    } catch (error) {
        console.error("❌ Error in /api/product:", error.message);
        return Response.json({ error: "Failed to fetch products", details: error.message }, { status: 500 });
    }
}
