const express = require('express');
const apiRouter = express.Router();
const fs = require('fs');
const path = require('path');

apiRouter.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../../db/db.json'), 'utf8', (err, file) => {
        if (err) throw err;
        return res.send(JSON.parse(file));
    })
});

apiRouter.post('/api/notes', (req, res) => {
    let newNote = req.body;

    newNote['id'] = Date.now();
    newNote['title'] = req.body.title;
    newNote['text'] = req.body.text;

    fs.readFile(path.join(__dirname, '../../db/db.json'), 'utf8', (err, file) => {
        if (err) throw err;
        const storedFile = JSON.parse(file);
        storedFile.push(newNote);

        fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(storedFile), 'utf8', (err) => {
            if (err) throw err;
            console.log('New note has been added to file.')
        });
        return res.send(storedFile);
    });
});

apiRouter.delete('/api/notes/:id', (req, res) => {
    fs.readFile(path.join(__dirname, '../../db/db.json'), 'utf8', (err, file) => {
        if (err) throw err;
        let requestId = req.params.id;
        const storedFile = JSON.parse(file);
        const fileAfterDelete = storedFile.filter(elem => elem.id != requestId);

        fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(fileAfterDelete), 'utf8', (err) => {
            if (err) throw err;
            console.log('Note deleted!');
        });
        return res.send(fileAfterDelete);
    });
});

module.exports = apiRouter;