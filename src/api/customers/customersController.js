// const Customer = require('./customersModel');
const service = require('./customersService');
const router = require('express').Router();


router.get('/', (req, res) => {
   service.getAll().then(Customers =>{
     res.send(Customers);
   })
});

module.exports = router;


// router.get("/", (req, res) => {
//     service.getAll().then((customers) => {
//         res.send(customers);
//     })
//     // res.send(service.getAll());
// });



