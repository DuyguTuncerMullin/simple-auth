import express, { Request, Response } from "express";

import UserModel, { IUser } from "../models/userModels";

const router = express.Router();

router.get("/users", async (req: Request, res: Response) => {
  const users = await UserModel.find({});
  console.log(users);
  res.send(users);
});
export default router;
