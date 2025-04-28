const express = require('express');
const { CityController } = require('../../controllers');

const router = express.Router()

router.post('/city', CityController.createCity)
router.get('/city/:id', CityController.getCity)
router.patch('/city/:id', CityController.updateCity)
router.delete('/city/:id', CityController.deleteCity)
router.get('/getAllCities', CityController.getAllCities)

module.exports = router