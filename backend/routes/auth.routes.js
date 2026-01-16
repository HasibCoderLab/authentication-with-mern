
import express, { Router }  from "express";
import { login, logout, signUp } from "../controllers/auth.controllers.js";


const authRoute = express(Router());

authRoute.post("/sighup" , signUp);
authRoute.post("/login",login);
authRoute.post("/logout",logout)



export default authRoute;