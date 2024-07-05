import express from "express"
import authMiddleware from "../middleware/authMiddleware.js";
import { createJobController } from "../controllers/jobController.js";

const route=express.Router();

route.post("/create-job", authMiddleware, createJobController);

export default route;