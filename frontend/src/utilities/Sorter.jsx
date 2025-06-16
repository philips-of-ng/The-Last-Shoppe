import React, { useEffect } from 'react'

import { products } from '../assets/assets/assets'

const Sorter = () => {

  

  const SortProduct = (products, theCategory) => {
    const sortedProducts = products.sort((product) => product.category = theCategory)

    console.log('These are the sorted products', sortedProducts);
    
  }

  useEffect(() => {
    console.log('These are the products coming from assets', products);

    SortProduct(products)
  }, [])

  return (
    <div>Sorter</div>
  )
}

export default Sorter