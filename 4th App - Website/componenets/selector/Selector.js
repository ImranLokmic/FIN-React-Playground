import React from 'react'
import './selector.css'
import Next from '../../assets/next.svg'
import Prev from '../../assets/previous.svg'

const Selector = () => {
  return (
    <div className='selector-container'>
      <div className='selector-next-container'><img src={Prev} alt="prevbutton" height="10px" width="35px"></img></div>
      <div className='selector-previous-container'><img src={Next} alt="nextbutton" height="10px" width="35px"></img></div>
    </div>
  )
}

export default Selector