import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { BBContext } from '../BulletinBoard.jsx';
import { ModalBackGround, Container, TextBody } from '../Style.js';

const Post = (props) => {

  const { posts, getPosts, postReply, deletePost } = useContext(BBContext);
  const { text, urgency, room, responses, _id } = props.data;

  const [ view, setView ] = useState(false);
  const [ replyView, setReplyView ] = useState(false);


  const [ textBody, setTextBody ] = useState('');



  let colors = {
    High: 'pink',
    Medium: 'lightyellow',
    Low: 'lightblue',
  }



  const toggleOpen = () => {
    setView(!view)
  }





  const toggleReplyOpen = () => {
    setReplyView(!replyView)
  }





  const responseList = (responses) => {
    return responses.map((response, idx) => {
      return <div className='response' key={idx}>{response}<br/></div>
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postReply(_id, textBody)
    setReplyView(!replyView)
  }

  const handleDelete = (e) => {
    e.preventDefault();
    deletePost(_id);
  }


  const cont =
  <Container>
    <h3>"{text}" from room {room}</h3>
    {responseList(responses)}
  </Container>




  const replyContainer =
  <Container>
    <h2>Reply:</h2>
    <TextBody placeholder='Message' onChange={e=>setTextBody(e.target.value)}/>
    <button className='submitBtn' onClick={handleSubmit}>Post</button>
  </Container>



  return (
    <div>
      {console.log(responses)}
      <div onClick={toggleOpen}>{view ? <ModalBackGround /> : null}</div>
      <div>{view ? cont : null}</div>

      <div onClick={toggleReplyOpen}>{replyView ? <ModalBackGround /> : null}</div>
      <div>{replyView ? replyContainer : null}</div>


      <div className='col' style={{backgroundColor: colors[urgency]}}>
        <div style={{color: 'black'}}>{room}</div>
        <div>{text}</div>

        <div className='reply' onClick={toggleOpen}>Replies</div>
        <div className='reply' onClick={toggleReplyOpen}> Reply</div>
        <div className='reply' onClick={handleDelete}>Delete</div>
      </div>
    </div>
  )
}


export default Post;