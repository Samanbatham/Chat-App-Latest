import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // Specify the folder where images will be stored in Cloudinary
    format: async (req, file) => "jpg", // File format (optional)
    public_id: (req, file) => file.originalname.split(".")[0],
    transformation: [{ width: 96, height: 96, crop: "fill" }],
  },
});

const upload = multer({ storage: storage });

export default upload;
