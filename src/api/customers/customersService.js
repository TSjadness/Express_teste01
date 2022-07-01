const repository = require("./customersRepository");

exports.getAll = function () {
    return repository.getAll();
};