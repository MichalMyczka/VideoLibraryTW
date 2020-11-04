import videoRoutes from "./src/routes/videoRoutes";

const path = require('path');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/VideoLibraryTW', {
    useNewUrlParser: true,
    keepAlive: 1
});

app.use(express.static(__dirname + '/src'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/videos', videoRoutes());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views', 'mainPage.html'));
});

app.get('/addvideo', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views', 'addNewVideo.html'));
});

app.listen(PORT,() => console.log(`Serwer wystartowal na porcie ${PORT}`));

