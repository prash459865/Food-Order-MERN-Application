import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt"
import validator from "validator"
import Jwt from 'jsonwebtoken';



//Login User

const loginUser = async(req,res) =>{

  const {email,password} =req.body;
  try{
    const user = await userModel.findOne({email})
    if (!user) {
        return res.json({success:false,message:"user doesn't exist"})

    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch)
    {
        return res.json({success:false,message:"invalid credentials"})
    }
    const token = createToken(user._id);
    res.json({success:true,token})
  }
  catch(error)
  {
     console.log(error);
     res.json({success:false,message:"error"})
  }

}

const createToken = (id) =>{
  return Jwt.sign({id},process.env.JWT_SECRET)
}

const regUser = async(req,res) =>{
    const {name, password, email} = req.body;
    try{
        const exists = await userModel.findOne({email})
        if(exists)
        {
            return res.json({success:false,message:"User already exists"})
        }
        //validation
        if(!validator.isEmail(email)){
            res.json({success:false,message:"please enter valid Email"})
        }
        if(password.length<6)
        {
            res.json({success:false,message:"please enter atleast Six digit password"})
        }
        //Hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
       const user = await newUser.save()
       const token = createToken(user._id)
       res.json({success:true,token})
    }
    catch(error)
    {
     console.log(error)
     res.json({success:false,message:"Error"})
    }
}

export {loginUser,regUser}