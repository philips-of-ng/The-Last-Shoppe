import React, { useEffect, useState } from 'react'
import '../css/one-product.css'

const OneProduct = ({ product }) => {

  useEffect(() => {
    console.log('This is the test product', product);
  }, [])

  const [mainImage, setMainImage] = useState(product.image[0])
  const [activeSize, setActiveSize] = useState(product.sizes[0])

  return (

    <>
      <div className='one-product-page'>

        <img src={mainImage} alt="" />

        <div className='price-n-descr p-3'>
          <div>
            <h2 className='fw-bold'>$17.99</h2>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum soluta ab ducimus excepturi hic rem earum, reiciendis quia quis.</p>
        </div>


        <div className='p-3'>

          {/* IMAGES AND SIZING */}
          <div>

            <div className='images-top'>
              <h4 className='fw-bold'>Variations</h4>

              <div className='sizes'>
                {
                  product.sizes.map((size, index) => (
                    <button
                      key={index}
                      className={`size-btn ${activeSize === size ? 'active-size' : ''}`}
                      onClick={() => setActiveSize(size)}
                    >
                      {size}
                    </button>
                  ))
                }

              </div>
            </div>

            <div className='images-main'>
              {
                product.image.map((image, index) => (
                  <img src={image} key={index} alt="" onClick={() => {
                    setMainImage(image)
                  }} />
                ))
              }
            </div>

          </div>

        </div>

        <div className='main-buttons-container'>
          <div className='main-buttons'>
            <button className='wish-btn'>< i class='bxr  bx-heart'  ></i> </button>

            <button className='buy-now-btn'>Buy Now</button>
            <button className='add-to-cart'>Add to Cart</button>
          </div>
        </div>


        <div className='reviews-section p-3'>
          <div className='reviews-section-head'>
            <h4 className='fw-bold'>Ratings & Reviews</h4>
          </div>

          <div className='reviews-section-main'>

          </div>
        </div>
      </div>
    </>



  )
}

export default OneProduct