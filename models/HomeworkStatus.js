const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HomeworkStatusSchema = new Schema({
    student : {
        type:mongoose.Schema.ObjectId,
        required : true,
        ref : "Student"
    },
    homework : {
        type : mongoose.Schema.ObjectId,
        required : true,
        ref : "Homework"
    },
    status : {
        type:Boolean,
        required : true
    },
    createdAt : {
        type:Date,
        default : Date.now
    },
    updateAt : {
        type:Date,
        default : Date.now
    }

    
})

module.exports = mongoose.model("homeworkstatus",HomeworkStatusSchema);