require('dotenv').config()
const mongoose = require("mongoose")
const {DB_NAME} = require("../constant.js")
const conn = async ()=>{
const Dbinstance=  await mongoose.connect(`${process.env.DB_URL}${DB_NAME}`).then(()=>{
      console.log("DB Connected Successfully" )
   }).catch((err)=>{
        console.log("DB Connection Error" , err);
        process.exit(1);
   })
};

module.exports ={
    conn
}
