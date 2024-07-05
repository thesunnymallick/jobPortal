import mongoose from "mongoose";

const jobSchema=new mongoose.Schema({
    companyName:{
        type:String,
        required:[true, "Company name is required"],
    },
    position:{
        type:String,
        required :[true, "Position is required"],
    },
    wrokType:{
      type:String,
      enum:["full-time", "part-time", "intenship", "contract"],
      default:"full-time",
    },
    status:{
        type:String,
        enum:["pending", "reject", "interview"],
        default: "pending",
    },
    workLocation:{
        type:String,
        default:"Kolkata",
    },
    createBy:{
      type:mongoose.Types.ObjectId,
      ref:"Users",
    }
})

const Job=mongoose.model("Job", jobSchema);

export default Job;