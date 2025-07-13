import React, { useEffect, useState } from 'react'
import '../css/products-page.css'
import NavBar from '../components/NavBar'
import { products } from '../assets/assets/assets'
import OneProductBox from '../components/OneProductBox'
import { useParams } from 'react-router-dom'

const ProductsPage = () => {

  const param = useParams()
  const browsed_category = param.category

  useEffect(() => {
    if (browsed_category) {
      const cleanCategory = browsed_category.replace('c', '').replace('-', '').toLowerCase();
      setFilters([cleanCategory]); // 👈 Wrap in array
    }
  }, []);


  console.log('param gotten from url', param);


  const [filters, setFilters] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [semiFinalRendition, setSemiFinalRendition] = useState([])
  const [finalRendition, setFinalRendition] = useState([])

  // COMPLICATED FUNCTION --- DO NOT TOUCH
  const applyFilters = (filters) => {
    console.log('This is the list of filters applied', filters);
    console.log('These are the products meant to be filtered', products);

    let filteredProducts = products;

    const categoryFilters = filters.filter(f =>
      ['men', 'women', 'kids'].includes(f)
    );

    if (categoryFilters.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        categoryFilters.includes(product.category?.toLowerCase()) ||
        categoryFilters.includes(product.subCategory?.toLowerCase())
      );
    }

    // Handle discount filter
    if (filters.includes('discount')) {
      filteredProducts = filteredProducts.filter((product) => product.discount);
    }

    // Handle bestseller filter
    if (filters.includes('bestseller')) {
      filteredProducts = filteredProducts.filter((product) => product.bestseller);
    }

    return filteredProducts;
  };


  useEffect(() => {
    const finalFiltered = applyFilters(filters)
    setFilteredProducts(finalFiltered)
    console.log('These are the end product of the whole filtering process', finalFiltered);
  }, [filters])


  //PAGINATION SYSTEM
  useEffect(() => {
    if (filteredProducts) {
      setSemiFinalRendition(filteredProducts)
    } 
    // else {
    //   setSemiFinalRendition(products)
    // }
  }, [filteredProducts, products])


  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 20 //One for testing -- Normally 20

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const totalPages = Math.ceil(semiFinalRendition?.length / productsPerPage)

  const currentProducts = semiFinalRendition.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0);
  }

  console.log('Current Products', currentProducts);


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
              if (filters.includes('discount')) {
                const updatedFilter = filters.filter(filter => filter !== 'discount');
                setFilters(updatedFilter);
              } else {
                setFilters(prev => [...prev, 'discount']);
              }
            }}
            className={`${filters.includes('discount') ? 'active-filter' : ''}`}
          >
            Discounted
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
                const updatedFilter = filters.filter(filter => filter !== 'kids');
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
          currentProducts.map((item, index) => (
            <OneProductBox product={item} key={index} />
          ))
        }
      </div>

      {/* <div className='product-lister p-3'>
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
      </div> */}


      <div data-aos="fade-up" className='pagin-nav'>
        {
          Array.from({ length: totalPages }, (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)} disabled={currentPage === index + 1}>{index + 1}
            </button>
          ))
        }
      </div>



    </div>
  )
}

export default ProductsPage