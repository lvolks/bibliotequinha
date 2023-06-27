const express = require('express');
const router = express.Router();
const generoController = require('../controllers/generoController');

router.get('/', generoController.listar);
router.post('/', generoController.salvar);
router.get('/:codigo', generoController.buscarPorCodigo);
router.put('/:codigo', generoController.atualizar);
router.delete('/:codigo', generoController.excluir);

module.exports = router;