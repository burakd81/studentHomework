const HomeworkStatus = require("../models/HomeworkStatus");



const createHomeworkStatus = async (req,res,next) =>{
    const information = req.body;
    console.log(req.body);
    const homeworkstatus = await HomeworkStatus.create({
        ...information,

    });

    res
    .status(200)
    .json({
        success:true,
        data:homeworkstatus
    })
}


const deleteHomeworkStatus = async (req,res,next)=>{
    const {id} = req.params;

    await HomeworkStatus.findByIdAndDelete(id);

    res.status(200).json({success:true,message:"Homework delete successful"});

    
}


const updateHomeworkStatus =async(req,res,next)=>{
    const {id} = req.params;

    const {student,homework,status} = req.body;
    console.log(req.body);

    let homeworkstatus = await HomeworkStatus.findById(id);

    homeworkstatus.student = student;
    homeworkstatus.homework = homework;
    homeworkstatus.status = status;
    homeworkstatus.updateAt = Date.now();

    homeworkstatus.save();

    return res.status(200).json({success:true,message:"Update Successful ",data:homeworkstatus});

}


const getAllHomeworkStatus = async (req,res,next)=>{
    const homeworkstatus = await HomeworkStatus.find();
    
    res
    .status(200)
    .json({
        success:true,
        data:homeworkstatus
    });
};

module.exports = {createHomeworkStatus,getAllHomeworkStatus,updateHomeworkStatus,deleteHomeworkStatus};