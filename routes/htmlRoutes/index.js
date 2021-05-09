const express = require('express');
const htmlRouter = express.Router();
const path = require('path');

htmlRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

htmlRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

htmlRouter.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = htmlRouter;