import React, { useEffect, useState } from 'react'
import '../css/products-page.css'
import NavBar from '../components/NavBar'

const ProductsPage = () => {

  const [filters, setFilters] = useState([])

  const applyFilters = (filters) => {
    console.log('This is the list of filters applied', filters);
    
  } 

  useEffect(() => {
    applyFilters(filters)
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
              if (filters.includes('children')) {
                const updatedFilter = filters.filter(filter => filter !== 'children');
                setFilters(updatedFilter);
              } else {
                setFilters(prev => [...prev, 'children']);
              }
            }}
            className={`${filters.includes('children') ? 'active-filter' : ''}`}
          >
            Children
          </button>



        </div>
      </div>
    </div>
  )
}

export default ProductsPage