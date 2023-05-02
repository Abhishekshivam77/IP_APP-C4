const redisClient = require("../helpers/redis");

const ipAddressmid = (req,res,next)=>{
    const{ip} = req.params;
    if(!ip){
        return res.status(403).send({message:"Invalid IP_ADD"})
    }

    next();

}
module.exports = ipAddressmid