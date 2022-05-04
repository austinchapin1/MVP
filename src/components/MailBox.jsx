import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Mail from './Mail.jsx';
import { BBContext } from './BulletinBoard.jsx';


let temp = [

  {
      "_id": "6271a6e6efaa04e5f47330b3",
      "room": 355,
      "firstName": "Austin",
      "lastName": "Chapin",
      "type": "Letter",
      "pickUp": "dropped at your door.",
      "note": "Testing heres a note",
      "createdAt": "2022-05-03T22:04:22.616Z",
      "updatedAt": "2022-05-03T22:04:22.616Z",
      "__v": 0
  },
  {
      "_id": "6271a6e7efaa04e5f47330b5",
      "room": 355,
      "firstName": "Austin",
      "lastName": "Chapin",
      "type": "Letter",
      "pickUp": "dropped at your door.",
      "note": "Testing heres a note",
      "createdAt": "2022-05-03T22:04:23.873Z",
      "updatedAt": "2022-05-03T22:04:23.873Z",
      "__v": 0
  }
]



const MailBox = () => {

  const { mail, setMail } = useContext(BBContext);

  let mailList = (mail) => {

    return mail.map((post, idx) => {
      return <Mail data={post} key={idx}/>
    });
  }


  return (
    <div className='grid-item-foundMail visibleContainer'>
      <div className='sectionHeaders mailHeader'>
        <h2>Mail Box</h2>
      </div>
        <div className='grid'>
        {mailList(temp)}

        </div>
    </div>

  )
}


export default MailBox;
