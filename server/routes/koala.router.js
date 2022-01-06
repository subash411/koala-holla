const { Router } = require('express');
const express = require('express');
const koalaRouter = express.Router();
const pool = require('../modules/pools');

// DB CONNECTION


// GET
// GET /songs endpoint
// should return an array of song objects
// from the database
koalaRouter.get('/', (req, res) => {
    // Make a SQL query as a string
    const queryText = 'SELECT * FROM "koala_hola";';

    // Send the SQL query to the database
    // This is asynchronous! It is a network request, like AJAX.
    pool.query(queryText)
        .then((dbRes) => {
            // This function is called when
            // the database query is complete
            // Send the data back to the client
            res.send(dbRes.rows);
        })
        .catch((err) => {
            console.log('GET /koalas failed', err);

            // Tell the client that it failed
            res.sendStatus(500);    
        });
});

// POST


// PUT
koalaRouter.put('/:id', (req, res) => {
    console.log('id is ', req.params.id);
    console.log('req.body is ', req.body);
    let queryParams = [req.params.id];
    let queryText = `
    UPDATE "koala_hola"
        SET "ready_to_transfer" = TRUE
        WHERE "id" = ${queryParams};
    `;
    console.log(queryText);
    console.log(queryParams);
    pool.query(queryText)
    .then((dbRes) => {
        res.sendStatus(204);
    })
    .catch((err) => {
        console.log('PUT /koalas failed ', err);
    })
})

// DELETE

module.exports = koalaRouter;