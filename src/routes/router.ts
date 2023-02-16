import { Router } from "express";
import thingsController from "../controllers/thingsControllers.js";
import thingsByIdControllers from "../controllers/thingsByIdControllers.js";
import thingsDeleteControllers from "../controllers/thingsDeleteControllers.js";

// eslint-disable-next-line new-cap
export const thingsRouter = Router();

thingsRouter.get("/", thingsController);
thingsRouter.get("/:id", thingsByIdControllers);
thingsRouter.delete("/:id", thingsDeleteControllers);
