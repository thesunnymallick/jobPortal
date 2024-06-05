import express from "express"
import { userRegister } from "../controllers/authController.js";

const route=express.Router();

// userRegister
route.post("/register", userRegister)

export default route;