
import express, { Router }  from "express";
import { signIn } from "../controllers/auth.controllers.js";


const authRoute = express(Router());

authRoute.post("/sighin" , signIn)


export default authRoute;