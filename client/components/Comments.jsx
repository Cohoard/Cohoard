import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';
import CommentBox from './CommentBox';



function Comments() {

  /* This is a hook that is used to set the state of the comment. */
  const [comment, setComment] = useState({authorName: '', time: Date.now(), body: ''});

  const handleComment = (event) => {
    const newState = {...comment};

    newState[event.target.name] = event.target.value;

    setComment(newState);
  }

  const handlePostComment = (event) => {
    fetch('/newComment', {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('THIS IS FETCH DATA FOR new comment', data);
      // setAuth((auth.auth = true));
      // navigate('/dashboard');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

    return (
      <div className='commentBoxWrapper'>
        <CommentBox />
        <form>
            <input type='text' name='authorName' placeholder='name' required value={comment.authorName} onChange={handleComment}></input><br></br>
            <input type='text' name='body' placeholder='comment' required value={comment.body} onChange={handleComment}></input><br></br>
            <button className="submitbutton" type='reset' onClick={handlePostComment}>Add comment</button>
        </form>
      </div>
    )

};

export default Comments; 