import { type Request } from "express";
import { type Response } from "express";
import things from "../data/things.js";

const thingsController = (req: Request, res: Response) => {
  res.status(200).json({ things });
};

export default thingsController;
