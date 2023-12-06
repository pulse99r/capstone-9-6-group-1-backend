//app.js

const express = require("express");
require("dotenv").config()
const cors = require("cors");
const morgan = require("morgan");

const app = express();

/* - - - CONTROLLERS - - - */

const postsController = require("./controllers/postsController");
const commentsController = require("./controllers/commentsController");
const articlesController = require("./controllers/articlesController");

app.use(cors({
  origin:"https://localhost:3000"
}));
app.use(express.json());
app.use(morgan("dev"));

/* - - - ROUTES - - - */

app.use("/posts", postsController);
app.use("/comments", commentsController);
app.use("/articles", articlesController);

app.get("/", (req, res) => {
  res.send("Welcome To Reflections");
});

/* - - - 404 - - - */

app.get("*", (req, res) => {
  return res.status(404).json({
    Error: "GET request unsuccessful.",
    message: "Page Not Found! Please try again.",
  });
});

module.exports = app;






