const reservaModel = require('../models/reservaModel');
const usuarioModel = require('../models/usuarioModel');

class ReservaController {
    async salvar(req, res) {
        const reserva = req.body;
        const max = await reservaModel.findOne({}).sort({ codigo: -1 });
        reserva.codigo = max == null ? 1 : max.codigo + 1;

        const usuario = await usuarioModel.findOne({ codigo: reserva.usuario_id });
        reserva.usuario = usuario.nome;

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

