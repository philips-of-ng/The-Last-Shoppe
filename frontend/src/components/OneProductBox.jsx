import React, { useContext } from 'react'
import '../css/one-product-box.css'
// import { ShopContext } from '../context/ShopContext'


const OneProductBox = ({ product }) => {

  // const { currency } = useContext(ShopContext)

  return (
    <div className='one-product-box'>
      <img src={product.image[0]} alt="" />

      <p>{product.name}</p>

      <h4>${product.price}</h4>
    </div>
  )
}

export default OneProductBox