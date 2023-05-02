const {Router} = require("express");
const{getipdata, getip} = require("../controllers/user.controller");

const {auth} = require("../middlewares/auth");

const findIp = Router();

findIp.get("/getipdata",getipdata ) //defined in the controllers and called by functions

findIp.get("/getip",getip )//defined in the controllers and called by functions

module.exports = {findIp}