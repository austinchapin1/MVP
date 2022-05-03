import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import BulletinBoard from './BulletinBoard.jsx';
import Nav from './Nav.jsx';
import { NavButton } from './Style.js';

const App = () => {



  return (
    <div>
      <h1>Welcome home!</h1>
      <Nav />
      <BulletinBoard />
    </div>

  )
}


export default App;
