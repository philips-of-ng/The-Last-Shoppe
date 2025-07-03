import React, { useEffect, useRef, useState } from 'react'
import '../css/navbar.css'
import { assets_2 } from '../assets/assets/assets'
import { asset_images } from '../assets/images/images'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logout from './Logout'
import Prompt from './Prompt'


const NavBar = () => {
  const location = useLocation().pathname
  useEffect(() => {
    console.log('This is the current location of the app according to the navbar', location);
  }, [])

  const navigate = useNavigate()

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

      <Prompt prompt={'Logout'} subPrompt={'Are you sure you want to Logout?'} callBackText={'Logout'} />

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
              <button
                className={`one-ocv-btn ${location === '/' ? 'active-ocv-btn' : ''}`}
                onClick={() => navigate('/')}
              >
                <span>Home</span>
                <i className='bxr bx-home-circle'></i>
              </button>

              <button
                className={`one-ocv-btn ${location.startsWith('/products') ? 'active-ocv-btn' : ''}`}
                onClick={() => navigate('/products')}
              >
                <span>Products</span>
                <i className='bxr bx-t-shirt'></i>
              </button>

              <button
                className={`one-ocv-btn ${location.startsWith('/cart') ? 'active-ocv-btn' : ''}`}
                onClick={() => navigate('/cart')}
              >
                <span>My Cart</span>
                <i className='bxr bx-shopping-bag-alt'></i>
              </button>

              <button
                className={`one-ocv-btn ${location.startsWith('/profile') ? 'active-ocv-btn' : ''}`}
                onClick={() => navigate('/profile')}
              >
                <span>Profile</span>
                <i className='bxr bx-user-circle'></i>
              </button>

              <button
                className={`one-ocv-btn ${location.startsWith('/discounts') ? 'active-ocv-btn' : ''}`}
                onClick={() => navigate('/discounts')}
              >
                <span>Discounts</span>
                <i className='bxr bx-piggy-bank'></i>
              </button>
            </div>

            <div className="ocv-bottom">
              <button
                className={`one-ocv-btn ${location.startsWith('/settings') ? 'active-ocv-btn' : ''}`}
                onClick={() => navigate('/settings')}
              >
                <span>Settings</span>
                <i className='bxr bx-cog'></i>
              </button>

              <button
                className='one-ocv-btn'
                onClick={() => {

                }}
              >
                <span>Logout</span>
                <i className='bxr bx-arrow-out-right-square-half'></i>
              </button>

              <p className='cp'>
                <i className='bxr bx-copyright'></i>
                Égúnmogají 2025 <br /> All Rights Reserved
              </p>
            </div>
          </div>


        </div>
      </>

    </>
  )
}


export default NavBar