import express from "express";
import { addFood } from "../controllers/foodController.js";

import multer from "multer"; //for image storing system


const foodRouter = express.Router();
const storage=multer.diskStorage({
    destination:"upload",
    filename:(req,file,cb)=>{
        return  cb(null,`${Date.now()}${file.originalname}`)

    }
})

const upload=multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood); // for collecting data from body(form etc)

// img storage engine




export {foodRouter}
