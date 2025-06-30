import React, { useEffect, useRef, useState } from 'react'
import '../css/navbar.css'
import { assets_2 } from '../assets/assets/assets'
import { asset_images } from '../assets/images/images'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {

  const location = useLocation()
  useEffect(() => {
    console.log('This is the current location of the app according to the navbar', location);
  }, [])

  // --- Set visibility of the off canvas menu -{ active / null }
  const [ocvActive, setOcvActive] = useState('')

  const inner_offCanvasRef = useRef()

  const handleCloseOCV = (e) => {
    if (inner_offCanvasRef.current && !inner_offCanvasRef.current.contains(e.target)) {
      setOcvActive('')
    }
  }


  return (

    <>
      <div className='navbar'>
        <Link to={'/'} className='logo-div'>
          <img src={asset_images.first_logo} alt="" />
          <h3>Shoppe<sup>+</sup></h3>
        </Link>

        <div className='nav-div'>
          <button className='cart-btn'><i className="fa-solid fa-bag-shopping"></i> <span>4</span></button>

          <button onClick={() => setOcvActive('ocv-active')} className='menu-btn'><i className="fa-solid fa-bars"></i></button>

        </div>
      </div>


      <div className={`off-canvas-container animate__animated animate__fadeInRight ${ocvActive}`} onClick={handleCloseOCV}>
        <div className='off-canvas' ref={inner_offCanvasRef}>

          <div className="ocv-top">
            <img src={asset_images.first_logo} alt="" />
            <h3>Shoppe<sup>+</sup></h3>
          </div>

          <div className='ocv-mid'>

            <button className='one-ocv-btn active-ocv-btn'>
              <span>Home</span>
              <i class='bxr  bx-home-circle'  ></i>
            </button>

            <button className='one-ocv-btn'>
              <span>Products</span>
              <i class='bxr  bx-t-shirt'  ></i>
            </button>

            <button className='one-ocv-btn'>
              <span>My Cart</span>
              <i class='bxr  bx-shopping-bag-alt'  ></i>
            </button>

            <button className='one-ocv-btn'>
              <span>Profile</span>
              <i class='bxr  bx-user-circle'  ></i>
            </button>

            <button className='one-ocv-btn'>
              <span>Discounts</span>
              <i class='bxr  bx-piggy-bank'  ></i>
            </button>


          </div>

          <div className="ocv-bottom">

            <button className='one-ocv-btn'>
              <span>Settings</span>
              <i class='bxr  bx-cog'  ></i>
            </button>

            <button className='one-ocv-btn'>
              <span>Logout</span>
              <i class='bxr  bx-arrow-out-right-square-half'  ></i>
            </button>

            <p className='cp'><i class='bxr  bx-copyright'  ></i> Égúnmogají 2025 <br /> All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default NavBar