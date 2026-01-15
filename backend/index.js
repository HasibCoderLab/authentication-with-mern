import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js";
import authRoute from "./routes/auth.routes.js";
let app = express();
let port = process.env.PORT || 4000;

app.use("/api",authRoute); 

// ======== Simple route ==== 
app.get("/" , (req,res) =>{
    res.send("Hello");
});



// === Port ===
app.listen( port , () =>{
    connectDB()
    console.log(`server stated at ${port} `);
    
});