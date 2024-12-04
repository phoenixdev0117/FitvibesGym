import { Request, Response, NextFunction } from "express";
import fs from "fs";

export const uploadImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!(<any>req).files || Object.keys((<any>req).files).length === 0)
      return res.status(400).json({ msg: "No files were uploaded." });

    const file = (<any>req).files.file;

    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Size too large." });
    } // 1mb

    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "File format is incorrect." });
    }

    next();
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};

const removeTmp = (path: any) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};
