import express, { Router }  from "express";
import { signUp } from "../routes/auth.routes";

const authRoute = express(Router());

authRoute.post("/sighin" , signUp)


export default authRoute;