const model = require("./filmsModel");

exports.getAll = function () {
     // return "estou listando os filmes..."
     return model.findAll();
};

exports.getById = function (id) {
     return model.findBypk(id);
};

exports.create = function (obj) {
     return model.create(obj);
}

exports.update = function (id, obj) {
     return model.update(obj, {
       where: {
          Filme_id: id
        }
     }); 
 };


 exports.delete = function (id) {
     return model.destroy(id)
 };