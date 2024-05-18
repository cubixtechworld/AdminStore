const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName : String,
    productTitle: String,
    productslug: String,
    brandName : String,
    category : String,
    productImage : [],
    description : String,
    currentStock: String,
    varient:[],
    color:[],
    sizeChart: String,
    price : Number,
    sellingPrice : Number
},{
    timestamps : true
})


const ProductModel = mongoose.model("product",productSchema)

module.exports = ProductModel