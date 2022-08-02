const express = require('express');
//require the middleware
const router = express.Router();
const userController = require('../controllers/UserController');
const commentController = require('../controllers/commentController');

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

// console.log(commentController)


router.post('/newComment', commentController.createComment, (req, res) => {
  console.log('THIS IS POST REQ NEW COMMENT CONNECTION SUCCESS', res.locals.comment);
  res.status(200).json(res.locals.comment);
});

router.get('/allComments', commentController.getComment, (req, res) => {
  res.status(200).json(res.locals.fetchedComments);
})

router.patch('/allComments', commentController.editComment, (req, res) => {
  res.status(200).json(res.locals.edited);
})

router.delete('/thisComment', commentController.deleteComment, (req, res) => {
  res.status(200).json('Deleted');
})

module.exports = router;
