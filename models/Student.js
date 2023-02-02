const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const StudentSchema = new Schema({
    name : {
        type:String,
        required : [true,"Please provide a name"]
    },
    lastname : {
        type : String,
        required : true
    },
    number :{
        type:Number,
        required:true
    },
    createdAt : {
        type:Date,
        default : Date.now
    }
    
})

module.exports = mongoose.model("student",StudentSchema);