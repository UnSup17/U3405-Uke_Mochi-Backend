const express = require('express');
const router = express.Router();

const Producto = require('../model/Producto')

router.get('/', async(req,res) => {
    try {
        const arrayProductosDB = await Producto.find();
        res.send({
            arrayProductos:arrayProductosDB
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/marca')

router.post('/crear', async(req,res) => {
    const body = req.body;
    console.log('Creando nueva producto:');
    console.log(body)
    try {
        const productoDB = new Producto(body);
        await productoDB.save();
        res.status(200).send(productoDB);
    } catch (error) {
        console.log('error', error);
    }
})

module.exports = router;