import express from "express"
import { loginController, registerController} from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const route=express.Router();

// AUTH ROUTES
// REGISTER || POST
route.post("/register", registerController)

// LOGIN || POST
route.post("/login", loginController)


export default route;