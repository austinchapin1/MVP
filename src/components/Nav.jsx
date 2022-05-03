import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { NavButton } from './Style.js';

const Nav = () => {



  return (
    <div style={{backgroundColor: 'lightgreen'}}>
      <NavButton>Bulletin Board</NavButton>
      <NavButton>Mail Box</NavButton>
      <NavButton>Events</NavButton>
      <NavButton>Deals</NavButton>
      <NavButton>Resident Portal</NavButton>
    </div>

  )
}


export default Nav;
