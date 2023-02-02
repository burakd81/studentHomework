const mongoose = require('mongoose');



const connectDatabase = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("MongoDB Connection Successful");
    })
    .catch(err =>{
        console.error(err);
    })
    

}

module.exports = connectDatabase;