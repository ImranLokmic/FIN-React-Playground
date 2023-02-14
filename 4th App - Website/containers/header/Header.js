import React from 'react'
import {Logo, Navbar, Shop} from '../../componenets/index';
import './header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-logo-container'><Logo/></div>
      <div className='header-navbar-container'><Navbar/></div>
      <div className='header-shop-container'><Shop/></div>
    </div>
  )
}

export default Header