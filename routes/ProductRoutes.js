const productController = require('../controller/ProductController');
const router = require('express').Router();

// Create
router.post('/', productController.createProduct);

// Read
router.get('/', productController.readProduct);
router.get('/:id', productController.readProduct);
router.get('/tipo/:category', productController.filterProductCategory)

// Update
router.put("/:id", productController.updateProduct);

// Delete
router.delete("/:id", productController.deleteProduct);

module.exports = router;