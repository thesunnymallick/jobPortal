
import express from "express";
import { userDetailsController, userUpadateController } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const route=express.Router();


// user Route

// USER DETAILS || GET
route.get("/userDetails/:name", authMiddleware, userDetailsController)

// PUT || Update USER
 route.put("/update", authMiddleware, userUpadateController)

 export default route;
  