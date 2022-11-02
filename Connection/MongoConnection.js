const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.kehrrvp.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

const conectar = async () => {
    mongoose.connect(uri,
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log('DB connected'))
        .catch(e => console.log(e));
}
conectar();

module.exports = mongoose;