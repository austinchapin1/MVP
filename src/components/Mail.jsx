import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { BBContext } from './BulletinBoard.jsx';

const Mail = (props) => {

  const { deleteMail } = useContext(BBContext);
  const { type, pickUp, note, room, _id } = props.data;

  let colors = {
    High: 'pink',
    Medium: 'lightyellow',
    Low: 'lightblue',
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteMail(_id)
  }

  return (

    <div className='mail'>
      <div style={{color: 'black'}}>{room}</div>
      <div>{`${type} ${pickUp}`}</div>
      <div>{note}</div>

      <div className='reply' onClick={handleSubmit}>Got it!</div>
    </div>

  )
}


export default Mail;