import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { BBContext } from '../BulletinBoard.jsx';

const Post = (props) => {

  const { posts, getPosts } = useContext(BBContext);
  const { text, urgency } = props.data;

  let colors = {
    High: 'pink',
    Medium: 'lightyellow',
    Low: 'lightblue',
  }

  return (

    <div className='col' style={{backgroundColor: colors[urgency]}}>
      <h3>Post</h3>
      {text}
    </div>

  )
}


export default Post;