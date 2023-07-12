var express = require('express');
var router = express.Router();

const ticketsCtrl = require('../controllers/tickets');

router.get('/:id-show', ticketsCtrl.show);

router.get('/:id-new', ticketsCtrl.new);

router.post('/:id', ticketsCtrl.create);

module.exports = router;