const {conn} = require("./DB/Connection.js")
const {app} = require("./app.js")

conn().then(()=>{
    app.listen(process.env.PORT , ()=>{
        console.log("Server is Running oN THE Port" , process.env.PORT)
    })
}).catch((err)=>{
    console.log(err)
    process.exit(1);
})













// require('dotenv').config()
// const mongoose = require("mongoose")
// const {DB_NAME} = require("./constant.js")
// const {app} = require("./app.js")
// ;( async()=>{
//     await mongoose.connect(`${process.env.DB_URL}\${DB_NAME}`).then(()=>{
//         console.log("DB CONNECTED")
//         app.listen(process.env.PORT, ()=>{
//             console.log("Server is running on the port:" , process.env.PORT)
//         })
//     }).catch((ERR)=>{
//         console.log("connection error" , ERR);
//     })
// })()