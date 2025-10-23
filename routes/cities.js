const express = require("express");
const router = express.Router();
const citiesController = require("../controllers/citiesController");

router.get("/cities", citiesController.getCities);
router.get("/cities/:id", citiesController.getCityById);
router.post("/cities", citiesController.createCity);
router.delete("/cities/:id", citiesController.deleteCity);

 router.all("*",citiesController.pageNotFound);

module.exports = router;
