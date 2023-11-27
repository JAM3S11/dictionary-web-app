import React, {useState, useEffect} from 'react';

import iconMoon from './icons/iconMoon';
import Switch from './Switch/index';
import './ThemeHandler.css';
const ThemeHandler = () => {
    const[dark,setDark] =useState(false);

    useEffect(() => {

    if(dark){
        document.querySelector('body').classList
        .add('dark');
    }else{
        document.querySelector('body').classList.
        remove('dark');
    }
    }, [dark]);
  return (
    <div className='theme-handler'>
        <input 
        type="checkbox" 
        value="dark" 
        id="theme" 
        className='theme-handler_checkbox'
        onChange={(e) => {
            setDark(e.target.checked);
        }} />
        <label htmlFor="theme" className='theme-handler_label'>
            <Switch dark={dark}/>
            <iconMoon dark={dark} />
        </label>
    </div>
  )
}

export default ThemeHandler