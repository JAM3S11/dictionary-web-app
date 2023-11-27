import React from 'react'
import Pronounce from '../Pronounce/index.js';
import Footer from '../Footer/index.js';
import Searching from '../Searching/index.js';
import PartsOfSpeech from '../PartsOfSpeech/index.js';

import {groupedMeanings} from '../../utils/groupedMeanings.js';

import NotFound from '../NotFound/NotFound.js';
const index = ({ searching, idle, notFound, content }) => {
  // console.log(searching);
  // console.log(notFound);
  console.log(content);

  if(idle){
    return <main className='main'></main>
  }

  if (notFound) {
    return (
      <main className='main'>
         <NotFound />
      </main>
    );
  }

  if (searching) {
    return (
      <main className='main'>
        <Searching />
      </main>
    );
  }
  else if (!searching && content) {

    return (
      <main className='main'>
  
           <Pronounce phonetics={content.phonetics} 
           word={content.word} 
           phonetic={content.phonetic} />
          {/* Part of speech */}
           <PartsOfSpeech 
           meanings={groupedMeanings(content.meanings)} />
          
           <Footer />
  
          {/* <NotFound></NotFound> */}
      </main>
    );
  }else {
    return <main className='main'></main>
  }
  
}

export default index