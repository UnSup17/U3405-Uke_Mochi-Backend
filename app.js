const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('dotenv').config();

const port = process.env.PORT || 3000;

// Conexion a base de datos
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.kehrrvp.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true}
)   .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e));

// Rutas web
app.use('/productos', require('./router/Productos'));
app.use('/usuarios',  require('./router/Usuarios'));

app.listen(port, () => {
    console.log('Example app listening at http://localhost:', port);
})