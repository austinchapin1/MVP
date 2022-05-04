import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import FoundMail from './FoundMail.jsx';

const MailBox = () => {

  const [ mail, setMail ] = useState([])


  return (
    <div>
      <div className='title'>
        <h2>Mail Box</h2>
      </div>
      <FoundMail />

    </div>

  )
}


export default MailBox;
