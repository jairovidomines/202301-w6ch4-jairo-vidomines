import { type Request } from "express";
import { type Response } from "express";
import things from "../data/things.js";

const thingsByIdControllers = (req: Request, res: Response) => {
  const { id } = req.params;
  const thingById = things.find((thing) => thing.id === +id);
  res.status(200).json({ thingById });
};

export default thingsByIdControllers;
