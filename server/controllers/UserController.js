const User = require('../models/userModel');
const ObjectId = require('mongodb').ObjectId;

const userController = {};

userController.createNewUser = async (req, res, next) => {
  try {
    const { first_name, last_name, username, password } = req.body;
    console.log(
      'THIS IS FROM CREATENEWUSER',
      first_name,
      last_name,
      username,
      password
    );
    const userDoc = await User.create({
      first_name,
      last_name,
      username,
      password,
    });
    res.locals.user = userDoc;
    return next();
  } catch (err) {
    next({
      log: `createNewUser: ERROR: ${err}`,
      message: { err: 'Error occurred in the User controller' },
    });
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    console.log('AR WE ENTERING THIS VERIFYUSER');
    const { username, password } = req.body;
    console.log('THIS IS FROM VERIFYUSER', req.body);
    const verifiedUser = await User.findOne({ username, password }).exec();
    res.locals.user = verifiedUser;
    return next();
  } catch (err) {
    next({
      log: `verifyUser: ERROR: ${err}`,
      message: { err: 'Error occurred in the userController.verifyUser' },
    });
  }
};
module.exports = userController;
