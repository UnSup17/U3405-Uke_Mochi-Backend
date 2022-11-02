const mongoose = require('mongoose');

const userSchema = new  mongoose.Schema({
    email:      { type: String,                required: true, unique: true },
    cedula:     { type: Number,                required: true, unique: true },
    nombre:     { type: String, maxLength: 50, required: true },
    apellido:   { type: String, maxLength: 50, required: true },
    nickname:   { type: String, maxLength: 20, required: true },
    direccion:  { type: String, maxLength: 60, required: true },
    telefono:   { type: String, maxLength: 15, required: true }
});

module.exports = mongoose.model('User', userSchema);
