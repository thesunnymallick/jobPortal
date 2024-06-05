import express from "express";
import dotenv from "dotenv";
import colors from "colors"
import connectDB from "./config/dbConfig.js";
import authRoute from "./routes/authRoute.js"

// env file config
dotenv.config();

// get Value from env file
const PORT=process.env.PORT

// Conncet databse
connectDB()
// package execute
const app=express()

// middleware 
app.use(express.json())
app.use("/api/v1/user", authRoute);


// Server Start

app.listen(PORT, (req, res)=>{
    console.log(`Server starting in ${process.env.MODE} mode on port on ${PORT}`.blue)
})
