// Importaciones
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./Connection/MongoConnection');

// Configuración
const app = express();
const port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Rutas web
app.get('/', (req, res) => { res.send('API iniciado'); })
app.use('/products', require('./routes/ProductRoutes'));
app.use('/productcategory', require('./routes/ProductCategoryRoutes'));
app.use('/users', require('./routes/UserRoutes'));

// Arranque
app.listen(port, () => {
    console.log('API iniciado en http://localhost:', port);
})