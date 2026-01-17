import multer from "multer"


const storage = multer.diskStorage({
    destination:(req,file,cd) => {
        cd(null,"./public")
    }
})