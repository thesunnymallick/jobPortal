import UserModel from "../models/userModel.js";
import ErrorHandeller from "../utils/ErrorHandeller.js";


export const userRegister=async(req, res, next)=>{
  try {
    const {name, email, password}=req.body;
    if(!name){
        
          return next(new ErrorHandeller("Name is required", 400))
    }
    if(!email){
        return next(new ErrorHandeller("email is required", 400))
    }
    if(!password){
        return next(new ErrorHandeller("password is required", 400))
    }

    const existingUser= await UserModel.findOne({email});
    if(existingUser){
        return next(new ErrorHandeller("user was allready register, please login!", 400))
    }
    const user=await UserModel.create({name, email, password})
     return res.status(201).json({
        message:"User register successfull",
        statusCode:200,
        success:false,
        user
     })
  } catch (error) {
      return next(error)
  }
}