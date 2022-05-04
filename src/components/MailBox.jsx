import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const MailBox = () => {

  const [ mail, setMail ] = useState([])


  return (
    <div className='grid-item-foundMail'>
      <div className='sectionHeaders mailHeader'>
        <h2>Mail Box</h2>
      </div>
    </div>

  )
}


export default MailBox;
