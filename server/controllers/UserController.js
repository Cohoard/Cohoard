const User = require('../models/userModel');
const ObjectId = require('mongodb').ObjectId;

const userController = {};

userController.createNewUser = async (req, res, next) => {
  try {
   const { first_name, last_name, username, password } = req.body;
   console.log('is this working',  first_name, last_name, username, password)
   const userDoc = await User.create({
    first_name, last_name, username, password
   });
   res.locals.user = userDoc;
   return next();
  } catch(err) {
   next({
     log: `createNewUser: ERROR: ${err}`,
     message: {err: 'Error occurred in the User controller'}
   });
  }
}

userController.verifyUser = async (req, res, next) => {
  try {
   const { username, password } = req.body;
   console.log('is verifyUser working', req.body)
   const verifiedUser = await User.find({
    username: req.body.username
   });
  
   if (verifiedUser.length !== 0) {
    if (req.body.password === verifiedUser[0].password) {
      res.locals.user = verifiedUser[0].username;
    }
    else {
      res.locals.user = 'Incorrect Password';
    }
   }
   else {
    res.locals.user = 'User Not Found';
   }

   return next();
  } catch(err) {
   next({
     log: `createNewUser: ERROR: ${err}`,
     message: {err: 'Error occurred in the User controller'}
   });
  }
}
module.exports = userController;