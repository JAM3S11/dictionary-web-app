import React from 'react';
import './Pronounce.css';
// import './PlayButton.js';
import PlayButton from './PlayButton.js';

let audio =null;
const index = ({phonetics,word,phonetic}) => {
  // console.log(phonetic);
  // console.log(phonetics);

  const pronounce =() => {

    let foundPhonetic =null;
    foundPhonetic = phonetics.find(phonetic=>{
      return phonetic.audio && phonetic.text ?phonetic:null;
    });

    if(!foundPhonetic) {
      return;
    }
    if(audio !== null) {
      audio.pause();
      audio.currentTime = 0 ;
    }
    //create new audio
    audio = new Audio(foundPhonetic.audio);
    audio.play();
  }
  return (
    <div className='pronounce'>
        <div className='pronounce_text-box'>
            <h1 className='pronounce_title'>
                {word}
            </h1>
           

            {phonetic &&
             <span className='pronounce_text'>
             {phonetic}
         </span> 
            }
        </div>

        <div className='pronounce_audio-box'>
            
            <PlayButton onClick={pronounce} />
            </div>
    </div>
  )
}

export default index