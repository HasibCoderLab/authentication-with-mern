import generateToken from "../config/token.js";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs"

// ================== signUp [Api] ============ 
export const signUp = async (req, res) => {
    try {

        const { firstName, lastName, userName, email, password } = req.body;

        if (!firstName || !lastName || !userName || !email || !password) {
            return res.status(400).json({ message: "send all details" });
        }
console.log(req.file);


        // ========= 2nd Step === check have a user in DB ======
        let exsitUser = await User.findOne({ email });
        if (exsitUser) {
            return res.status(400).json({ message: "User already exist" });
        }
        // ========= 3rd Step === hash Password ======
        const hashPassword = await bcrypt.hash(password, 15);

        // ============ 4th step user create ==== 
        const user = await User.create({
            firstName,
            lastName,
            userName,
            email,
            password: hashPassword
        });


        //  ============== 5th fun  for  generate Token =========== 
        let token;
        try {
            token = generateToken(user._id);
        } catch (error) {
            console.log(error);

        }

        // ========= 6th stpe  create cookie ====
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENVIRONMENT == "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        // ========== 5th  user Info ============
        return res.status(201).json({
            user: {
                firstName,
                lastName,
                userName,
                email,
            }
        });



    } catch (error) {
    console.error("SignUp Error: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
}

}




// ================== Login [Api] ============ 

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // ======= 2nd find and check hava a user in DB  ======
        let exsitUser = await User.findOne({ email });
        if (!exsitUser) {
            return res.status(400).json({ message: "user does not exsits" });
        }

        // ====== 3rd  | compare password  ========

        let match = await bcrypt.compare(password, exsitUser.password);
        if (!match) {
            return res.status(400).json({ message: "Incorrect Passsword" })
        }
        // ========= 4th stpe  generateToken  ====


        let token;
        try {
            token = generateToken(exsitUser._id);
        } catch (error) {
            console.log(error);

        }

        // ========= 5th stpe  create cookie ====
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        // ========== 6th  user Info ============
        return res.status(200).json({
            user: {
                firstName: exsitUser.firstName,
                lastName: exsitUser.lastName,
                userName: exsitUser.userName,
                email: exsitUser.email,
            }
        });

    } catch (error) {
    console.error("SignUp Error: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
}

}


// ================== logOut [Api] ============ 

export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "logout successfully" })
    } catch (error) {
    console.error("SignUp Error: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
}

} 
