import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { BBContext } from '../BulletinBoard.jsx';

const Post = (props) => {

  const { posts, getPosts } = useContext(BBContext);
  const { text, urgency, room } = props.data;

  let colors = {
    High: 'pink',
    Medium: 'lightyellow',
    Low: 'lightblue',
  }

  return (

    <div className='col' style={{backgroundColor: colors[urgency]}}>
      <div style={{color: 'black'}}>{room}</div>
      <div>{text}</div>

      <div className='reply' >Replies</div>
    </div>

  )
}


export default Post;