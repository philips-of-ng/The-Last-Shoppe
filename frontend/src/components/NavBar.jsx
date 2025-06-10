import React from 'react'
import '../css/navbar.css'
import { assets_2 } from '../assets/assets/assets'
import { asset_images } from '../assets/images/images'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='logo-div'>
        <img src={asset_images.first_logo} alt="" />
        <h3>Shoppe<sup>+</sup></h3>
      </div>

      <div className='nav-div'>
        <button className='cart-btn'><i class="fa-solid fa-bag-shopping"></i> <span>4</span></button>

        <button className='menu-btn'><i class="fa-solid fa-bars"></i></button>
      </div>
    </div>
  )
}

export default NavBar