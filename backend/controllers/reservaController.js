const reservaModel = require('../models/reservaModel');
const usuarioModel = require('../models/usuarioModel');
const livroModel = require('../models/livroModel');

class ReservaController {
    async salvar(req, res) {
        const reserva = req.body;
        const max = await reservaModel.findOne({}).sort({ codigo: -1 });
        reserva.codigo = max == null ? 1 : max.codigo + 1;

        const usuario = await usuarioModel.findOne({ codigo: req.userId });
        reserva.usuario = usuario._id;

        const livro = await livroModel.findOne({ _id: reserva.livroId });
        reserva.livro = usuario._id;

        const resultado = await reservaModel.create(reserva);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await reservaModel.find({ 'usuarioId': req.params.usuarioId });
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res) {
        const { usuarioId, codigo } = req.params;
        const resultado = await reservaModel.findOne({ 'codigo': codigo, 'usuarioId': usuarioId });
        res.status(200).json(resultado);
    }
}

module.exports = new ReservaController();

