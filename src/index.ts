import "./loadEnvironment.js";
import express from "express";
import { thingsRouter } from "./routes/router.js";

const app = express();
const port = process.env.PORT ?? 4001;

app.use("/things", thingsRouter);

app.listen(port);
