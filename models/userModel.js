import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken"
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

// Middleware 
// Bcrypt to the password
userSchema.pre("save", async function(){
  try {
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt);
  } catch (error) {
    console.log(error)
  }
})

// match password
userSchema.methods.comparePassword=async function(password){
const isMatch=await bcrypt.compare(password, this.password);
return isMatch;
}

//JWT Token genarate
userSchema.methods.createJWT= function(){
const token= JWT.sign({user_id:this._id}, process.env.JWT_SECRET, {expiresIn:"1d"})
return token;
} 
const User= mongoose.model("Users", userSchema)
export default User