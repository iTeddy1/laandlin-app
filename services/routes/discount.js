const express = require('express');
const router = express.Router();

const { verifyRoles } = require("../middlewares/VerifyRoles");
const { validateToken } = require("../middlewares/VerifyJWT");

const controller = require('../controllers/DiscountController.js');

router.get('/', validateToken, verifyRoles(['admin', 'manager']), controller.getAllDiscounts);
router.get('/:code', validateToken, verifyRoles(['admin', 'manager']), controller.getDiscountByCode);
router.post('/', validateToken, verifyRoles(['admin', 'manager']), controller.addDiscount);
router.patch('/:code', validateToken, verifyRoles(['admin', 'manager']), controller.updateDiscount);
router.delete('/:code', validateToken, verifyRoles(['admin', 'manager']), controller.deleteDiscount);

module.exports = router;
