const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 "postgres://postgres:futebol2015@localhost:5432/dvdrental",
    { 
     define: {
          freezeTableName: true,
          timestamps: false,
        },
    },
 );

const Film = sequelize.define("film", {
    film_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncremente: true},
    title: {type: Sequelize.STRING},
    description: {type: Sequelize.STRING},
    release_year: {type: Sequelize.STRING},
    language_id: {type: Sequelize.STRING},
    rental_duration: {type: Sequelize.STRING},
    rental_rate: {type: Sequelize.STRING},
    length: {type: Sequelize.STRING},
    replacement_cost: {type: Sequelize.STRING},
    rating: {type: Sequelize.STRING},
    last_update: {type: Sequelize.STRING},
    special_features: {type: Sequelize.ARRAY(Sequelize.STRING)},
    fulltext: {type: Sequelize.STRING},
});

module.exports = Film;