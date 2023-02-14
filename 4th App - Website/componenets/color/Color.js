import React from 'react'
import './color.css'


const Color = () => {
  return (
    <div className='color-container'>
      <div className='color-title'>
        <p>select color</p>
      </div>
      <div className='color-table'>
        <div className='color-table-item' id="brown"></div>
        <div className='color-table-item' id="black"></div>
        <div className='color-table-item' id="blue"></div>
        <div className='color-table-item' id="yellow"></div>
        <div className='color-table-item' id="white"></div>
      </div>
    </div>
  )
}

export default Color