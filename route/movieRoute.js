const express = require("express");

const movieController = require("../controller/movieController");

const movieRoutes = express.Router();

movieRoutes.get("/add", movieController.add);

module.exports = movieRoutes;