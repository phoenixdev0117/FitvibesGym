import { Router } from "express";
import usersController from "../../controllers/users.controller";
import { auth, authAdmin } from "../../middlewares/auth.middleware";

const route = Router();

route.post("/register", usersController.register);
route.post("/mailer", usersController.mailer);
route.post("/activation", usersController.activateEmail);
route.post("/login", usersController.login);
route.post("/refresh_token", usersController.getAccessToken);
route.post("/forgot", usersController.forgotPassword);
route.post("/reset", auth, usersController.resetPassword);
route.get("/infor", auth, usersController.getUserInfor);
route.get("/all_infor", auth, authAdmin, usersController.getUsersAllInfor);
route.get("/logout", auth, usersController.logout);
route.patch("/update", auth, usersController.updateUser);
route.patch(
  "/update_role/:id",
  auth,
  authAdmin,
  usersController.updateUsersRole
);
route.delete("/delete/:id", auth, authAdmin, usersController.deleteUser);

export default route;
