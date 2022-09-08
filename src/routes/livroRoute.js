const express = require('express');
const router = express.Router();

const controller = require('../controller/livroController');

router.get('/', controller.get);
router.get('/:cod', controller.getByCod);
router.post('/', controller.post);
router.put('/', controller.put);
router.delete('/:cod', controller.del);

module.exports = router;