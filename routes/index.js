const express = require('express')
const router = express.Router()

const SignUpController = require("../controller/user/Signup");
const SigninController=require("../controller/user/Signin");
const LogoutController = require('../controller/user/Logout');
const userDetailsController = require('../controller/user/userDetails');
const authToken = require('../middleware/authToken');
const updateUser = require('../controller/user/updateUser');
const Alluser = require('../controller/user/Alluser');
const deleteUser = require('../controller/user/deleteUser');
const deleteAllUser = require('../controller/user/deleteAlluser');
const getProductController = require('../controller/Product/getProduct');
const getCategoryWiseProduct = require('../controller/Product/getCategoryWiseProduct');
const getCategoryProduct = require('../controller/Product/getCategoryProduct');
const getProductDetails = require('../controller/Product/getProductDetails');
const searchProduct = require('../controller/Product/searchProduct');
const filterProductController = require('../controller/Product/filterProduct');
const UploadProductController = require('../controller/Product/UploadProduct');
const updateProductController = require('../controller/Product/updateProduct');
const deleteAllProductController = require('../controller/Product/deleteAllProduct');
const deleteProductController = require('../controller/Product/deleteProduct');
const addToCartController = require('../controller/Cart/addToCartController');
const countAddToCartProduct = require('../controller/Cart/countAddToCartProduct');
const addToCartViewProduct = require('../controller/Cart/addToCartViewProduct');
const updateAddToCartProduct = require('../controller/Cart/updateAddToCartProduct');
const deleteAddToCartProduct = require('../controller/Cart/deleteAddToCartProduct');
const addToWishlistController = require('../controller/Wishlist/addToWishlistController');
const deleteAllProductCart = require('../controller/Cart/deleteAllProductCart');
const deleteAddToWishlistProduct = require('../controller/Wishlist/deleteAddToWishlistProduct');
const deleteWishlistAllProduct = require('../controller/Wishlist/deleteWishlistAllProduct');
const countAddToWishlistProduct = require('../controller/Wishlist/countAddToWishlistProduct');
const addToWishlistViewProduct = require('../controller/Wishlist/addToWishlistViewProduct');
const updateWishlistController = require('../controller/Wishlist/updateWishlistController');


//route define
router.post("/signup",SignUpController);
router.post("/signin",SigninController);
router.get("/logout",LogoutController);
router.get("/user-details",authToken,userDetailsController);
router.post("/update-user",authToken,updateUser);

//admin panel api
router.get("/all-user",authToken,Alluser);
router.delete("/delete-user",authToken,deleteUser);
router.delete("/delete-alluser",authToken,deleteAllUser);

//product api
router.get("/get-product",getProductController);
router.get("/get-categoryProduct",getCategoryProduct);
router.get("/search",searchProduct);
router.post("/category-product",getCategoryWiseProduct);
router.post("/product-details",getProductDetails);
router.post("/filter-product",filterProductController);
router.post("/upload-product",authToken,UploadProductController);
router.post("/update-product",authToken,updateProductController);
router.delete("/delete-allproducts",authToken,deleteAllProductController);
router.delete("/delete-product",authToken,deleteProductController);

//user add to cart
router.post("/addtocart",authToken,addToCartController);
router.post("/update-cart-product",authToken,updateAddToCartProduct);
router.post("/delete-cart-product",authToken,deleteAddToCartProduct);
router.post("/delete-cart-allproduct",authToken,deleteAllProductCart);
router.get("/countAddToCartProduct",authToken,countAddToCartProduct);
router.get("/view-card-product",authToken,addToCartViewProduct);

//user add to wishlist
router.post("/addtowishlist",authToken,addToWishlistController);
router.post("/delete-wishlist-product",authToken,deleteAddToWishlistProduct);
router.post("/delete-wishlist-allproduct",authToken,deleteWishlistAllProduct);
router.post("/update-wishlist-product",authToken,updateWishlistController);
router.get("/countAddToWishlistProduct",authToken,countAddToWishlistProduct);
router.get("/view-wishlist-product",authToken,addToWishlistViewProduct);

//checkout process

module.exports = router