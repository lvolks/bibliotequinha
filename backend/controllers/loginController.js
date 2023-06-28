const usuarioModel = require('../models/usuarioModel');
const auth = require('../auth/auth');
const bcryptjs = require('bcryptjs');

class LoginController {

    async login(req, res) {
        const { email, senha } = req.body;
        const usuario = await usuarioModel.findOne({ 'email': email }).select('+senha')
        
        if (!usuario) {
            return res.status(400).send({ error: 'Usuário não encontrado!' });
        }

        if (!await bcryptjs.compare(senha, usuario.senha)) {
            return res.status(400).send({ error: 'Senha inválida!' });
        }

        const token = await auth.geraToken(usuario);
        const usr = usuario._doc
        delete usr.senha
        res.status(200).json({
            ...usr,
            token
        });
    }

    async getMe(req, res) {
        const usuario = await usuarioModel.findOne({ codigo: req.userId }).select('-senha')
        
        if (!usuario) {
            return res.status(400).send({ error: 'Usuário não encontrado!' });
        }

        res.status(200).json(usuario);
    }
}

module.exports = new LoginController();
