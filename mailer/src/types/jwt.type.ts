import { Types } from "mongoose";
export interface UserJwtPayload {
  name: string;
  email: string;
  password: string;
}
export interface TokenPayload {
  id: Types.ObjectId;
}
