import axios from "axios";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import connectToMongoDB from "./config/db";
import userRoutes from "./appRoutes/userRoutes";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const startServer = async () => {
  await connectToMongoDB();

  app.use("/api", userRoutes);
  app.listen(port, () => {
    console.log(`listening server on port ${port}`);
  });
};

startServer();
