const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    codigo:         { type: String,                 required: true, unique: true },
    nombre:         { type: String, maxLength: 50,  required: true, unique: true },
    tipo:           { type: String, maxLength: 50,  required: true },
    cantidad:       { type: Number,                 required: true },
    marca:          { type: String, maxLength: 60,  required: true },
    descripcion:    { type: String, maxLength: 300, required: true },
    precio:         { type: Number,                 required: true },
    keywords:       { type: String, maxLength: 100, required: true },
    disponibilidad: { type: Boolean,                required: true },
    url_image:      { type: String,                 required: true }
});

module.exports = mongoose.model('Product', productSchema);