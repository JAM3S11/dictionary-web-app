import React from 'react';

// import logo from '../../assets/images/logo.svg';
import logo from '../../assets/images/logo.svg';
import './TopBar.css';

import SelectFont from './SelectFont/index.js';
import ThemeHandler from './ThemeHandler/index.js';
const index = () => {
  return (
    <div className='topbar'>
        <div className='topbar_content'>
            <div className='brand'>
              <img src={logo} alt="Logo" />
            </div>
            <div className='topbar_actions'>
              <SelectFont />
              <ThemeHandler />
            </div>
        </div>
    </div>
  )
}

export default index