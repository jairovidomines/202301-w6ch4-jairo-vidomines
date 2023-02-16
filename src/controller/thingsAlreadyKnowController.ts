import { type Request } from "express";
import { type Response } from "express";
import thingsAlreadyKnow from "../data/thingsAlreadyKnow.js";

const thingsAlreadyKnowController = (req: Request, res: Response) => {
  res.status(200).json({ thingsAlreadyKnow });
};

export default thingsAlreadyKnowController;
