import { Request, Response } from "express";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

import { validateEmail } from "../validations";
import {
  createAccessToken,
  createActivationToken,
  createRefreshToken,
} from "../services/jwt";
import sendMail from "../services/sendMail";

import Users from "../models/users.model";
import {
  BUILD_MODE,
  ACTIVATION_TOKEN_SECRET,
  CLIENT_URL,
  REFRESH_TOKEN_SECRET,
  SMTP_MODE,
} from "../config";
import { UserJwtPayload } from "../types/jwt.type";

const userController = {
  register: async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    try {
      if ( !email || !password)
        return res.status(400).json({ msg: "Please fill in all fields." });

      if (!validateEmail(email))
        return res.status(400).json({ msg: "Invalid emails." });

      const user = await Users.findOne({ email });
      if (user)
        return res.status(400).json({ msg: "This email already exists." });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password must be at least 6 characters." });

      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = {
        name,
        email,
        password: passwordHash,
      };

      const activation_token = createActivationToken(newUser);

      const url = `${CLIENT_URL}/activate/${activation_token}`;

      console.log(`userController => regiter =>
        {
          name: "${name}",
          email: "${email}",
          passwordHash: "${passwordHash}",
          activation_token: "${activation_token}",
          url: "${CLIENT_URL}/activate/...",
        }`);
      
        console.log("SMTP_MODE: ", SMTP_MODE);

      if (SMTP_MODE === "available") {
        // sendMail(email, url);

        res.json({
          msg: "Register Success! Please activate your email to start.",
        });
      } else {
        try {
          const user = <UserJwtPayload>(
            jwt.verify(activation_token, ACTIVATION_TOKEN_SECRET)
          );
          const { name, email, password } = user;
    
          const check = await Users.findOne({ email });
          if (check)
            return res.status(400).json({ msg: "This email already exists." });
    
          const newUser = new Users({
            name,
            email,
            password,
          });
    
          await newUser.save();
    
          res.json({ msg: "Account has been activated!", refreshtoken: activation_token });
        } catch (err: any) {
          return res.status(500).json({ msg: err.message });
        }
      }
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }

  },
  mailer: async (req: Request, res: Response) => {
    const { to, date, classNum, seatsList } = req.body;
    console.log("to ======>>>>> ", to);
    console.log("txt ======>>>>> ", date);
    const result = await sendMail(to, date, classNum, seatsList);
    console.log("result ======>>>>> ", result); 
    res.json({aa:"asf"});
  },
  activateEmail: async (req: Request, res: Response) => {
    const { activation_token } = req.body;
    console.log("activation_token ======>>>>> ", activation_token);
    try {
      const user = <UserJwtPayload>(
        jwt.verify(activation_token, ACTIVATION_TOKEN_SECRET)
      );
      const { name, email, password } = user;

      const check = await Users.findOne({ email });
      if (check)
        return res.status(400).json({ msg: "This email already exists." });

      const newUser = new Users({
        name,
        email,
        password,
      });

      await newUser.save();

      res.json({ msg: "Account has been activated!" });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await Users.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({ msg: "The email/password you entered is incorrect." });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res
          .status(400)
          .json({ msg: "The email/password you entered is incorrect." });

      const refresh_token = createRefreshToken({ id: user._id });
      // res.cookie("refreshtoken", refresh_token, {
      //   httpOnly: true,
      //   path: "/api/users/refresh_token",
      //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      // });

      res.json({ msg: "Login success!", refresh_token: refresh_token });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAccessToken: (req: Request, res: Response) => {
    try {
      const rf_token = req.body.refresh_token;
      if (!rf_token) return res.status(400).json({ msg: "Please login now!" });
      jwt.verify(rf_token, REFRESH_TOKEN_SECRET, (err: any, user: any) => {
        if (err) {
          return res.status(400).json({ msg: "Not verified. Please login now!" });
        }
        const access_token = createAccessToken({ id: user.id });
        res.json({ access_token });
      });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  forgotPassword: async (req: Request, res: Response) => {
    try {
      const { email } = req.body;
      const user = await Users.findOne({ email });
      if (!user)
        return res.status(400).json({ msg: "This email does not exist." });

      const access_token = createAccessToken({ id: user._id });
      const url = `${CLIENT_URL}/reset/${access_token}`;

      // sendMail(email, url);
      res.json({ msg: "Re-send the password, please check your email." });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  resetPassword: async (req: Request, res: Response) => {
    try {
      const { password } = req.body;
      console.log("password: ", password);
      const passwordHash = await bcrypt.hash(password, 12);

      await Users.findOneAndUpdate(
        { _id: (<any>req).user.id },
        {
          password: passwordHash,
        }
      );
      res.json({ msg: "Password successfully changed!" });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUserInfor: async (req: Request, res: Response) => {
    try {
      const user = await Users.findById((<any>req).user.id).select("-password");
      res.json(user);
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUsersAllInfor: async (req: Request, res: Response) => {
    try {
      const users = await Users.find().select("-password");

      res.json(users);
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req: Request, res: Response) => {
    console.log("userController => logout => ", req, res);
    try {
      // res.clearCookie("refreshtoken", { path: "/api/users/refresh_token" });
      return res.json({ msg: "Logged out." });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateUser: async (req: Request, res: Response) => {
    try {
      const { name, email, avatar } = req.body;
      await Users.findOneAndUpdate(
        { _id: (<any>req).user.id },
        { name, email, avatar }
      );
      res.json({ msg: "Update Success!" });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateUsersRole: async (req: Request, res: Response) => {
    try {
      const { role } = req.body;
      await Users.findOneAndUpdate(
        { _id: req.params.id },
        {
          role,
        }
      );
      res.json({ msg: "Update Success!" });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteUser: async (req: Request, res: Response) => {
    try {
      await Users.findByIdAndDelete(req.params.id);
      res.json({ msg: "Deleted Success!" });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
export default userController;
