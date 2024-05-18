const WishlistModel = require("../../models/wishlistModel");

const updateWishlistController = async (req, res) => {
    try {
        const { wishlistItemId, like } = req.body;

        // Find the wishlist item by its ID
        const wishlistItem = await WishlistModel.findById(wishlistItemId);

        if (!wishlistItem) {
            return res.status(404).json({ message: "Wishlist item not found", error: true });
        }

        // Update the 'like' field
        wishlistItem.like = like;
        await wishlistItem.save();

        res.status(200).json({ message: "Wishlist item updated successfully", success: true });
    } catch (err) {
        res.status(500).json({ message: err.message || "Failed to update wishlist item", error: true });
    }
};

module.exports = updateWishlistController;
