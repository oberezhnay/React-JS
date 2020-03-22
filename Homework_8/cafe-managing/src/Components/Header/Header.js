import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div>
        <h5>Welcome to our cafe</h5>
      </div>
      <ul>
        <NavLink className='button' to='/tables'>
          Tables
        </NavLink>
        <NavLink className='button' to='/waitstaff'>
          Waitstaff
        </NavLink>
        <NavLink className='button' to='/menue'>
          Menue
        </NavLink>
        <NavLink className='button' to='/checks'>
          Checks
        </NavLink>
      </ul>
    </div>
  )
}

export default Header
