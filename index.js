const express =  require("express");
// const mongoose = require("mongoose");
const connection = require("./config/db");
const redisClient = require("./helpers/redis");
const {userRouter} = 
require("dotenv").config();

const {findip} = require("./routes/findip.route")
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.get("/", async(req,res)=>{
    res.send(await redisClient.get("name"));
})

app.use("/api/user",userRouter)

app.use("/api/ip", findip)

app.listen(PORT, async()=>{
try {
    await connection();
    console.log("connected to DB")

    logger.log("info","connected")
} catch (err) {
    console.log("err.message")
    logger.log("error","Connection Failed")

}
console.log(`Server Running On PORT`)


})




