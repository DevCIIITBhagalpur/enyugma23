import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Config from './config.js';
const App = express();

App.use(bodyParser.json());
App.use(cors());

App.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Enyugma'
    });
});

App.listen(Config.Port, () => {
    console.log(`Server started on port ${Config.Port}`);
});