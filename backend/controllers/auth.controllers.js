export const signUp = async (req,res) =>{
    try {
        const {firstname,lastname,userName,email,password} = req.body
    } catch (error) {
        return res.status(500).json({message:"Intarnel server Error"});
    }
}