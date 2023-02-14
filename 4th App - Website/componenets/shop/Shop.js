import React from 'react'
import Profile from '../../assets/profile.svg'
import Bag from '../../assets/bag.svg'
import './shop.css'

const Shop = () => {
  return (
    <div className='navbar-shop-icons'>
      <img src={Profile} alt="profile" max-height="28px"></img>
      <img src={Bag} alt="shop" max-height="28px"></img>
    </div>
  )
}

export default Shop