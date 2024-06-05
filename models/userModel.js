import mongoose from "mongoose";
import validator from "validator";
const userSchema= new mongoose.Schema(
    {
        name: {
            type:String,
            require: [true , "Name is required"],
        },
        phoneNo:{
            type:Number,
        },
        email:{
            type:String,
            require:[true, "Email is required"],
            unique:true,
            validate: validator.isEmail,
            
        },
        password:{
            type: String,
            require: [true, "password is required"],

        },
        location :{
            type: String,
        },
    },
    {timestamps:true},
)
  const UserModel= mongoose.model("Users", userSchema)
export default UserModel