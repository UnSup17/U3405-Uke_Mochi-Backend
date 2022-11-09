const productCategoryModel = require('../model/ProductCategoryModel');
const productCategoryController = {};

// Create
productCategoryController.createProductCategory = async ({ body }, res) => {
    await productCategoryModel(body).save(function (err) {
        return res.status(err ? 422 : 201).send(err || body);
    })
}

// Read
productCategoryController.readProductCategory = async (req, res) => {
    const { category } = req.query.category
        ? req.query : req.params;
    await productCategoryModel.find(category && { category })
        .then((productCategoryFound) => res.status(productCategoryFound.length > 0 ? 200 : 404)
            .send(productCategoryFound.length > 0 ? productCategoryFound : "No Data Found"))
        .catch((error) => res.status(400).send("Bad Request. " + error));
}

// Update
productCategoryController.updateProductCategory = async (req, res) => {
    await productCategoryModel.findOneAndUpdate(
        req.params.category, req.body, { new: true })
        .then((categoryModified) => 
            res.status(categoryModified ? 200 : 400)
            .send(categoryModified ? req.body : "Update failed"))
        .catch((error) => res.status(400).send("Bad Request. " + error));
}

// Delete
productCategoryController.deleteProductCategory = async ({ params: { category } }, res) => {
    await productCategoryModel.findOneAndDelete({ category })
        .then((productCategoryDeleted) => res.status(productCategoryDeleted ? 200 : 400)
            .send(productCategoryDeleted || "Delete failed"))
        .catch((error) => res.status(400).send("Bad Request. " + error));
}

module.exports = productCategoryController;