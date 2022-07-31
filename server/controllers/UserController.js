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
   const { username, password } = req.params;
   console.log('is this working', req.params)
   const verifieduser = await User.find({
    username: req.params.username, password: req.params.password
   });
   res.locals.user = verifiedUser;
   return next();
  } catch(err) {
   next({
     log: `createNewUser: ERROR: ${err}`,
     message: {err: 'Error occurred in the User controller'}
   });
  }
}
module.exports = userController;