import React from 'react'
import '../css/home.css'
import NavBar from '../components/NavBar'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { asset_images } from '../assets/images/images';
import Categories from '../components/Categories';

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


        <section>
          <div className='d-flex align-items-center justify-content-between'>
            <h3 className='fw-bold'>Categories</h3>

            <span className='blue-line'></span>
          </div>

          <div>

          </div>
        </section>

      </div>

    </>
  )
}

export default Home