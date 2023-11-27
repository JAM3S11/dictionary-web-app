import React from 'react';
import './SelectFont.css';

const index = () => {

const handleFont =(e)=>{

    document.querySelector('body').style.fontFamily = e.target.value;
}
  return (
    <div className='select-wrapper'>
        <select 
        name='select-font' id='select-font'
         className='select-font'
         onChange={handleFont}>
            <option value="sans-serif">Sans Serif</option>
            <option value="inconsolata">Inconsolata</option>
            <option value="inter">Inter</option>
            <option value="lora">Lora</option>
         </select>
         <div className='select-arrow'></div>
    </div>
  )
}

export default index
