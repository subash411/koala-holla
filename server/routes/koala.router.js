const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST



koalaRouter.post('/', (req, res) => {
    let newKoala =req.body;
    console.log(`Adding koala`, newKoala);
    let queryText = `INSERT INTO "koala_hola" ("name", "age", "gender", "readyForTransfer", "notes")
                     VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [newKoala.name, newKoala.age, newKoala.gender, newKoala.readyForTransfer, newKoala.notes])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log((`Error adding new koala`, error));
        res.sendStatus(500);
    })                 
    
})
// PUT


// DELETE

module.exports = koalaRouter;