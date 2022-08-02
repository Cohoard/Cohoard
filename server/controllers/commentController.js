const Comment = require('../models/commentModel');
// const ObjectId = require('mongodb').ObjectId;

const commentController = {};

commentController.createComment = async (req, res, next) => {
  try {
    const {authorName, time, body} = req.body;
    console.log(
      'THIS IS FROM CREATEComment',
      authorName,
      time,
      body
    );
    const commentDoc = await Comment.create({
      authorName, time, body
    });
    res.locals.comment = commentDoc;
    return next();
  } catch (err) {
    next({
      log: `createComment: ERROR: ${err}`,
      message: { err: 'Error occurred in the User controller' },
    });
  }
};

commentController.getComment = async (req, res, next) => {
  try{
    const comments = await Comment.find({});
    console.log('THIS IS WHERE OUR COMMENTS ARE', comments)
    res.locals.fetchedComments = comments;
    return next();
  } catch(err) {
    next({log: `getComment: ERROR: ${err}`, message: {err: 'Error occured in commentController.getComment'}})
  }
}

commentController.editComment = async (req, res, next) => {
  try{
    const id = req.body.id;
    const body = req.body.body
    const editedComment = await Comment.findOneAndUpdate(
      { id },
      { body },
      { new: true });
    res.locals.edited = editedComment;
    return next();
  } catch(err) {
    next({log: `getComment: ERROR: ${err}`, message: {err: 'Error occured in commentController.editComment'}})
  }
}

commentController.deleteComment = async (req, res, next) => {
  try{
    const id = req.body.id;
    const deletedComment = await Comment.findOneAndDelete({id});
    res.locals.deletedComments = deletedComment;
    return next();
  } catch(err) {
    next({log: `getComment: ERROR: ${err}`, message: {err: 'Error occured in commentController.deleteComment'}})
  }
}

// console.log(commentController)

module.exports = commentController;