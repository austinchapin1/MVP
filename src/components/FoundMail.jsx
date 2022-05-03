import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { MailModal, Container, FormInput, Select } from './Style.js';

const FoundMail = () => {

  const [ mailOpen, setMailOpen ] = useState(false);
  const [ room, setRoom ] = useState(null);


  const toggleModal = (e) => {
    setMailOpen(!mailOpen)
  }


  const modal =
    <MailModal>
    </MailModal>

  const mailInput =
    <FormInput></FormInput>

  const cont =
    <Container>
      <h2>Help get someone their mail!</h2>
      <FormInput placeholder='Room #'/>
      <Select>
        <option value='' hidden>Type</option>
        <option value='Letter'>Letter</option>
        <option value='Package'>Package</option>
        <option value='Food'>Food</option>
      </Select>
    </Container>



  return (
    <div>
      <h4>Found Mail?</h4>
      <button onClick={toggleModal}>Found Mail?</button>

      <div onClick={toggleModal}>{mailOpen ? modal : null}</div>
      <div>{mailOpen ? cont : null}</div>

    </div>

  )
}


export default FoundMail;
