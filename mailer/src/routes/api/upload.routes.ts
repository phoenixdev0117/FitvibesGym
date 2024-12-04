import { Router } from "express";
import uploadController from "../../controllers/upload.controller";
import { auth } from "../../middlewares/auth.middleware";
import { uploadImage } from "../../middlewares/upload.middleware";

const route = Router();

route.post("/avatar", auth, uploadImage, uploadController.uploadAvatar);

export default route;
