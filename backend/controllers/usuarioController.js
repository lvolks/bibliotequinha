const usuarioModel = require('../models/usuarioModel');
const auth = require('../auth/auth');

class UsuarioController {
    async salvar(req, res) {
        let usuario = req.body

        const max = await usuarioModel.findOne({}).sort({ codigo: -1 });
        usuario.codigo = max == null ? 1 : max.codigo + 1;

        if (await usuarioModel.findOne({ 'email': usuario.email })) {
            res.status(400).send({ error: 'Usuario já cadastrado!' });
        }

        const resultado = await usuarioModel.create(usuario);
        auth.incluirToken(resultado);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await usuarioModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res) {
        const codigo = req.params.codigo;
        const resultado = await usuarioModel.findOne({ 'codigo': codigo });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await usuarioModel.findOne({ 'codigo': codigo }))._id);

        const usuario = req.body;

        await usuarioModel.findByIdAndUpdate(String(_id), usuario);
        res.status(200).send();
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await usuarioModel.findOne({ 'codigo': codigo }))._id);

        await usuarioModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new UsuarioController();
