const express = require('express');
const router = express.Router();

const destinationCtrl = require('../controllers/destinations');

router.post('/flights/:id', destinationCtrl.create);

module.exports = router;