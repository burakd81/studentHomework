const express = require("express");
const Student = require("../models/Student");



const createStudent = async (req,res,next) =>{
    const information = req.body;
    console.log(req.body);
    const student = await Student.create({
        ...information,

    });

    res
    .status(200)
    .json({
        success:true,
        data:student
    })
}


const deleteStudent = async (req,res,next)=>{
    const {id} = req.params;

    await Student.findByIdAndDelete(id);

    res.status(200).json({success:true,message:"Student delete successful"});

    
}


const updateStudent =async(req,res,next)=>{
    const {id} = req.params;

    const {name,desc} = req.body;
    console.log(req.body);

    let student = await Student.findById(id);

    student.name = name;
    student.lastname = lastname;
    student.number = number;

    student.save();

    return res.status(200).json({success:true,message:"Update Successful ",data:student});

}


const getAllStudent = async(req,res,next)=>{
    const student = await Student.find();
    res
    .status(200)
    .json({
        success:true,
        data:student
    });
};

module.exports = {createStudent,getAllStudent,updateStudent,deleteStudent};