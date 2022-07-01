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

module.exports = sequelize;