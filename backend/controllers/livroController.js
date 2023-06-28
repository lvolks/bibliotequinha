const livroModel = require('../models/livroModel');
const generoModel = require('../models/generoModel');


class LivroController {
    async salvar(req, res) {
        const livro = req.body;
        const max = await livroModel.findOne({}).sort({ codigo: -1 });
        livro.codigo = max == null ? 1 : max.codigo + 1;

        const genero = await generoModel.findOne({ codigo: livro.generoId });
        livro.genero = genero._id;


        const resultado = await livroModel.create(livro);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await livroModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res) {
        const codigo = req.params.codigo;
        const resultado = await livroModel.findOne({ 'codigo': codigo });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _codigo = String((await livroModel.findOne({ 'codigo': codigo }))._id);
        await livroModel.findByIdAndUpdate(String(_codigo), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;
        const _codigo = String((await livroModel.findOne({ 'codigo': codigo }))._id);
        await livroModel.findByIdAndRemove(String(_codigo));
        res.status(200).send();
    }
}

module.exports = new LivroController();