import React from 'react'
import '../css/prompt.css'
import { asset_images } from '../assets/images/images'

const Prompt = ({ prompt, subPrompt, callBackText, callBack }) => {
  return (
    <div className='overlay'>

      <div className='prompt-box'>

        <div className='top-circle'>
          <img src={asset_images.prompt_img} alt="" />
        </div>

        <div className='prompt-main'>
          <h3>{prompt}</h3>

          <p>{subPrompt}</p>

          <div className='buttons'>
            <button>Cancel</button>
            <button onClick={() => callBack()}>{callBackText}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prompt