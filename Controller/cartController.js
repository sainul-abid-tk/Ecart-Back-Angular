const cartItems=require('../Models/cartModel')

exports.addToCart=async(req,res)=>{
    const {id,title,image,price,quantity}=req.body
    const userId=req.payload
    try{
        const existingCart=await cartItems.findOne({id,userId})
        if(existingCart){
            existingCart.quantity++
            existingCart.totalPrice=existingCart.price*existingCart.quantity
            await existingCart.save()
            res.status(200).json("Items Added Successfully")
        }else{
            const newCart=new cartItems({
                id,title,price,image,quantity,totalPrice:price,userId
            })
            await newCart.save()
            res.status(200).json("Item Added Successfully")
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getCart=async(req,res)=>{
    const userId=req.payload
    try{
        const allProducts=await cartItems.find({userId})
        res.status(200).json(allProducts)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.removeCartItem=async(req,res)=>{
    const {id}=req.params
    try{
        const removeProduct=await cartItems.findByIdAndDelete({_id:id})
        res.status(200).json(removeProduct)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.incrementItem=async(req,res)=>{
    const {id}=req.params
    try{
        const selectedProduct=await cartItems.findOne({_id:id})
        selectedProduct.quantity++
        selectedProduct.totalPrice=selectedProduct.quantity*selectedProduct.price
        await selectedProduct.save()
        res.status(200).json(selectedProduct)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.decrementItem=async(req,res)=>{
    const {id}=req.params
    try{
        const selectedProduct=await cartItems.findOne({_id:id})
        if(selectedProduct.quantity==1){
       await cartItems.deleteOne({_id:id})
       res.status(200).json("Success")   
     }else{
        selectedProduct.quantity--
        selectedProduct.totalPrice=selectedProduct.quantity*selectedProduct.price
        await selectedProduct.save()
        res.status(200).json(selectedProduct)
     }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.emptyCart=async(req,res)=>{
    const userId=req.payload
    try{
        const result=await cartItems.deleteMany({userId})
        res.status(200).json("Your Cart Is Deleted Successfully!!!")
    }catch(err){
        res.status(401).json(err)
    }
}