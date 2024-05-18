const wishlistModel = require("../../models/wishlistModel")

const addToWishlistController = async (req, res) => {
    try {
   
        const { productId, userId } = req?.body;

        // Check if the product is already in the wishlist for this user
        const existingWishlistItem = await wishlistModel.findOne({ productId, userId });

        if (existingWishlistItem) {
            return res.status(400).json({ message: "Product already exists in the wishlist", error: true });
        }

        // Create a new wishlist item
        const wishlistItem = new wishlistModel({ productId, userId });
        await wishlistItem.save();

        res.status(201).json({ message: "Product added to wishlist successfully", success: true });
    } catch (err) {
        res.status(500).json({ message: err.message || "Failed to add product to wishlist", error: true });
    }
};

module.exports = addToWishlistController;