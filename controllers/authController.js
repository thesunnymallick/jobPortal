import UserModel from "../models/userModel.js";


export const userRegister=async(req, res)=>{
  try {
    const {name, email, password}=req.body;
    if(!name){
        return res.status(400).json({
        message:"name is requied",
        statusCode:400,
        success:false,
        })
    }
    if(!email){
        return res.status(400).json({
        message:"email is requied",
        statusCode:400,
        success:false,
        })
    }
    if(!password){
        return res.status(400).json({
        message:"password is requied",
        statusCode:400,
        success:false,
        })
    }

    const existingUser= await UserModel.findOne({email});
    if(existingUser){
        return res.status(400).json({
            message:"user was allready register, please login!",
            statusCode:400,
            success:false,
        })
    }
    const user=await UserModel.create({name, email, password})
     return res.status(201).json({
        message:"User register successfull",
        statusCode:200,
        success:false,
        user
     })
  } catch (error) {
    res.status(400).json({
        message:"failed! user register unsuccessfull",
        statusCode:400,
        success:false,
        error
    })
  }
}