import React from 'react';
import { useState, useContext, createContext, useEffect, useRef } from 'react';
import axios from 'axios';
import MailBox from './MailBox.jsx';
import Events from './Events.jsx';
import DogeDay from './DogeDay.jsx';
import AddPost from './postComponents/AddPost.jsx';
import PostList from './postComponents/PostList.jsx';
import FoundMail from './FoundMail.jsx';

export const BBContext = React.createContext(null);

const BulletinBoard = () => {

  const [ mail, setMail ] = useState([]);
  const [ posts, setPosts ] = useState([])




  const getMail = () => {
    axios.get('http://localhost:3000/mail')
    .then(results => {
      setMail(results.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const getPosts = () => {
    axios.get('http://localhost:3000/posts')
      .then(results => {
        setPosts(results.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const deleteMail = (id) => {
    axios.delete(`http://localhost:3000/${id}`)
      .then(result => {
        getMail();
      })
      .catch(error => {
        console.log(error)
      })
  }



  const postReply = (id, text) => {
    axios.post('http://localhost:3000/postReply', {
      id: _id,
      text: text
    })
    .then(results => {
      getPosts()
    })
    .catch(error => {
      console.log(error)
    })
  }




  useEffect(() => {
    getMail();
    getPosts();
  }, [])




  return (

    <BBContext.Provider value={{posts, getPosts, mail, setMail, deleteMail, postReply}}>
        <div className='grid-item-BB' >
          <div className='sectionHeaders visibleContainer'>
            <h2 style={{paddingTop: '40px'}}>BULLETIN BOARD</h2>
            <PostList />
          </div>
        </div>
        <div className='grid-clicks'>
          <AddPost />
          <FoundMail />
        </div>
        <MailBox />
        <Events />

    </BBContext.Provider>
  )
}


export default BulletinBoard;
