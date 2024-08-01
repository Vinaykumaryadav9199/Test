const {Schema , model, Types} = require("mongoose")
const Userschema = new Schema({
    Name :{
        Types:String,
        required:true,
    },
    Email:{
        Types:String,
        required:true,
    },
    Password:{
        Types:String,
        required:true
    }
    
})

const User = new model("User" ,Userschema);
module.exports = User;
