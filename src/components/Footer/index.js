import React from 'react';
import NewWindow from './icons/NewWindow';
import './Footer.css';
const index = () => {
  return (
    <footer className='footer'>
        <div className='footer_content'>
            <div className='footer_source'>
                <label htmlFor='source' className='footer_source-title'>
                    Source
                </label>

                <a href="https://en.wiktionary.org/wiki/heart" target='_blank'className='footer_source-link'>
                    https://en.wiktionary.org/wiki/heart
                </a>

                <NewWindow />
            </div>
        </div>
    </footer>
  )
}

export default index