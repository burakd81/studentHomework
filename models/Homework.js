const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HomeworkSchema = new Schema({
    name : {
        type:String,
        required : [true,"Please provide a name"]
    },
    desc : {
        type : String,
        required : true
    },
    createdAt : {
        type:Date,
        default : Date.now
    }
    
})

module.exports = mongoose.model("homework",HomeworkSchema);