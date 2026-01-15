import generateToken from "../config/token.js";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs"
export const signIn = async (req, res) => {
    try {

        const { firstname, lastname, userName, email, password } = req.body;
        if (!firstname || !lastname || !userName || !email || !password) {
            return res.status(400).json({ message: "send all details" });
        }
        // ========= 2nd Step === check have a user in DB ======
        let exsitUser = await User.findOne({ email });
        if (exsitUser) {
            return res.status(400).json({ message: "User already exist" });
        }
        // ========= 3rd Step === hash Password ======
        const hashPassword = await bcrypt.hash(password, 15);

        // ============ 4th step user create ==== 
        const user = await User.create({
            firstname, lastname, userName, email,
            password: hashPassword
        });

        //  ============== 5th fun  for  generate Token =========== 
        let token = generateToken(user._id);

        // ========== 5th  user Info ============
        return res.status(201).json({
            user: {
                firstname, lastname, userName, email,
            }
        });


    } catch (error) {
        return res.status(400).json({ message: "Internal Servel Error" });
    }
} 