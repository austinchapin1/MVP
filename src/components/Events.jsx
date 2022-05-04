import React from 'react';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const Events = () => {

  const [ events, setEvents ] = useState([])


  return (
    <div className='grid-item-events'>
      <div className='sectionHeaders'>
        <h2>Events</h2>
      </div>


    </div>

  )
}


export default Events;
