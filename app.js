const express = require('express');
const app = express();
const path = require('path');
const host = "http://127.0.0.1";
const port = 3003;
const dbController = require('./controllers/dbControllers');

app.get('/', (req, res) => {
    res.send("<h1>Benvenuto nel mio blog!</h1>")
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${host}:${port}`)
  });

app.get('/db' , dbController.index);

app.get('/db/:slug', dbController.show);