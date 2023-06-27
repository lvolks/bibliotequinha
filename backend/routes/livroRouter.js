const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.get('/', livroController.listar);
router.post('/', livroController.salvar);
router.get('/:codigo', livroController.buscarPorCodigo);
router.put('/:codigo', livroController.atualizar);
router.delete('/:codigo', livroController.excluir);

module.exports = router;