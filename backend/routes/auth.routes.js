
import express, { Router }  from "express";
import { signUp } from "../controllers/auth.controllers.js";


const authRoute = express(Router());

authRoute.post("/sighup" , signUp)


export default authRoute;