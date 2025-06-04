import React, { useEffect } from 'react'
import '../css/one-product.css'

const OneProduct = ({ product }) => {

  useEffect(() => {
    console.log('This is the test product', product);
  }, [])


  return (
    <div className='one-product-page'>

      <img src={product.image[0]} alt="" />

      <div className='price-n-descr'>
        <div>
          <h2 className='fw-bold'>$17.99</h2>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum soluta ab ducimus excepturi hic rem earum, reiciendis quia quis.</p>
      </div>



    </div>


  )
}

export default OneProduct