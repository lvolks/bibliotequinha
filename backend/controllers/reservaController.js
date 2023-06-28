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
        reserva.livro = livro._id;

        const resultado = await reservaModel.create(reserva);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await reservaModel.find({ 'usuarioId': req.params.usuarioId });
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res) {
        const { codigo } = req.params;
        const resultado = await reservaModel.findOne({ codigo }).populate('usuario livro');
        res.status(200).json(resultado);
    }

    async editar(req, res) {
        const { codigo } = req.params;
        const resultado = await reservaModel.findOneAndUpdate({ codigo }, req.body);
        res.status(200).json({
            sucesso: true
        });
    }
}

module.exports = new ReservaController();

