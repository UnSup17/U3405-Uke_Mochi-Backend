const userModel = require('../model/UserModel');
const userController = {};

// Create
userController.createUser = async ({ body }, res) => {
    await userModel(body).save(function (err) {
        return res.status(err ? 422 : 201).send(err || body);
    })
}

// Read
userController.readUser = async (req, res) => {
    const { cedula } = req.query.cedula
        ? req.query : req.params;
    await userModel.find(cedula && { cedula })
        .then((userFound) => res.status(userFound.length > 0 ? 200 : 404)
            .send(userFound.length > 0 ? userFound : "No Data Found"))
        .catch((error) => res.status(400).send("Bad Request. " + error));
}

// Update
userController.updateUser = async (req, res) => {
    await userModel.findOneAndUpdate(
        { _id: req.params.id }, req.body, { new: true })
        .then((userModified) => res.status(userModified ? 200 : 400)
            .send(userModified ? req.body : "Update failed"))
        .catch((error) => res.status(400).send("Bad Request. " + error));
}

// Delete
userController.deleteUser = async ({ params: { id } }, res) => {
    await userModel.findByIdAndDelete({ _id: id })
        .then((userDeleted) => res.status(userDeleted ? 200 : 400)
            .send(userDeleted || "Delete failed"))
        .catch((error) => res.status(400).send("Bad Request. " + error));
}

module.exports = userController;