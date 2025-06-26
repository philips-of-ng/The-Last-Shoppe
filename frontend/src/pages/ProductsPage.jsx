import React, { useEffect, useState } from 'react'
import '../css/products-page.css'
import NavBar from '../components/NavBar'
import { products } from '../assets/assets/assets'
import OneProductBox from '../components/OneProductBox'

const ProductsPage = () => {

  const [filters, setFilters] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  // COMPLICATED FUNCTION --- DO NOT TOUCH
  // COMPLICATED FUNCTION --- DO NOT TOUCH
  // COMPLICATED FUNCTION --- DO NOT TOUCH
  const applyFilters = (filters) => {
    console.log('This is the list of filters applied', filters);
    // console.log('These are the products meant to be filtered', products);

    const int_bestseller = []

    const filteredProducts = products.filter((product) => {

      if (filters.includes('bestseller')) {
        int_bestseller = products.filter((product) => {product.bestseller})
      }

      return (
        filters.includes(product.category.toLowerCase()) || filters.includes(product.subCategory.toLowerCase())
      )
    })

    if (filters.includes('bestseller')) {
      const bestRefilteredProducts = filteredProducts.filter((product) => product.bestseller)
      console.log('These are the best seller filterd products', bestRefilteredProducts);
      return bestRefilteredProducts
    } else {
      return filteredProducts
    }

  }

  useEffect(() => {
    const finalFiltered = applyFilters(filters)
    setFilteredProducts(finalFiltered)
    console.log('These are the end product of the whole filtering process', finalFiltered);
  }, [filters])


  return (
    <div>
      <NavBar />

      <div className='sortbar p-3'>
        <div>
          <p className='my-0 fw-bold'>Sort by:</p>
        </div>

        <div className='classes'>

          <button
            onClick={() => {
              if (filters.includes('latest')) {
                const updatedFilter = filters.filter(filter => filter !== 'latest');
                setFilters(updatedFilter);
              } else {
                setFilters(prev => [...prev, 'latest']);
              }
            }}
            className={`${filters.includes('latest') ? 'active-filter' : ''}`}
          >
            Latest
          </button>

          <button
            onClick={() => {
              if (filters.includes('bestseller')) {
                const updatedFilter = filters.filter(filter => filter !== 'bestseller');
                setFilters(updatedFilter);
              } else {
                setFilters(prev => [...prev, 'bestseller']);
              }
            }}
            className={`${filters.includes('bestseller') ? 'active-filter' : ''}`}
          >
            Bestseller
          </button>

          <button
            onClick={() => {
              if (filters.includes('men')) {
                const updatedFilter = filters.filter(filter => filter !== 'men');
                setFilters(updatedFilter);
              } else {
                setFilters(prev => [...prev, 'men']);
              }
            }}
            className={`${filters.includes('men') ? 'active-filter' : ''}`}
          >
            Men
          </button>

          <button
            onClick={() => {
              if (filters.includes('women')) {
                const updatedFilter = filters.filter(filter => filter !== 'women');
                setFilters(updatedFilter);
              } else {
                setFilters(prev => [...prev, 'women']);
              }
            }}
            className={`${filters.includes('women') ? 'active-filter' : ''}`}
          >
            Women
          </button>

          <button
            onClick={() => {
              if (filters.includes('kids')) {
                const updatedFilter = filters.filter(filter => filter !== 'children');
                setFilters(updatedFilter);
              } else {
                setFilters(prev => [...prev, 'kids']);
              }
            }}
            className={`${filters.includes('kids') ? 'active-filter' : ''}`}
          >
            Children
          </button>

        </div>
      </div>


      <div className='product-lister p-3'>
        {

          filters.length > 0 ? (
            filteredProducts.map((product, index) => (
              <OneProductBox key={product._id} product={product} />
            ))
          ) : (
            products.map((product, index) => (
              <OneProductBox key={product._id} product={product} />
            ))
          )
        }
      </div>
    </div>
  )
}

export default ProductsPage