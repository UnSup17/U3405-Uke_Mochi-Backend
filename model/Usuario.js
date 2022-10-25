const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    email:      { type: String,                required: true, unique: true },
    cedula:     { type: Number,                required: true, unique: true },
    nombre:     { type: String, maxLength: 50, required: true },
    apellido:   { type: String, maxLength: 50, required: true },
    nickname:   { type: String, maxLength: 20, required: true },
    direccion:  { type: String, maxLength: 60, required: true },
    telefono:   { type: String, maxLength: 15, required: true }
});

// crear modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;