import { Router } from "express";
import getThingsAlreadyKnow from "../controllers/getThingsAlreadyKnow.js";
import getThingAlreadyKnowById from "../controllers/getThingsAlreadyKnowById.js";

// eslint-disable-next-line new-cap
export const thingsRouter = Router();

thingsRouter.get("/", getThingsAlreadyKnow);
thingsRouter.get("/:id", getThingAlreadyKnowById);
