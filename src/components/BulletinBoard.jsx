import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import MailBox from './MailBox.jsx';
import Events from './Events.jsx';
import DogeDay from './DogeDay.jsx';
import { BB } from './Style.js';

const BulletinBoard = () => {



  return (
    // <div style={{backgroundColor: 'lightblue'}}>
    //   <h2>BULLETIN BOARD</h2>
    //   <MailBox />
    //   <Events />
    //   <DogeDay />
    // </div>

    <BB>
      <h2>BULLETIN BOARD</h2>
      <MailBox />
      <Events />
      <DogeDay />
    </BB>

  )
}


export default BulletinBoard;
