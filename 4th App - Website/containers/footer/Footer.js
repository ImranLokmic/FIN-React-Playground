import React from 'react'
import {Selector, Buy} from '../../componenets/index';
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-selector-container'><Selector/></div>
      <div className='footer-buy-container'><Buy/></div>
    </div>
  )
}

export default Footer