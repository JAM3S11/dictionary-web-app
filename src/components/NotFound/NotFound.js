import React from 'react';
import './NotFound.css';
import disappointed from '../../assets/images/disappointed-face-svgrepo-com.svg';

const NotFound = () => {
  return (
    <div className='not-found'>
        <img src={disappointed} alt='sad' className='not-found_emoji' />
        <h2 className='not-found_title'>No Definitions found</h2>
        <p className='not-found_description'>
            Sorry pal, we couldn't find definitions for the word you were looking for.<br/>
            Please try again with new word.
        </p>
    </div>
  )
}

export default NotFound