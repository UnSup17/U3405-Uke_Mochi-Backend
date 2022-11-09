const productCategoryController = require('../controller/ProductCategoryController');
const router = require('express').Router();

// Create
router.post('/', productCategoryController.createProductCategory);

// Read
router.get('/', productCategoryController.readProductCategory);
router.get('/:category', productCategoryController.readProductCategory);

// Update
router.put("/:category", productCategoryController.updateProductCategory);

// Delete
router.delete("/:category", productCategoryController.deleteProductCategory);

module.exports = router;