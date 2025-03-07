// IMPORTO EXSPRESS
const express = require('express')
const router = express.Router();

// Importo Contoller
const postsController = require('../controllers/postsController');

// CRUD
// index
router.get('/', postsController.index);

// show
router.get('/:id', postsController.show);

// store
router.post('/', postsController.store);

// update
router.put('/:id', postsController.update);

// modify
router.patch('/:id', postsController.modify);

// destroy
router.delete('/:id', postsController.destroy);

// ESPORTO IL ROUTER
module.exports = router;