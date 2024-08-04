const  express =  require("express")
const cors = require("cors")
const userRouter = require("./routers/User.route.js")
const app = express();
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(express.json({limit:"100kb"}))
app.use(express.urlencoded());
app.use(express.static ("./public"))
app.use("/user", userRouter)



module.exports= {
 app ,
}