const express = require('express');
const router = express.Router();
const gigController = require('../controller/travel.controller');

router.post('/', gigController.addTravel);
router.get('/', gigController.findTravels);
router.get('/:ProudID', gigController.findTravelById);
router.put('/:ProudID', gigController.updateTravel);
router.delete('/:ProudID', gigController.deleteById);

module.exports = router;