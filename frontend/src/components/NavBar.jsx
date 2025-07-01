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

  const [ocvActive, setOcvActive] = useState('')
  const inner_offCanvasRef = useRef()
  const backdropRef = useRef() // ✅ for overlay animations

  const handleCloseOCV = (e) => {
    const panel = inner_offCanvasRef.current;
    const backdrop = backdropRef.current;

    if (panel && backdrop && !panel.contains(e.target)) {

      // ✅ Animate out the overlay
      backdrop.classList.remove('animate__fadeIn')
      backdrop.classList.add('animate__fadeOut')

      // ✅ Animate out the panel
      panel.classList.remove('animate__slideInRight')
      panel.classList.add('animate__fadeOutRight')

      // ✅ Wait for both animations to finish
      const handleBackdropEnd = () => {
        backdrop.classList.remove('animate__fadeOut')
        backdrop.removeEventListener('animationend', handleBackdropEnd)
      }

      const handlePanelEnd = () => {
        panel.classList.remove('animate__fadeOutRight')
        panel.removeEventListener('animationend', handlePanelEnd)
        setOcvActive('') // ✅ finally close
      }

      backdrop.addEventListener('animationend', handleBackdropEnd)
      panel.addEventListener('animationend', handlePanelEnd)


    }
  }

  const handleOpenOCV = () => {
    const panel = inner_offCanvasRef.current;
    const backdrop = backdropRef.current;

    if (panel && backdrop) {
      // clean previous exit animations
      panel.classList.remove('animate__fadeOutRight')
      backdrop.classList.remove('animate__fadeOut')

      // start entrance animations
      panel.classList.add('animate__slideInRight')
      backdrop.classList.add('animate__fadeIn')

      setOcvActive('ocv-active')
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

          <button onClick={handleOpenOCV} className='menu-btn'><i className="fa-solid fa-bars"></i></button>
        </div>
      </div>

      {/* ✅ overlay (fade) */}

      <>
        <div
          ref={backdropRef}
          className={`off-canvas-container animate__animated ${ocvActive}`}
          onClick={handleCloseOCV}
        >
          {/* ✅ panel (slideIn) */}
          <div
            ref={inner_offCanvasRef}
            className='off-canvas animate__animated'
          >
            <div className="ocv-top">
              <img src={asset_images.first_logo} alt="" />
              <h3>Shoppe<sup>+</sup></h3>
            </div>

            <div className='ocv-mid'>
              <button className='one-ocv-btn active-ocv-btn'>
                <span>Home</span>
                <i class='bxr  bx-home-circle'></i>
              </button>

              <button className='one-ocv-btn'>
                <span>Products</span>
                <i class='bxr  bx-t-shirt'></i>
              </button>

              <button className='one-ocv-btn'>
                <span>My Cart</span>
                <i class='bxr  bx-shopping-bag-alt'></i>
              </button>

              <button className='one-ocv-btn'>
                <span>Profile</span>
                <i class='bxr  bx-user-circle'></i>
              </button>

              <button className='one-ocv-btn'>
                <span>Discounts</span>
                <i class='bxr  bx-piggy-bank'></i>
              </button>
            </div>

            <div className="ocv-bottom">
              <button className='one-ocv-btn'>
                <span>Settings</span>
                <i class='bxr  bx-cog'></i>
              </button>

              <button className='one-ocv-btn'>
                <span>Logout</span>
                <i class='bxr  bx-arrow-out-right-square-half'></i>
              </button>

              <p className='cp'><i class='bxr  bx-copyright'></i> Égúnmogají 2025 <br /> All Rights Reserved</p>
            </div>
          </div>
        </div>
      </>

    </>
  )
}


export default NavBar