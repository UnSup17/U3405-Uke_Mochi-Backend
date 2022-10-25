const express = require('express');
const router = express.Router();

const Usuario = require('../model/Usuario')

router.get('/', async(req,res) => {
    try {
        const arrayUsuariosDB = await Usuario.find();
        res.send({
            arrayUsuarios:arrayUsuariosDB
        })
    } catch (error) {
        console.log(error);
    }
})

router.post('/crear', async(req,res) => {
    const body = req.body;
    console.log('Creando nueva usuario:');
    console.log(body)
    try {
        const usuarioDB = new Usuario(body);
        await usuarioDB.save();
        res.status(200).send(usuarioDB);
    } catch (error) {
        console.log('error', error);
    }
})

module.exports = router;