const express = require('express');

const games = require('../games/games-model.js');

const server = express();

server.use(express.json());

// write endpoints here


module.exports = server;