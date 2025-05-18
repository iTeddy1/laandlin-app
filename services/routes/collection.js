const express = require('express');
const {verifyRoles} = require('../middlewares/VerifyRoles');
const router = express.Router();
const controller = require('../controllers/CollectionController.js');
const { validateToken } = require('../middlewares/VerifyJWT');

router.get('/slug/:slug', controller.getCollectionBySlug);
router.patch('/:id', validateToken, verifyRoles(['admin', 'manager']), controller.updateCollection);
router.delete('/:id', validateToken, verifyRoles(['admin', 'manager']), controller.deleteCollection);
router.get('/:id', controller.getCollectionById);
router.post('/', validateToken, verifyRoles(['admin', 'manager']), controller.addCollection);
router.get('/', controller.getAllCollections);

module.exports = router;
