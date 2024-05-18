const ProductModel = require("../../models/ProductModel");

const deleteProductController = async(req,res)=>{
 try{
    const { productId } = req.body;

    const product = await ProductModel.findByIdAndDelete(productId);
    
    if (!product) {
        return res.status(404).json({
            message: "product not found",
            error: true,
            success: false
        });
    }
    res.status(200).json({
        message: "Product deleted successfully",
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

module.exports=deleteProductController