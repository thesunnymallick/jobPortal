import express from "express";
import dotenv from "dotenv";
import colors from "colors"
import connectDB from "./config/dbConfig.js";

// env file config
dotenv.config();

// get Value from env file

const PORT=process.env.PORT

// Conncet databse
connectDB()
// package execute

const app=express()


// Server Start

app.listen(PORT, (req, res)=>{
    console.log(`Server starting in ${process.env.MODE} mode on port on ${PORT}`.blue)
})
