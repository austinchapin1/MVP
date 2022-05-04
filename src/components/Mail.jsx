import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { BBContext } from './BulletinBoard.jsx';

const Mail = (props) => {

  const { posts, getPosts } = useContext(BBContext);
  const { type, pickUp, note, room } = props.data;

  let colors = {
    High: 'pink',
    Medium: 'lightyellow',
    Low: 'lightblue',
  }

  return (

    <div className='mail'>
      <div style={{color: 'black'}}>{room}</div>
      <div>{`${type} ${pickUp}`}</div>
      <div>{note}</div>
    </div>

  )
}


export default Mail;