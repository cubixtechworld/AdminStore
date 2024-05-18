const ProductModel = require("../../models/ProductModel");

const deleteAllProductController = async(req,res)=>{
 try{
    const allproduct = await ProductModel.deleteMany({});

    res.status(200).json({
        message: `Deleted ${allproduct.deletedCount} products successfully`,
        error: false,
        success: true
    });

 }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
 }
}

module.exports=deleteAllProductController