const express = require('express');
const games = require('../games/games-model.js');

const server = express();

server.use(express.json());


server.post('/games', async (req, res) => {
    try{
        const game = await games.insert(req.body);

        res.status(201).json(game);
    } catch (error) {
        res.status(500).json({ error });
    }
});

server.get('/', async (req, res) => {
    const rows = await games.getAll();

    res.status(200).json(rows);
});

module.exports = server;