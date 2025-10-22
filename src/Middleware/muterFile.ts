const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadPath = "src/public/users/avatar";

// Tạo folder nếu chưa tồn tại
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, uploadPath);
  },
  filename: (req: any, file: any, cb: any) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error("Only .jpg, .jpeg, .png files are allowed!"));
  }
  cb(null, true);
};

const uploadImage = multer({
  storage,
  fileFilter,
//   limits: { fileSize: 2 * 1024 * 1024 }, 
});

module.exports = uploadImage;
