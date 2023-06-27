const generoModel = require('../models/generoModel');

class GeneroController {
    async salvar(req, res) {
        let genero = req.body;
        const max = await generoModel.findOne({}).sort({ codigo: -1 });
        genero.codigo = max == null ? 1 : max.codigo + 1;
        const resultado = await generoModel.create(genero);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await generoModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res) {
        const codigo = req.params.codigo;
        const resultado = await generoModel.findOne({ 'codigo': codigo });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _codigo = String((await generoModel.findOne({ 'codigo': codigo }))._id);
        await generoModel.findByIdAndUpdate(String(_codigo), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;
        const _codigo = String((await generoModel.findOne({ 'codigo': codigo }))._id);
        await generoModel.findByIdAndRemove(String(_codigo));
        res.status(200).send();
    }
}

module.exports = new GeneroController();