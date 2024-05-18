const mongoose = require('mongoose')

const addToWishlist = mongoose.Schema({
   productId : {
        ref : 'product',
        type: mongoose.Schema.Types.ObjectId,
   },
   like: {
    type: Boolean,
    default: true // Assuming like by default, you can change as needed
},
   userId : String,
},{
    timestamps : true
})


const wishlistModel = mongoose.model("addToWishlist",addToWishlist)

module.exports = wishlistModel