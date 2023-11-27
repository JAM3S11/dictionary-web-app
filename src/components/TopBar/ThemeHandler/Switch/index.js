import React from 'react';
import './Switch.css';
const index = ({dark}) => {
  return (
    <div className='switch'>
        <span 
        className={`switch_track ${dark ? "dark" : ""}`}>
            <span className="switch_ball"></span>
        </span>
    </div>
  )
}

export default index