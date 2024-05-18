const wishlistModel = require("../../models/wishlistModel")

const deleteWishlistAllProduct=async(req,res)=>{
    try{
        const deleteProduct = await wishlistModel.deleteMany({ })

        res.status(200).json({
            message: `Deleted ${deleteProduct.deletedCount} all products in the cart successfully`,
            error: false,
            success: true
        });
    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports=deleteWishlistAllProduct