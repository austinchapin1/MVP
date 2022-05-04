import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import BulletinBoard from './BulletinBoard.jsx';
import Nav from './Nav.jsx';
import { NavButton } from './Style.js';
import './styles.css';

const App = () => {

  return (
    <div>
      <div>
        <h1>Welcome home!</h1>
      </div>
      <Nav />
      <BulletinBoard />
    </div>

  )
}


export default App;
