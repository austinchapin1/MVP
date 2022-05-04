import React from 'react';
import { useState, useContext, createContext, useEffect } from 'react';
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
        console.log(posts)
        setPosts(results.data)
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

    <BBContext.Provider value={{posts, getPosts}}>
        <div className='grid-item-BB' >
          <div className='sectionHeaders visibleContainer'>
            <h2>BULLETIN BOARD</h2>
            <PostList />
          </div>
        </div>
        <div className='grid-clicks'>
          <AddPost />
          <FoundMail />
        </div>
        <MailBox />
        <Events />
        {/* <DogeDay /> */}

    </BBContext.Provider>
  )
}


export default BulletinBoard;
