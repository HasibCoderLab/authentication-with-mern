
import express, { Router }  from "express";
import { login, signUp } from "../controllers/auth.controllers.js";


const authRoute = express(Router());

authRoute.post("/sighup" , signUp);
authRoute.post("/login",login)


export default authRoute;