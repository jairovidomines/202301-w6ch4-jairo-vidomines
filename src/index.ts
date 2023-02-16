import "./loadEnvironment.js";
import express from "express";

const app = express();

const port = process.env.PORT ?? 4001;

app.get("/", (req, res) => {
  res.json({});
});

app.listen(port);
