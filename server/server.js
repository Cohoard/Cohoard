const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const router = require('./routes/routers.js');
const MONGO_URI = 'mongodb+srv://cohoardDB:Vcb7gPGN3mExAiKs@cluster0.lrrzt.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, { dbName: 'CoHoard', useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to the database');
});

app.use(express.json());

app.use(express.urlencoded({extended: true}));

//serve static files
app.use(express.static(path.resolve(__dirname, '../client')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use('/', router);

//catch-all route handler for any unkwown routes
app.use('*', (req, res) => {
  res.status(404).send('Page not found');
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

module.exports = app;