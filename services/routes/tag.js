const express = require('express');
const {verifyRoles} = require('../middlewares/VerifyRoles');
const router = express.Router();
const controller = require('../controllers/TagController');
const { validateToken } = require('../middlewares/VerifyJWT');

router.get('/:id', controller.getTagById);
router.get('/name/:name', controller.getTagByName);
router.patch('/:name', validateToken, verifyRoles(['admin', 'manager']), controller.updateTag);
router.delete('/:name', validateToken, verifyRoles(['admin', 'manager']), controller.deleteTag);
router.post('/', validateToken, verifyRoles(['admin', 'manager']), controller.addTag);
router.get('/', controller.getAllTags);

module.exports = router;
