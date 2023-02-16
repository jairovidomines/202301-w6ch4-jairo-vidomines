import "./loadEnvironment.js";
import express from "express";
import getThingsAlreadyKnow from "./controllers/getThingsAlreadyKnow.js";
import getThingAlreadyKnowById from "./controllers/getThingsAlreadyKnowById.js";

const app = express();
const port = process.env.PORT ?? 4001;

app.get("/things", getThingsAlreadyKnow);
app.get("/things/:id", getThingAlreadyKnowById);

app.listen(port);
