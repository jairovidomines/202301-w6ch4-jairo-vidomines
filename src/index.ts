import "./loadEnvironment.js";
import express from "express";
import thingsAlreadyKnowController from "./controller/thingsAlreadyKnowController.js";

const app = express();
const port = process.env.PORT ?? 4001;

app.get("/things", thingsAlreadyKnowController);

app.listen(port);
