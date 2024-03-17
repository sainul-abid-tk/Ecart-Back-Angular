const expres=require('express')
const productController=require('../Controller/productController')
const userController=require('../Controller/userController')
const wishlistController=require('../Controller/wishlistController')
const cartController=require('../Controller/cartController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const router=expres.Router()

// getallProducts
router.get('/allProducts',productController.getAllProducts)
// register
router.post('/register',userController.register)
// login
router.post('/login',userController.login)
// view Product
router.get('/viewProduct/:id',productController.getAProduct)
// add to Wishlist
router.post('/addToWishlist',jwtMiddleware,wishlistController.addToWishlist)
// get All wishlist
router.get('/getAllWishlist',jwtMiddleware,wishlistController.getAllwishlist)
// remove Wishlist
router.delete('/removeWishlist/:id',jwtMiddleware,wishlistController.removeWishlist)
// addToCart
router.post('/addToCart',jwtMiddleware,cartController.addToCart)
// getCart
router.get('/getCart',jwtMiddleware,cartController.getCart)
// removeCart
router.delete('/removeCart/:id',jwtMiddleware,cartController.removeCartItem)
// incrementcart
router.get('/cartIncrement/:id',jwtMiddleware,cartController.incrementItem)
// decrementcart
router.get('/cartDecrement/:id',jwtMiddleware,cartController.decrementItem)
// cartempty
router.delete('/cartEmpty',jwtMiddleware,cartController.emptyCart)
module.exports=router

