const mongoose  = require("mongoose");
// Schema for Users
const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    password: {type:String,required:true},
    city:{type:String,required:true},
})

const user = mongoose.model("user",userSchema);

module.export = user;