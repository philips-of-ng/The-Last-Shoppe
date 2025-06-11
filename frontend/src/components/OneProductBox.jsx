import React, { useContext } from 'react'
import '../css/one-product-s1.css'
import { ShopContext } from '../context/ShopContext'


const OneProductBox = ({ image, name, price }) => {

  const { currency } = useContext(ShopContext)

  return (
    <div className='one-product-box'>
      <img src={image} alt="" />

      <p>{name}</p>

      <h4>{currency}{price}</h4>
    </div>
  )
}

export default OneProductBox