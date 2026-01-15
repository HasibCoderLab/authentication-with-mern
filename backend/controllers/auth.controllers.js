import User from "../model/user.model.js";
import bcrypt from "bcryptjs"
export const signUp = async (req,res) =>{
    try {
        const {firstname,lastname,userName,email,password} = req.body;

        // ========= 2nd Step === check have a user in DB ======
        let existUser = await User.findOne({email});
        if (existUser) {
            return res.status(400).json({message:"user already exist"})
        }

        // ========= 3rd Step === hash Password ======

        const hashPassword = await bcrypt.hash(password,15)





    } catch (error) {
        return res.status(500).json({message:"Intarnel server Error"});
    }
}