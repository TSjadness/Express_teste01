const express = require('express');
const films = require('./src/api/films/filmsController.js')
const customers = require('./src/api/customers/customersController.js');
const bodyParser = require('body-parser');

const app = express();
const port = 2000;

app.use(bodyParser.json());
// app.use('/films',films);
app.use('/customers',customers);

app.listen(port, () => {
    console.log("Conectado com sucesso!");
})















// app.get('/' , (req,res) => {
//     res.send(service.getAll());
// } );

// app.get('/films0' , (req,res) => {
//     res.send('sessao de films!');
// } );

// app.put('/films1' , (req,res) => {  // uptade
//     res.send('alterando films!');
// } );

// app.delete('/films2' , (req,res) => {  // delete
//     res.send('adeletando films!');
// } );


