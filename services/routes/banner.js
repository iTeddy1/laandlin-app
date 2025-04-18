const express = require('express');
const router = express.Router();
const controller = require('../controllers/BannerController.js');

const { validateToken } = require('../middlewares/VerifyJWT');
const { verifyRoles } = require('../middlewares/VerifyRoles');

router.get('/', controller.getAllBanners);
router.get('/:id', controller.getBannerById);

router.post('/', validateToken, verifyRoles(['admin', 'manager']), controller.addBanner);
router.patch('/:id', validateToken, verifyRoles(['admin', 'manager']), controller.updateBanner);
router.delete('/:id', validateToken, verifyRoles(['admin', 'manager']), controller.deleteBanner);

module.exports = router;
