import Testimonial from "../models/Testimonial.js";

export const getTestimonial=async(req,res)=>{

try{

let data=await Testimonial.findOne();

if(!data){

data=await Testimonial.create({
cards:[],
});

}

res.json(data);

}catch(error){

res.status(500).json({
message:error.message,
});

}

};

export const updateTestimonial=async(req,res)=>{

try{

let data=await Testimonial.findOne();

if(data){

data=await Testimonial.findByIdAndUpdate(
data._id,
req.body,
{new:true}
);

}else{

data=await Testimonial.create(req.body);

}

res.json(data);

}catch(error){

res.status(500).json({
message:error.message,
});

}

};