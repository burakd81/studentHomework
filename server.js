const  express  = require("express");
const dotenv = require("dotenv");
const routers = require("./routers/index")
const connectDatabase = require("./helpers/database/connectDatabase");

dotenv.config({
    path:"./config/env/config.env"
});

//MongoDb Connection




const app = express();
const PORT = process.env.PORT;
connectDatabase();
app.use("/api",routers);





app.listen(PORT,()=>{
    console.log("Project Started on "+PORT);
});
