import { Request, Response } from "express";
import fs from "fs";
import { CLOUD_API_KEY, CLOUD_API_SECRET, CLOUD_NAME } from "../config";
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET,
});

const uploadController = {
  uploadAvatar: async (req: Request, res: Response) => {
    try {
      const file = (<any>req).files.file;

      const result: any = await cloudinary.uploader.upload(
        file.tempFilePath,
        {
          folder: "avatar",
          width: 150,
          height: 150,
          crop: "fill",
        },
        async (err: any, result: any) => {
          if (err) throw err;

          removeTmp(file.tempFilePath);
          return result;
        }
      );
      const url = result.secure_url;
      return res.json({ url });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const removeTmp = (path: any) => {
  fs.unlink(path, (err: any) => {
    if (err) throw err;
  });
};

export default uploadController;
