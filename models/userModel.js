import mongoose from "mongoose";
import validator from "validator";
const userSchema= new mongoose.Schema(
    {
        name: {
            type:String,
            required: [true , "Name is required"],
        
        },
        phoneNo:{
            type:Number,
        },
        email:{
            type:String,
            required:[true, "Email is required"],
            unique:true,
            validate: validator.isEmail,
            
        },
        password:{
            type: String,
            required: [true, "password is required"],
            

        },
        location :{
            type: String,
        },
    },
    {timestamps:true},
)
  const UserModel= mongoose.model("Users", userSchema)
export default UserModel