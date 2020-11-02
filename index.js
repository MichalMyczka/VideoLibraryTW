const path = require('path');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/VideoLibraryTW', {
    useNewUrlParser: true,
    keepAlive: 1
});

app.get('/', (req, res) => {
    res.send('<h1>Serwer dziala!!</h1>')
});

app.listen(PORT,() => console.log(`Serwer wystartowal na porcie ${PORT}`));
