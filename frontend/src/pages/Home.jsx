import React from 'react'
import NavBar from '../components/NavBar'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { asset_images } from '../assets/images/images';

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
        <section className='home-section-one'>
          <Slider className='home-slider' {...sliderSettings}>
            <div className='one-slide'><img src={asset_images.shoppe_banner} alt="" /></div>
            <div className='one-slide'><img src={asset_images.shoppe_banner} alt="" /></div>
            <div className='one-slide'><img src={asset_images.shoppe_banner} alt="" /></div>
            <div className='one-slide'><img src={asset_images.shoppe_banner} alt="" /></div>
            <div className='one-slide'><img src={asset_images.shoppe_banner} alt="" /></div>
          </Slider>
        </section>
      </div>

    </>
  )
}

export default Home