const userController = require('../controller/UserController');
const router = require('express').Router();

// Create
router.post('/', userController.createUser);

// Read
router.get('/', userController.readUser);
router.get('/:cedula', userController.readUser);

// Update
router.put("/:id", userController.updateUser);

// Delete
router.delete("/:id", userController.deleteUser);

module.exports = router;