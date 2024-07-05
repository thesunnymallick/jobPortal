

// Job Controller

import Job from "../models/jobModal.js";
import User from "../models/userModel.js";
import ErrorHandeller from "../utils/ErrorHandeller.js";

export const createJobController=async(req, res, next)=>{
  try {
      const {companyName,position}=req.body;

      if(!companyName){
        return next(new ErrorHandeller("Company name is required!", 400))
      }
      if(!position){
        return next(new ErrorHandeller("Company position is required!", 400))
      }

      req.body.createBy=req.user.user_id;

      const  user=await User.findOne({_id:req.user.user_id});

      const job= await Job.create(req.body);
      console.log(job)
        res.status(201).json({
            statusCode:201,
            message:"job created successfully",
             data:{
                job,
                userName:user.name
             },
        })
  } catch (error) {
    next(error)
  }
}