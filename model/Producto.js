const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre:         { type: String, maxLength: 50,  required: true, unique: true },
    tipo:           { type: String, maxLength: 50,  required: true },
    cantidad:       { type: Number,                 required: true },
    marca:          { type: String, maxLength: 60,  required: true },
    descripcion:    { type: String, maxLength: 300, required: true },
    precio:         { type: Number,                 required: true },
    keywords:       { type: String, maxLength: 20,  required: true },
    disponibilidad: { type: Boolean,                required: true },
    url_image:      { type: String,                 required: true }
});

// crear modelo
const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;