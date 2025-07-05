import React, { useState, useEffect } from 'react';
import '../css/prompt.css';
import { asset_images } from '../assets/images/images';

const Prompt = ({ prompt, subPrompt, callBackText, callBack, onCancel, cancelFunction }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [animationEnd, setAnimationEnd] = useState(false);

  const handleCancel = () => {
    setIsExiting(true);
  };

  // Wait for animation to finish before calling onCancel
  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        setAnimationEnd(true);
        onCancel?.();
      }, 500); // match animation duration in ms
      return () => clearTimeout(timer);
    }
  }, [isExiting, onCancel]);

  // Exit early if prompt is done animating out
  if (animationEnd) return null;

  return (
    <div
      className={`overlay animate__animated ${isExiting ? 'animate__fadeOut' : 'animate__fadeIn'
        }`}
    >
      <div
        className={`prompt-box animate__animated ${isExiting ? 'animate__zoomOut' : 'animate__zoomIn'
          }`}
      >
        <div className="top-circle">
          <img src={asset_images.prompt_img} alt="prompt visual" />
        </div>

        <div className="prompt-main">
          <h3>{prompt}</h3>
          <p>{subPrompt}</p>

          <div className="buttons">
            <button className="main-btn" onClick={callBack}>
              {callBackText}
            </button>
            <button className="vice-btn" onClick={() => {
              handleCancel()
              cancelFunction()
            }}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;




// import React from 'react'
// import '../css/prompt.css'
// import { asset_images } from '../assets/images/images'

// const Prompt = ({ prompt, subPrompt, callBackText, callBack }) => {
//   return (
//     <div className='overlay'>

//       <div className='prompt-box'>

//         <div className='top-circle'>
//           <img src={asset_images.prompt_img} alt="" />
//         </div>

//         <div className='prompt-main'>
//           <h3>{prompt}</h3>

//           <p>{subPrompt}</p>

//           <div className='buttons'>
//             <button className='main-btn' onClick={() => callBack()}>{callBackText}</button>
//             <button className='vice-btn'>Cancel</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Prompt