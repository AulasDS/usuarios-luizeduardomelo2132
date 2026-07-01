const Usuario = require("../models/usuario")
const bcrypt = require('bcrypt');
const jwb = require('jsonwebbtoken');

class AuthController {
    static async registrar(req, res) { 
        try {
            const { email, senha } =req.body;
        
            const userExists = await Usuario.findOne({ email });
            if (userExists) return res.status(400).json(message:'E-mail ja cadastrado.');

            const salt = await bcrypt.genSalt(12);
            const senhaHash = await bcrypt.hash(senha, salt);

            const 

        }
    }
};

