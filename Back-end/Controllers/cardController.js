import userModel from "../Models/userModel.js"

// Add Items to user cart
const addToCart = async(req,res)=>{
  try {
    let userData = await userModel.findOne({_id:req.body.userID})
    let cartData = await userData.cartData;
    if(!cartData[req.body.itemId])
    {
        cartData[req.body.itemId] = 1
    }
    else{
        cartData[req.body.itemId] += 1
    }
    await userModel.findByIdAndUpdate(req.body.userID,{cartData});
    res.json({success:true,message:"Added to cart"})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"error"})
  }
}

// Remove Items from user cart
const removeFromCart = async(req,res) => {
    try {
        let userData = await userModel.findById(req.body.userID)
    let cartData = await userData.cartData;
    if(cartData[req.body.itemId]>0)
    {
        cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userID,{cartData})
    res.json({success:true,message:"Removed From Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

//fetch user Card data
const getCart = async(req,res) => {
    try {
        let userData = await userModel.findById(req.body.userID)
     let cartData = await userData.cartData
    res.json({success:true,cartData})
    } catch (error) {
        console.log(error)
        res.json({success:true,message:"error"})
    }
}

export {addToCart, removeFromCart, getCart}