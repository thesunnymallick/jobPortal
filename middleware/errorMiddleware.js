

const errorMiddleware=(err, req, res, next)=>{
  err.message=err.message ||"internel server error";
  err.statusCode=err.statusCode || 500;


  if (err.name === "NotFoundError") {
    err.message = "Not Found";
    err.statusCode = 404;
  }
  if(err.name==="ValidationError"){
    const errors = Object.values(err.errors).map((el) => el.message);
    const errorMessage = errors.join(', ');
    err.message=errorMessage
    err.statusCode=400
  }

  if(err.code===11000){
    err.message="duplicate key error",
    err.statusCode=400
  }
  if (err.name === "UnauthorizedError") {
    err.message = "Unauthorized";
    err.statusCode = 401;
  }

  if (err.name === "ForbiddenError") {
    err.message = "Forbidden";
    err.statusCode = 403;
  }

  if (err.statusCode === 405) {
    err.message = "Method Not Allowed";
  }

  // send error
   res.status(err.statusCode).json({
    success:false,
    message:err.message,
    statusCode:err.statusCode
   })
}

export default errorMiddleware;