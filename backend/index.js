import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js";
import authRoute from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors"


let app = express();

let port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
origin:"http://localhost:5173"
}));
app.use(cookieParser())
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