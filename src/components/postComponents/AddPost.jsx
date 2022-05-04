import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { BBContext } from '../BulletinBoard.jsx';
import { ModalBackGround,
         Container,
         FormInput,
         Select,
         TextBody,
         SubmitButton } from '../Style.js';




const AddPost = () => {

  const { getPosts } = useContext(BBContext);


  const [ postOpen, setPostOpen ] = useState(false);
  const [     text, setText     ] = useState('');
  const [  urgency, setUrgency  ] = useState('');

  const toggleModal = (e) => {
    setPostOpen(!postOpen)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let post = {
      type: 'post',
      room: 355,
      text: text,
      urgency: urgency,
      responses: []
    };

    axios.post('http://localhost:3000/posts', post)
      .then(result => {
        setPostOpen(!postOpen)
        getPosts();
      })
      .catch(error => {
        setPostOpen(!postOpen)
        console.log(error)
      })
  }

  const cont =
    <Container>
      <h2>Post a message to your neighbors!</h2>
      <TextBody placeholder='Message' onChange={e=>setText(e.target.value)}/>
      <Select onChange={e=>setUrgency(e.target.value)}>
        <option value='' hidden>Urgency</option>
        <option value='High'>High</option>
        <option value='Medium'>Medium</option>
        <option value='Low'>Low</option>
      </Select>
      <SubmitButton onClick={handleSubmit}>Post</SubmitButton>
    </Container>



  return (
    <div>
      <h4>Post a message!</h4>
      <button onClick={toggleModal}>Post a message!</button>

      <div onClick={toggleModal}>{postOpen ? <ModalBackGround /> : null}</div>
      <div>{postOpen ? cont : null}</div>

    </div>

  )
}


export default AddPost;