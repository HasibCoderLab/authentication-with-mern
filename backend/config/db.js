import mongoose from "mongoose";

const connectDB =  async () =>{
    try {
        await mongoose.connect(process.env.MONGODB);
    } catch (error) {
        console.log("Database Erorr :" , error.message);
        
    }
}