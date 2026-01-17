import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
    try {
        let token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "user is not authenticated" });
        }
        let decord = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decord.id;

        console.log("Token:", req.cookies.token);
        console.log("Req User:", req.user);

        next()
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error })
    }
}