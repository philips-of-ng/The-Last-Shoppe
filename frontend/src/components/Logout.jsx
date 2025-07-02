import React from 'react'
import '../css/logout.css'

const Logout = ({ mainPrompt, subPrompt, callBack }) => {
  return (
    <div className='logout-component'>

      <div className='logout'>
        <div>
          <h3 className='fw-bold'>{ mainPrompt }</h3>

          <p>{ subPrompt }</p>
        </div>

        <div>

        </div>
      </div>

    </div>
  )
}

export default Logout