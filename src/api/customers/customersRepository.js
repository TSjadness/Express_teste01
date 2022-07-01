const model = require("./customersModel");

exports.getAll = function () {
     return model.findAll();
};