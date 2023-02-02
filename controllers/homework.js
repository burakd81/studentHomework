
const Homework = require("../models/Homework");


const getCreate = async (req,res,next) =>{
    const information = req.body;
    console.log(req.body);
    const homework = await Homework.create({
        ...information,

    });

    res
    .status(200)
    .json({
        success:true,
        data:homework
    })
}


const deleteHomework = async (req,res,next)=>{
    const {id} = req.params;

    await Homework.findByIdAndDelete(id);

    res.status(200).json({success:true,message:"Homework delete successful"});

    
}


const updateHomework =async(req,res,next)=>{
    const {id} = req.params;

    const {name,desc} = req.body;
    console.log(req.body);

    let homework = await Homework.findById(id);

    homework.name = name;
    homework.desc = desc;

    homework.save();

    return res.status(200).json({success:true,message:"Update Successful ",data:homework});

}


const getAllHomework = async (req,res,next)=>{
    const homework = await Homework.find();
    res
    .status(200)
    .json({
        success:true,
        data:homework
    });
};

module.exports = {getAllHomework,getCreate,updateHomework,deleteHomework};