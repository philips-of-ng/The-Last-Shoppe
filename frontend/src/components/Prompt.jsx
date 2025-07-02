import React from 'react'
import '../css/prompt.css'
import { asset_images } from '../assets/images/images'

const Prompt = ({  }) => {
  return (
    <div className='overlay'>

      <div className='prompt-box'>

        <div className='top-circle'>
          <img src={asset_images.prompt_img} alt="" />
        </div>



      </div>
    </div>
  )
}

export default Prompt