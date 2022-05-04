import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { NavBox, NavButton } from './Style.js';

const Nav = () => {

  return (

    <div className='navContainer'>
      <h3 className='navBtn'>Bulletin Board</h3>
      <h3 className='navBtn'>Mail Box</h3>
      <h3 className='navBtn'>Events</h3>
      <h3 className='navBtn'>Deals</h3>
      <h3 className='navBtn'>Resident Portal</h3>
    </div>

  )
}


export default Nav;
