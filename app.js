const express = require("express");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the My Daily Task API");
});

module.exports = app;
