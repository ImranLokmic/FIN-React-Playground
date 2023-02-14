import React from 'react';
import {Title, Image, Color, Size} from '../../componenets/index';
import './main.css'

const Main = () => {
  return (
    <div className='main-content-container'>
      <div className='main-content-title'><Title/></div>
      <div className='main-content-image'><Image/></div>
      <div className='main-content-size'><Size/></div>
      <div className='main-content-color'><Color/></div>
    </div>
  )
}

export default Main