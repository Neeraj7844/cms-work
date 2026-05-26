import ProjectModel from "../models/ProjectModel.js";

export const getProject=async(req,res)=>{

try{

let data=await ProjectModel.findOne();

if(!data){

data=await ProjectModel.create({});

}

res.json(data);

}catch(error){

res.status(500).json({
message:error.message,
});

}

};

export const updateProject=async(req,res)=>{

try{

let data=await ProjectModel.findOne();

if(!data){

data=new ProjectModel(req.body);

}else{

Object.assign(data,req.body);

}

await data.save();

res.json({
message:"Project Updated",
data,
});

}catch(error){

res.status(500).json({
message:error.message,
});

}

};