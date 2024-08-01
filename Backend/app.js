const  express =  require("express")
const userRouter = require("./routers/User.route.js")
const app = express();
app.use(express.json({limit:"100kb"}))
app.use(express.urlencoded());
app.use(express.static ("./public"))
app.use("/user", userRouter)




module.exports= {
 app ,
}