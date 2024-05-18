const productModel = require("../../models/ProductModel")

const getProductDetails = async(req,res)=>{
    try{
        const { productSlug } = req.body;

        const product = await productModel.findOne({ slug: productSlug });

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                success: false,
                error: true
            });
        }

        res.json({
            data : product,
            message : "Ok",
            success : true,
            error : false
        })

        
    }catch(err){
        res.json({
            message : err?.message  || err,
            error : true,
            success : false
        })
    }
}

module.exports = getProductDetails