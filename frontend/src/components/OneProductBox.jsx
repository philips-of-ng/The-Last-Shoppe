import React, { useContext } from 'react'
import '../css/one-product-box.css'
import { useNavigate } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext'


const OneProductBox = ({ product }) => {

  // const { currency } = useContext(ShopContext)
  const navigate = useNavigate()

  return (
    <div data-aos="fade-up" className='one-product-box' onClick={() => {
      navigate(`/products/single/${product._id}`)
    }}>
      <div className='image-box'>
        <img src={product.image[0]} alt="" />
        {
          product.discount ? (
            <p className='discount'>{`-${product.discount}%`}</p>
          ) : ''
        }
      </div>

      <p>{product.name}</p>

      <div className='prices'>
        <h4>
          { `$${product.discount ? product.price - (product.discount / 100) * product.price : product.price}` }
        </h4>
        {
          product.discount ? (
            <h4 className='old-price'>{`$${product.price}`}</h4>
          ) : ''
        }
      </div>

    </div>
  )
}

export default OneProductBox