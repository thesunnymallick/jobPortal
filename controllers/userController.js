import User from "../models/userModel.js";
import ErrorHandeller from "../utils/ErrorHandeller.js";

// get details user info
export const userDetailsController=async(req, res, next)=>{
    try {
        const {name}=req.params
        const userDeatils =await User.findOne({name});
        if(!userDeatils){
            return next(new ErrorHandeller("Not found user details", 400))
        }
        return res.status(200).json({
            message:"User details fetch successfull",
            statusCode:200,
            success:false,
            data:userDeatils,
         })
    } catch (error) {
        next(error)
    }
}

// update user info
export const userUpadateController=async(req, res, next)=>{
    try {
        const {name, email, phoneNo, location}=req.body;
    
       
        if(!name){
            return next(new ErrorHandeller("name is required!", 400))
        }
        if(!email){
            return next(new ErrorHandeller("email is required", 400));
        }

        const user=await User.findOne({_id:req.user.user_id});
        // upadte user
          user.name=name;
          user.email=email;
          user.location=location;
          user.phoneNo=phoneNo;

          // Genarate token again
          const token=user.createJWT();
          // Send data user 
          res.status(200).json({
            statusCode:200,
            message:"user Update successfull",
            data:{
                name :user.name,
                email:user.email,
            },
            token
          })
      
    } catch (error) {
        next(error);
    }
}

