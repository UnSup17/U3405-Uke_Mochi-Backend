const productModel = require('../model/ProductModel');
const productController = {};

// Create
productController.createProduct = async ({ body }, res) => {
    await productModel(body).save(function (err) {
        return res.status(err ? 422 : 201).send(err || body);
    })
}

// Read
productController.readProduct = async (req, res) => {
    const { id } = req.query.id
        ? req.query : req.params;
    await productModel.find(id && { _id: id })
        .then((productFound) => res.status(productFound.length > 0 ? 200 : 404)
            .send(productFound.length > 0 ? productFound : "No Data Found"))
        .catch((error) => res.status(400).send("Bad Request. " + error));
}
productController.filterProductCategory = async (req, res) => {
    const { category } = req.query.category
        ? req.query : req.params;
    console.log(category);
    await productModel.find(category && { tipo: category })
        .then((productFound) => res.status(productFound.length > 0 ? 200 : 404)
            .send(productFound.length > 0 ? productFound : "No Data Found"))
        .catch((error) => res.status(400).send("Bad Request. " + error));
    console.log(category);
}

// Update
productController.updateProduct = async (req, res) => {
    await productModel.findOneAndUpdate(
        { _id: req.params.id }, req.body, { new: true })
        .then((productModified) => res.status(productModified ? 200 : 400)
            .send(productModified ? req.body : "Update failed"))
        .catch((error) => res.status(400).send("Bad Request. " + error));
}

// Delete
productController.deleteProduct = async ({ params: { id } }, res) => {
    await productModel.findByIdAndDelete({ _id: id })
        .then((productDeleted) => res.status(productDeleted ? 200 : 400)
            .send(productDeleted || "Delete failed"))
        .catch((error) => res.status(400).send("Bad Request. " + error));
}

module.exports = productController;