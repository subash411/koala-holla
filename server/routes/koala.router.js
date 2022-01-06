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


// DELETE

module.exports = koalaRouter;