import React from 'react'
import "./components.scss";

function MainBG({children}) {
  return (
    <div className='main-bg'> 
        {children}
    </div>
  )
}

export default MainBG