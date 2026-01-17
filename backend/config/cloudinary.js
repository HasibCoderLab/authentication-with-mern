import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

cloudinary.config({
       cloud_name: process.env.COULDINARY_COULD_NAME, 
        api_key: process.env.COULDINARY_API_KEY, 
        api_secret:process.env.COULDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadImage = async (filePath) =>{
    try {
        fs.unlinkSync(filePath)
        let result = cloudinary.uploader.upload(filePath);
        console.log(result);
        return (await result).secure_url
        
    } catch (error) {
        fs.unlinkSync(filePath);
        console.log(error);
        
    }
}