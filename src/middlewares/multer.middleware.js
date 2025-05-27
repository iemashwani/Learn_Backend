import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    const uniqueFileName = `${file.originalname}-${Date.now()}`;
    cb(null, uniqueFileName);
  },
});

export const upload = multer({
  storage,
});
