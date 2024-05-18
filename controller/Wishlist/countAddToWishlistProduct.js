const wishlistModel = require("../../models/wishlistModel")

const countAddToWishlistProduct=async(req,res)=>{
    try{
        const userId = req.userId

        const count = await wishlistModel.countDocuments({
           userId : userId
        })

        res.json({
            data : {
                count : count
            },
            message : "ok",
            error : false,
            success : true
        })
    }catch(err){
        res.json({
            message : err.message || err,
            error : false,
            success : false,
        })
    }
}

module.exports=countAddToWishlistProduct