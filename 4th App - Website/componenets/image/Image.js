import React from 'react'
import ShoeImage from '../../assets/sneaker.svg'

const Image = () => {
  return (
    <div className='main-image'>
      <img src={ShoeImage} alt="sneaker" height="100%"></img>
    </div>
  )
}

export default Image