const expres=require('express')
const productController=require('../Controller/productController')
const userController=require('../Controller/userController')
const router=expres.Router()

// getallProducts
router.get('/allProducts',productController.getAllProducts)
// register
router.post('/register',userController.register)
// login
router.post('/login',userController.login)

module.exports=router

