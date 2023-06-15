const express = require("express");
const routes = express.Router();

app.get("/", (req, res) => {
  res.render("index", {
    title: "My Express App",
    message: "Hello",
  });
});

module.exports = routes;
