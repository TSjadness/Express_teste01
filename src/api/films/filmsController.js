const express = require('express');
const router  = express.Router();
const service = require("./filmsService");


router.get("/" , (req,res) => {
    service.getAll().then((films) => {
        res.send(films);
    })
} );

router.get("/:id" , (req,res) => {
    service.getById(req.params.id).then((film) => {
        res.send(film);
    })
} );

router.post("/" , (req,res) => {
    service.create(req.body);
    res.send("O filme foi criado com sucesso!");
} );



router.put("/:id" , (req,res) => {
    service.update(req.params.id,req.body)
    res.send('alterando filmes!');
} );

router.delete("/:id" , (req,res) => {
    service.delete(req.params.id);
    res.send('deletando filmes!');
} );


module.exports = router;