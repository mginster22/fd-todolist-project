const express = require("express");
const app = express();
const router = require("./routers");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api", router);
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

module.exports = app;
