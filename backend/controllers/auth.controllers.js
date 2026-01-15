import User from "../model/user.model.js";
import bcrypt from "bcryptjs"
export const signUp = async (req, res) => {
    try {
        const { firstname, lastname, userName, email, password } = req.body;

        if (!firstname, !lastname, !userName, !email, !password) {
            return res.status(400).json({ message: "send all details" })

        }

        // ========= 2nd Step === check have a user in DB ======
        let existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "user already exist" })
        }

        // ========= 3rd Step === hash Password ======
        const hashPassword = await bcrypt.hash(password, 15)

        // ========= 4th Step ===User Create ======

        const user = await User.create({
            firstname, lastname, userName, email,
            password: hashPassword
        });
// ========== 5th  user Info ============
        return res.status(201).json({
            user: {
                firstname, lastname, userName, email,
            }
        });


    } catch (error) {
        return res.status(500).json({ message: "Intarnel server Error" });
    }
}