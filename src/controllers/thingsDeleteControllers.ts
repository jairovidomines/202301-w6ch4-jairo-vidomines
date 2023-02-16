import { type Request } from "express";
import { type Response } from "express";
import things from "../data/things.js";

const thingsDeleteControllers = (req: Request, res: Response) => {
  const { id } = req.params;
  const thingDelete = things.find((thing) => thing.id === +id)!;

  things.splice(things.indexOf(thingDelete), 1);
  res.status(200).json({ things });
};

export default thingsDeleteControllers;
