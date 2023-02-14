import React from 'react'
import './size.css'

const Size = () => {
  return (
    <div className='size-container'>
      <div className='size-title'>
        <p>select size (us)</p>
      </div>
      <div className='size-table'>
        <div className='size-table-item'><p>8</p></div>
        <div className='size-table-item'><p>8.5</p></div>
        <div className='size-table-item'><p>9</p></div>
        <div className='size-table-item'><p>9.5</p></div>
        <div className='size-table-item'><p>10</p></div>
        <div className='size-table-item'><p>10.5</p></div>
        <div className='size-table-item'><p>11</p></div>
        <div className='size-table-item'><p>11.5</p></div>
        <div className='size-table-item'><p>12</p></div>
        <div className='size-table-item'><p>12.5</p></div>
      </div>
    </div>
  )
}

export default Size