import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { NavBox, NavButton } from './Style.js';

const Nav = () => {



  return (
    <NavBox>
      <NavButton>Bulletin Board</NavButton>
      <NavButton>Mail Box</NavButton>
      <NavButton>Events</NavButton>
      <NavButton>Deals</NavButton>
      <NavButton>Resident Portal</NavButton>
    </NavBox>

  )
}


export default Nav;
