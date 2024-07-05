import ErrorHandeller from "../utils/ErrorHandeller.js"
import JWT from "jsonwebtoken"


// Auth middleware
 const authMiddleware=async(req, res, next)=>{
 try {
    const authHeader=req.headers.authorization
    console.log(authHeader)

    if(!authHeader || !authHeader.startsWith("Bearer")){
        return next(new ErrorHandeller("Anothorization"))
    }
    const token =authHeader.split(" ")[1]
    const payload= JWT.verify(token, process.env.JWT_SECRET);
    
    // set user id 
      req.user={user_id :payload.user_id}
    next()
 } catch (error) {
    next(error)
 }
}

export default authMiddleware;