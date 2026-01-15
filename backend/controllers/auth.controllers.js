import express, { Router }  from "express";
import { signUp } from "../routes/auth.routes.js";

const authRouter = express(Router());

authRouter.post("/signup" , signUp )

export default authRouter