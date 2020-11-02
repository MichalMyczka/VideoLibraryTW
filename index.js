// // import express from 'express';
// import { join } from 'path';
// import config from './src/config/config';
// // import userStories from "./routes/userStories";
// import { notFound, catchErrors } from './src/middlewares/errors';
// import bodyParser from 'body-parser';
//
//
// // Connect to database
// import dbConfig from './config/database';
// import mongoose from 'mongoose';
//
// mongoose.connect(dbConfig.mongoUrl);
// mongoose.Promise = global.Promise;
// mongoose.connection.on('error', (err) => {
//     console.log('Could not connect to the database. Exiting now...');
//     process.exit();
// });
//

const path = require('path');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('<h1>Serwer dziala!!</h1>')
});

app.listen(PORT,() => console.log(`Serwer wystartowal na porcie ${PORT}`));
// app.set('view engine', 'pug');
// app.set('views', join(__dirname, 'views'));
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
//
// // routes config
// app.use(express.static(__dirname));
//
//
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'userStories.html'));
// });
//
// app.use('/stories', userStories());
//
// app.get('/story', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'addUserStory.html'));
// });
//
// app.get('/edit', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'editUserStory.html'));
// });
//
// // errors handling
// app.use(notFound);
// app.use(catchErrors);
//
// // let's play!
// app.listen(config.server.port, () => {
//     console.log(`Server is up!`);
// });