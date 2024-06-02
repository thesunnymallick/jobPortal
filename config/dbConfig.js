
import dotenv from "dotenv";
import mongoose from "mongoose"
dotenv.config();
const url=process.env.MONGO_URL

const connectDB=async()=>{
  try {
    await mongoose.connect(url)
    console.log(`MongoDB Connection Success ${mongoose.connection.host}`.yellow)
  } catch (err) {
    console.log(`MongoDB Connection failed! ${err}`.bgRed.white)
  }
}

export default connectDB