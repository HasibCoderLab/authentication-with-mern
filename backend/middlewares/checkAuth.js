import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "User is not authenticated" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;

        console.log("Token:", token);
        console.log("Req UserId:", req.userId);

        next();
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
};
