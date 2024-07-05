import User from "../models/userModel.js";
import ErrorHandeller from "../utils/ErrorHandeller.js";


export const registerController=async(req, res, next)=>{
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
  
    const existingUser= await User.findOne({email});
    if(existingUser){
        return next(new ErrorHandeller("user was allready register, please login!", 400))
    }
    const user=await User.create({name, email, password, location:null, phoneNo:null})
      // Genrate Token 
     const token=user.createJWT()
     return res.status(201).json({
        message:"User register successfull",
        statusCode:200,
        success:false,
        data:{
            name:user.name,
            email:user.email,
        },
        token
     })
  } catch (error) {
      return next(error)
  }
}


export const loginController=async(req, res, next)=>{
    try {
        const {email, password}=req.body
        if(!email  && !password){
            return next(new ErrorHandeller("email and password required!", 400))
        }
        // find by email
        const user= await User.findOne({email})
        if(!user){
            return next(new ErrorHandeller("Invalid email and password", 400));
        }
        // check password match or not
        const isMatch= await user.comparePassword(password);

        console.log(isMatch)
        if(!isMatch){
            return  next (new ErrorHandeller("Invalid email and password", 400))
        }

        // Genrate Token
        const token=user.createJWT();
        res.status(200).json({
            message:"User login successfully",
            success:true,
            statusCode:200,
            data:{
                name:user.name,
                email:user.email
            }, 
            token
        })
    } catch (error) {
        next(error)
    }
}

