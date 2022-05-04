import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { ModalBackGround,
         Container,
         FormInput,
         Select,
         SubmitButton,
         TextBody } from './Style.js';




const FoundMail = () => {

  const [  mailOpen, setMailOpen  ] = useState(false);
  const [      room, setRoom      ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [  lastName, setLastName  ] = useState('');
  const [      type, setType      ] = useState('');
  const [    pickUp, setPickUp    ] = useState('');
  const [      note, setNote      ] = useState('');


  const toggleModal = (e) => {
    setMailOpen(!mailOpen)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let mail = {
      room: room,
      firstName: firstName,
      lastName: lastName,
      type: type,
      pickUp: pickUp,
      note: note
    };

    axios.post('http://localhost:3000/mail', mail)
      .then(result => {
        setMailOpen(!mailOpen)
      })
      .catch(error => {
        setMailOpen(!mailOpen)
        console.log(error)
      })
  }


  const container =
    <Container>
      <h2>Help get someone their mail!</h2>
      <label>Room</label>
      <FormInput placeholder='Ex: 355' name='room' onChange={e=>setRoom(e.target.value)}/>
      <label>Name</label>
      <FormInput placeholder='First Name' name='firstName' onChange={e=>setFirstName(e.target.value)}/>
      <FormInput placeholder='Last Name' name='lastName' onChange={e=>setLastName(e.target.value)}/>
      <Select onChange={e=>setType(e.target.value)}>
        <option value='' hidden>Type</option>
        <option value='Letter'>Letter</option>
        <option value='Package'>Package</option>
        <option value='Food'>Food</option>
      </Select>
      <Select onChange={e=>setPickUp(e.target.value)}>
        <option value='' hidden>Pick Up Location</option>
        <option value='dropped at your door.'> Dropped at your door</option>
        <option value='dropped at the package room.'> Package Room</option>
        <option value='dropped at the office.'> Office</option>
      </Select>
      <TextBody placeholder='Leave a note' onChange={e=>setNote(e.target.value)}/>
      <SubmitButton onClick={handleSubmit}>Post</SubmitButton>
    </Container>



  return (
    <div>
      <h4>Found Mail?</h4>
      <button onClick={toggleModal}>Found Mail?</button>

      <div onClick={toggleModal}>{mailOpen ? <ModalBackGround /> : null}</div>
      <div>{mailOpen ? container : null}</div>

    </div>

  )
}


export default FoundMail;
