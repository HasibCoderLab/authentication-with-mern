
import express, { Router }  from "express";
import { signUp } from "../controllers/auth.controllers.js";


const authRoute = express(Router());

authRoute.post("/sighin" , signUp)


export default authRoute;