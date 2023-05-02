const {Router} = require("express");
const{login, signup,logout} = require("../controllers/user.controller")

const {auth} = require("../middlewares/auth")

const userRouter = Router();

userRouter.post("/login" ,login) //defined in the controllers and called by functions.........

userRouter.post("/signup" ,signup) //defined in the controllers and called by functions..........
.
userRouter.get("/logout" ,auth,logout);// defined in the controllers and called by functions...........

module.exports = {userRouter};