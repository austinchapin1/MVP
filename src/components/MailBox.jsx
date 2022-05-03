import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import FoundMail from './FoundMail.jsx';

const MailBox = () => {

  const [ mail, setMail ] = useState([])


  return (
    <div>
      <h3>Mail Box</h3>
      <FoundMail />

    </div>

  )
}


export default MailBox;
