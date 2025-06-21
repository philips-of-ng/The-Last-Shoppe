import React from 'react'
import '../css/categories.css'

import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'

const Categories = () => {

  const { categories } = useContext(ShopContext)

  const getRepImages = (array) => {
    const repImages = []
    array.forEach(item => {
      repImages.push(item.image[0])
    });
    return repImages
  }


  return (
    <div className='my-4'>

      <div className='d-flex align-items-center justify-content-between'>
        <h3 className='fw-bold'>Categories</h3>

        <span className='blue-line'></span>
      </div>

      <div className='ct-main'>

        {
          categories.map((item, index) => (
            <>
              <div key={index} className="one-category">
                <div className='one-cat-up'>
                  {/* complicated code, dont touch */}
                  {
                    getRepImages(item.products).slice(0, 4).map((image, imgIndex) => (
                      <img key={imgIndex} src={image} />
                    ))
                  }

                </div>

                <div className='one-cat-down'>
                  <p>{item.name}</p>

                  <span>{item.length}</span>
                </div>
              </div>
            </>
          ))
        }

      </div>

    </div>
  )
}

export default Categories