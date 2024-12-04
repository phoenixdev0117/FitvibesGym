import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../config";
import Users from "../models/users.model";
import { userType } from "../types/user.type";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(400).json({ msg: "Invalid Authentication." });

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: "Invalid Authentication." });

      (<any>req).user = user;
      next();
    });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};

export const authAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: userType | null = await Users.findOne({
      _id: (<any>req).user.id,
    });
    if (user && user.role !== 1)
      return res.status(500).json({ msg: "Admin resources access denied." });
    next();
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};
