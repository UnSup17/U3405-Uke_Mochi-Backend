const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
    category: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('ProductCategory', productCategorySchema);