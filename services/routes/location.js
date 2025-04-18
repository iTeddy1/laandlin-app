const express = require('express');
const router = express.Router();

const { verifyRoles } = require("../middlewares/VerifyRoles");
const { validateToken } = require("../middlewares/VerifyJWT");

const controller = require('../controllers/LocationController.js');

router.get('/', controller.getAllLocations);
router.get('/:id', controller.getLocationById);
router.post('/', validateToken, verifyRoles(['admin', 'manager']), controller.addLocation);
router.patch('/:id', validateToken, verifyRoles(['admin', 'manager']), controller.updateLocation);
router.delete('/:id', validateToken, verifyRoles(['admin', 'manager']), controller.deleteLocation);

module.exports = router;
