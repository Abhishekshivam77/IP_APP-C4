const mongoose = require("mongoose");
//requiring db url from dotenv
require("dotenv").config();

const connection = ()=> mongoose.connect(process.env.MONGO_URL)

module.exports= connection;
