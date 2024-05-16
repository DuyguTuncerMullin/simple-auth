import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import UserModel, { IUser } from "../models/userModels";

const router = express.Router();

router.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: `error in /users route get request ${error}` });
  }
});

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new UserModel({ name, email, password: hashedPassword });
    await user.save();
    res.send({ user, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ error: `error in /register route post request ${error}` });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    console.log("user", user);

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("isPasswordValid", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate a JWT token //
    const token = jwt.sign({ userId: user._id }, "secret_key", {
      expiresIn: "1h",
    });
    console.log("token", token);

    res.send({ success: true, token });
  } catch (error) {
    res
      .status(500)
      .json({ error: `error in /login route post request ${error}` });
  }
});

export default router;
