const redis = require("redis");
const ioredis = require("ioredis")

const redisClient = redis.createClient();
// on connection
redisClient.on("connect", async()=>{
    console.log("redis server connected")

})

//if error
redisClient.on("error", (err)=>{
    console.log(err.message)

})

redisClient.connect();

module.exports= redisClient;
