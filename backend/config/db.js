import mongoose from "mongoose";

 const connectDB =  async () =>{
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("DB Connected");
        
    } catch (error) {
        console.log("Database Erorr :" , error.message);
        
    }
}
export default connectDB