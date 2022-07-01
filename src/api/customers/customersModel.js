const Sequelize = require('sequelize');
const sequelize = require('../../database/sequelize');

const Customer = sequelize.define("customer", {
    customer_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncremente: true },
    store_id: { type: Sequelize.STRING },
    first_name: { type: Sequelize.STRING },
    last_name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    address_id: { type: Sequelize.STRING },
    activebool: { type: Sequelize.STRING },
    create_date: { type: Sequelize.STRING },
    last_update: { type: Sequelize.STRING },
    active: { type: Sequelize.STRING },
});

module.exports = Customer;