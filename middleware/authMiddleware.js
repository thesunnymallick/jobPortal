import ErrorHandeller from "../utils/ErrorHandeller.js"
import JWT from "jsonwebtoken"

 const authMiddleware=async(req, res, next)=>{
 try {
    const authHeader=req.headers.authorization
    console.log(authHeader)

    if(!authHeader || !authHeader.startsWith("Bearer")){
        return next(new ErrorHandeller("Anothorization"))
    }
    const token =authHeader.split(" ")[1]
    const payload= JWT.verify(token, process.env.JWT_SECRET);
    console.log(payload)
      req.user={user_id :payload.user_id}
      console.log(req.user)
    next()
 } catch (error) {
    next(error)
 }
}

export default authMiddleware;