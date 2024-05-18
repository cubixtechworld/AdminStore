const wishlistModel = require("../../models/wishlistModel")

const deleteAddToWishlistProduct = async(req,res)=>{
    try{
        const currentUserId = req.userId 
        const addTowishlistProductId = req.body._id

        const deleteProduct = await wishlistModel.deleteOne({ _id : addTowishlistProductId})

        res.json({
            message : "Product Deleted From Wishlist",
            error : false,
            success : true,
            data : deleteProduct
        })

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = deleteAddToWishlistProduct
