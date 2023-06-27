const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');
const auth = require('../auth/auth');

router.use(auth.autorizar);

router.post('/', reservaController.salvar);
router.get('/:clienteId', reservaController.listar);
router.get('/:clienteId/:codigo', reservaController.buscarPorCodigo);

module.exports = router;
