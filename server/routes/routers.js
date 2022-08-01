const express = require('express');
//require the middleware
const router = express.Router();
const userController = require('../controllers/UserController');

//dashboard/ => login

//localhost:8080/ => public home page

router.get('/', (req, res) => {
  console.log('THIS IS PUBLIC HOME PAGE GET REQ SUCCESS');
  res.status(200).json();
});

router.get('/signup', (req, res) => {
  console.log('THIS IS GET REQ SUCCESS');
  res.status(200).json();
});

router.post('/signup', userController.createNewUser, (req, res) => {
  console.log('THIS IS POST REQ SUCCESS SIGNUP');
  res.status(200).json(res.locals.user);
});

router.get('/login', (req, res) => {
  console.log('THIS IS GET REQ SUCCESS');
  res.status(200).json();
});

router.post('/login', userController.verifyUser, (req, res) => {
  console.log('THIS IS POST REQ LOGIN CONNECTION SUCCESS', res.locals.user);
  res.status(200).json(res.locals.user);
});

module.exports = router;
