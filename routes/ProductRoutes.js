const productController = require('../controller/ProductController');
const router = require('express').Router();

// Create
router.post('/', productController.createProduct);

// Read
router.get('/', productController.readProduct);
router.get('/:cedula', productController.readProduct);

// Update
router.put("/:id", productController.updateProduct);

// Delete
router.delete("/:id", productController.deleteProduct);

module.exports = router;