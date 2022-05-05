import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { BBContext } from '../BulletinBoard.jsx';

import Post from './Post.jsx';

let temp = [{createdAt: "2022-05-03T23:58:00.484Z",
responses: ["hey sounds great!", "i'll be there!"],
room: 355,
text: "Party over here",
type: "post",
updatedAt: "2022-05-03T23:58:00.484Z",
urgency: "Medium",
__v: 0,
_id: "6271c1882093cd9f1aec7465"}, {createdAt: "2022-05-03T23:58:00.484Z",
responses: [],
room: 355,
text: "Party over here",
type: "post",
updatedAt: "2022-05-03T23:58:00.484Z",
urgency: "Medium",
__v: 0,
_id: "6271c1882093cd9f1aec7465"},
{createdAt: "2022-05-03T23:58:00.484Z",
responses: [],
room: 355,
text: "Party over here",
type: "post",
updatedAt: "2022-05-03T23:58:00.484Z",
urgency: "Low",
__v: 0,
_id: "6271c1882093cd9f1aec7465"},
{createdAt: "2022-05-03T23:58:00.484Z",
responses: [],
room: 355,
text: "Party over here",
type: "post",
updatedAt: "2022-05-03T23:58:00.484Z",
urgency: "Medium",
__v: 0,
_id: "6271c1882093cd9f1aec7465"},
{createdAt: "2022-05-03T23:58:00.484Z",
responses: [],
room: 355,
text: "Party over here",
type: "post",
updatedAt: "2022-05-03T23:58:00.484Z",
urgency: "High",
__v: 0,
_id: "6271c1882093cd9f1aec7465"},
{createdAt: "2022-05-03T23:58:00.484Z",
responses: [],
room: 355,
text: "Party over here",
type: "post",
updatedAt: "2022-05-03T23:58:00.484Z",
urgency: "Low",
__v: 0,
_id: "6271c1882093cd9f1aec7465"},
{createdAt: "2022-05-03T23:58:00.484Z",
responses: [],
room: 355,
text: "Party over here",
type: "post",
updatedAt: "2022-05-03T23:58:00.484Z",
urgency: "Medium",
__v: 0,
_id: "6271c1882093cd9f1aec7465"}]




const PostList = () => {

  const { posts, getPosts } = useContext(BBContext);


  const [ postOpen, setPostOpen ] = useState(false);



  let list = (posts) => {
    return posts.map((post, idx) => {
      return <Post data={post} key={idx}/>
    });
  }

  return (
    <div className='grid'>
        {/* {console.log(posts)} */}
        {list(posts)}
      </div>
  )
}


export default PostList;