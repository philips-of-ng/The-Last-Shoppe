import React, { useContext } from 'react'
import '../css/one-product-box.css'
import { useNavigate } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext'


const OneProductBox = ({ product }) => {

  // const { currency } = useContext(ShopContext)
  const navigate = useNavigate()

  return (
    <div className='one-product-box' onClick={() => {
      navigate(`/products/${product._id}`)
    }}>
      <div className='image-box'>
        <img src={product.image[0]} alt="" />
        {
          product.discounted ? (
            <p className='discount'>-25%</p>
          ) : ''
        }
      </div>

      <p>{product.name}</p>

      <div className='prices'>
        <h4>${product.price}</h4>
        {
          product.discounted ? (
            <h4 className='old-price'>${product.price}</h4>
          ) : ''
        }
      </div>

    </div>
  )
}

export default OneProductBox