import { Router } from "express";
import usersRoute from "./api/users.routes";
import uploadRoute from "./api/upload.routes";

const route = Router();
route.use("/user", usersRoute);
route.use("/upload", uploadRoute);

export default route;
