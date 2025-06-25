import React, { useContext } from 'react'
import '../css/home.css'
import NavBar from '../components/NavBar'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { asset_images } from '../assets/images/images';
import Categories from '../components/Categories';
import { ShopContext } from '../context/ShopContext';
import { assets_2 } from '../assets/assets/assets';
import OneProductBox from '../components/OneProductBox';

const Home = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }

  const { bestSellers } = useContext(ShopContext)


  return (
    <>
      <NavBar />

      <div className='home-content'>

        {/* HERO CAROUSEL SECTION */}
        <section className='home-section-one p-3'>
          <Slider className='home-slider' {...sliderSettings}>
            <div className='one-slide'><img src={asset_images.shoppe_banner} alt="" /></div>
            <div className='one-slide'><img src={asset_images.shoppe_banner} alt="" /></div>
            <div className='one-slide'><img src={asset_images.shoppe_banner} alt="" /></div>
            <div className='one-slide'><img src={asset_images.shoppe_banner} alt="" /></div>
            <div className='one-slide'><img src={asset_images.shoppe_banner} alt="" /></div>
          </Slider>
        </section>



        <section className='categories-section p-2'>
          <Categories />
        </section>


        <section className='top-products p-3'>

          <div className='d-flex align-items-center justify-content-between'>
            <h3 className='fw-bold'>Top Products</h3>

            <span className='blue-line'></span>
          </div>

          <div className='tp-main'>

            {
              bestSellers.map((item, index) => (
                <>
                  <div key={index} className='one-top-product'>
                    <img key={index} src={item.image[0]} alt="" />
                  </div>
                </>
              ))
            }

            {/* PROTOTYPE OF ITEMS IN THIS SECTION */}
            {/* <div className='one-top-product'>
              <img src={assets_2.shoppe_banner} alt="" />
            </div> */}

            {/* see more button */}

            <div className='one-top-product'>
              <img style={{ width: '50%', height: '50%' }} src={assets_2.dropdown_icon} alt="" />
            </div>


          </div>
        </section>


        {/* NEW ITEMS SECTION */}
        <section className='p-3'>

          <div className='d-flex align-items-center justify-content-between'>
            <h3 className='fw-bold'>New Items</h3>

            <span className='blue-line'></span>
          </div>

          <div className='ni-main'>
            {/* TEST THE PRODUCT BOX WITH THE FIRST BESTSELLER */}
            <OneProductBox product={bestSellers[0]} />
            <OneProductBox product={bestSellers[0]} />
            <OneProductBox product={bestSellers[0]} />
            <OneProductBox product={bestSellers[0]} />
          </div>

        </section>



        {/* JUST FOR YOU SECTION */}
        <section className='p-3'>
          <div className='d-flex align-items-center justify-content-between'>
            <h3 className='fw-bold'>New Items</h3>

            <span className='blue-line'></span>
          </div>
          
          <div className='jfy-main'>
            <OneProductBox product={bestSellers[0]} />
            <OneProductBox product={bestSellers[0]} />
            <OneProductBox product={bestSellers[0]} />
            <OneProductBox product={bestSellers[0]} />
          </div>

        </section>
      </div>

    </>
  )
}

export default Home