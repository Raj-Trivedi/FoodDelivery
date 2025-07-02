import foodModel from "../models/foodModel.js";

import fs from 'fs';


// add food item
const addFood = async (req,res)=>{
      console.log("req.file", req.file);  // check if multer actually added the file

    if (!req.file) {
  return res.status(400).json({ success: false, message: "No image uploaded" });
}

 let image_fileName= `${req.file.filename}`; // getting image file name from request

 
 
 const food= new foodModel({ // creating a new food item
    // req.body is used to get data from the body of the request
    
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_fileName,
    category: req.body.category
 });
    try {
        await food.save(); // saving the food item to the database
        res.json({ success:true ,message: "Food item added successfully"}); // sending success response
        } catch (error) {
        console.log(error);
        res.json({success:false , message: "Error adding food item"}); // sending error response
    }


 

   
}

// Get all food items
const getAllFoods = async (req, res) => {
  try {
    const foods = await foodModel.find();
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error fetching food items" });
  }
};

export {addFood, getAllFoods};