import { type Request } from "express";
import { type Response } from "express";
import thingsAlreadyKnow from "../data/thingsAlreadyKnow.js";

const getThingAlreadyKnowById = (req: Request, res: Response) => {
  const { id } = req.params;
  const getThingAlreadyKnow = thingsAlreadyKnow.find(
    (thing) => thing.id === +id
  );
  res.status(200).json({ getThingAlreadyKnow });
};

export default getThingAlreadyKnowById;
