import mongoose from "mongoose";

export const connectDB = async () => {
// mongodb+srv://ruby:Q7soNvBSxxiVJ1ve@cluster0.a2ztq1w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    await mongoose.connect('mongodb+srv://ruby:Q7soNvBSxxiVJ1ve@cluster0.a2ztq1w.mongodb.net/food-delivery')
    .then(()=> console.log("MongoDB connected successfully"))
 }



