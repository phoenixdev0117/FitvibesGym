import { Types } from "mongoose";
export type userType = {
  id?: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: number;
  avatar: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
};
