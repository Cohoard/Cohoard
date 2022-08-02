import React from 'react';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
// import Comments from "./Comments";

export default function CommentBox() {

  const [allComments, setAllComments] = useState([]);
  const [allCommentsInput, setInput] = useState([]);

  useEffect( () => {
    fetch('/allComments')
      .then((res) => res.json()) 
      .then((data) => {
        console.log('THIS IS ALL THE COMMENTS', data)
        setAllComments(data);
        console.log(allComments);
        updateInputState(data.length)
      })
  }, [])

const handleCommentEdit = (event) => {
  console.log('THIS IS ALLCOMMENTSINPUT',allCommentsInput)

  setInput(
    [...allCommentsInput.slice(0, event.target.id), true, ...allCommentsInput.slice(event.target.id + 1)]
  );
  
};

const handleCommentDelete = (event) => {
  // let currentComment1;
  // fetch('/thisComment', {
  //   method: 'DELETE',
  //   body: JSON.stringify(),
  //   headers: { 'Content-Type': 'application/json'}, 
  // })
  
};

const handleEditSubmit = (event) => {
  let currentComment;
  allComments.forEach(el => {
    if (event.target.name === el._id) {
      currentComment = el;
    }
  });
  fetch('/allComments', {
    method: 'PATCH',
    body: JSON.stringify({ id, body} = currentComment),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(response => response.json())
  .then(data => {
    setAllComments({
      allComments: [...allComments.slice(0, event.target.id), data, ...allComments.slice(event.target.id + 1)]
    })
  });
  
}

const updateInputState = (length) => {
  let inputArr = new Array(length);
  setInput(inputArr.fill(false));
  console.log('updateInputState pls', length)
  return (<></>)
}

  const allCommentsSection = [];  
  for (let i = 0; i < allComments.length; i+= 1) {
    allCommentsSection.push(
    <div className='commentdiv'>
      <li>{allComments[i].authorName} <br></br> {allComments[i].body} <br></br> {allComments[i].time}</li>
      <br></br>
      {allCommentsInput[i] ? 
      <div>
        <input type='text' name={`update${i}`}/> 
        <button className='oauthbutton' name={allComments[i]._id} id={i} onClick={handleEditSubmit} value={}>CONFIRM EDIT</button>
      </div> : <></>}
      <button className='oauthbutton' name={allComments[i]._id} id={i} onClick={handleCommentEdit}>EDIT</button> 
      <button className='oauthbutton' name={allComments[i]._id} id={i} onClick={handleCommentDelete}>DELETE</button>
    </div>)
  }
  
  return (
    <div>
      {allCommentsSection}
    </div>
  );
};




/* scratch code

// const fetchedComments = fetch..... //array

//fetchedComments.forEach => {
//   <CommentBox body author/> 
// }

//fetchedComments.forEach((comment)=>{ 
  <div className='individualComment'>
    Comment: {}
    Author: {}

    <button>Edit</button>
    <button>Delete</button>
  </div>
// })

const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/allComments')
      .then((res) => res.json();
        }
      })
      .then((data) => {
        if (data) {
          setData(data);
        }
      });
  }, []);

  useEffect(() => {
    console.log('data ', data);
  }, [data]);
  return (
    <div className='comment'>
      {data.map((comment, i) => (
        <li key={`comment-${i}`} label={comment.label} />
      ))}
    </div>

export default CommentBox = () => {

  return(
    <div className = commentWrapper>
   <li owrnfwrnf= {fetchedComments}>
    </div>
  )
}
*/