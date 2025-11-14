const express = require("express");

const app = express();

app.get("/ping", (req: any, res: any) => {
  res.json({ message: "pong" });
});

module.exports = app;
