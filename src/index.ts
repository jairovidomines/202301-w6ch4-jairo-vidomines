import "./loadEnvironment.js";
import express from "express";

const app = express();

const port = process.env.PORT ?? 4001;

app.get("/things", (req, res) => {
  res.status(200).json({ pong: true });
});

app.listen(port);
