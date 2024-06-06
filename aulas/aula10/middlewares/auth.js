const jwt = require('jsonwebtoken');

function validarToken(req, res, next) {
    const token = req.headers['authorization'];
    if (token) {
        const payload = jwt.verify(token, process.env.SEGREDO);
        if (payload) {
            console.log(payload);
            next();
        } else {
            res.status(401).json({msg: 'Acesso negado'})
        }
    } else {
        res.status(400).json({msg: 'Token inválido'});
    }
}

module.exports = validarToken